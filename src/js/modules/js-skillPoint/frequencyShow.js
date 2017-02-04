/**
 * Created by snail on 2017/2/4.
 */


import React , {Component} from 'react';
import Highlight from 'react-highlight';

import snailUtils,{snailBusinessUtils} from '../../common/snailUtils'

export default class FrequencyShow extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        snailBusinessUtils.overflow2ElPosition();

        var uploadFile = document.getElementById("uploadFile");
        uploadFile.onchange = function(){
            if(uploadFile.files.length!=0){
                var file = uploadFile.files[0];
                var fileReader = new FileReader();
                fileReader.onload = function(e){
                    var fileResult = e.target.result;
                    var resolveFrequency = new ResolveFrequency(fileResult,document.getElementById("picture"));
                    resolveFrequency.resolve();

                    var resolveFrequency1 = new ResolveFrequency(fileResult,document.getElementById("canvas"));
                    resolveFrequency1.resolve();

                }
                fileReader.readAsArrayBuffer(file);

            }
        }

    }

    render(){
        return (
            <div>
                <h1 className="colorLight sub_container_head">音频展示</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                       播放音乐时，音频用波浪展示
                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item"><a href="#oldCreateObject">效果</a></li>
                    <li className="snail_content_nav_item"><a href="#">原理</a></li>
                </ul>

                <h2 id="oldCreateObject" className="two-level-title">
                    效果
                </h2>
                <input type="file" id="uploadFile" />
                <div style={{marginTop:10,background:"#000",height:300,width:"80%",padding:0,position:"relative"}} id="picture"></div>

                <canvas id="canvas" style={{width:"80%",height:"300",marginTop:20,background:"#000"}}></canvas>

            </div>
        )
    }
}


var ResolveFrequency = function(buffer,canvas){
    this.AudioContext = null;
    this.buffer = buffer;
    this.canvas = canvas;
    this.columnWidth = 8;
    this.colGap = 2;

    this.pervPageValue = [];

}

ResolveFrequency.prototype.getAudioContext = function(){
    try{
        this.AudioContext = window.AudioContext ||　window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    }catch (ex){
        console.log("your browser do not support audioContext")
    }

}

ResolveFrequency.prototype.resolve = function(){
    var that = this;
    this.getAudioContext();
    if(this.AudioContext){
        var audioContext = new this.AudioContext();

        audioContext.decodeAudioData(this.buffer,function(buffer){

            var audioBufferSourceNode = audioContext.createBufferSource(),
                analyser = audioContext.createAnalyser();

            audioBufferSourceNode.connect(analyser);
            analyser.connect(audioContext.destination);

            audioBufferSourceNode.buffer = buffer;

            audioBufferSourceNode.start(0);

            that.resolveFrequency(analyser);

        })
    }
}

ResolveFrequency.prototype.resolveFrequency = function(analyser){

    var that = this,
        p = this.canvas,
        width = p.clientWidth,
        height = p.clientHeight,
        meterWidth = this.columnWidth,
        gap =  this.colGap,
        meterNum = width / (meterWidth + gap);

    function readData(){
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum);


        if(that.canvas.nodeName=="CANVAS" &&　p.getContext){
            var ctx = p.getContext("2d");
            ctx.clearRect(0, 0, width, height);

        }

        for(var i=0,l=meterNum;i<=l;i++){
            var value = array[i*step]*height/255;
            if (that.pervPageValue.length < Math.round(meterNum)) {
                that.pervPageValue.push(value); //初始化保存帽头位置的数组，将第一个画面的数据压入其中
            };
            that.draw(i,value,p);

        }


        window.requestAnimationFrame(readData);
    }
    window.requestAnimationFrame(readData);
}


ResolveFrequency.prototype.draw = function(id,height,parent){
    if(this.canvas.nodeName=="DIV"){
        this.drawByDiv(id,height,parent)
    }else{
        this.drawByCanvas(id,height,parent)
    }
}
ResolveFrequency.prototype.drawByDiv = function(id,height,parent){
    var div = document.getElementById(id)
    var div_maozi = document.getElementById(id+"_maozi");
    var top = 0;
    var totalHeight = parent.clientHeight;
    var pervHeight = this.pervPageValue[id];
    if (height < pervHeight) { //如果当前值小于之前值
        top = totalHeight-(--pervHeight)-4 ;
        this.pervPageValue[id] = pervHeight
    } else {
        top = totalHeight-height-4;
        this.pervPageValue[id] = height;
    };

    if(div){
        div.style.height = height+'px';
        div_maozi.style.top = top+"px";
    }else{
        div = document.createElement('div');
        div.id = id;
        div.className = 'colume'
        div.style.height = height+'px';
        div.style.left = (id)*(2+8)+'px'
        parent.appendChild(div);

        div_maozi = document.createElement('div');
        div_maozi.id = id+"_maozi";
        div_maozi.className = 'maozi'
        div_maozi.style.left = (id)*(2+8)+'px'
        div_maozi.style.top = top+"px";
        parent.appendChild(div_maozi);


    }
}

ResolveFrequency.prototype.drawByCanvas = function(index,height,parent){
    var totalHeight = parent.clientHeight;
    if(parent.getContext){
        var ctx = parent.getContext("2d");


        var x = index*(2+8);

        ctx.fillStyle = "#fff";
        //绘制小头
        var pervHeight = this.pervPageValue[index];
        if(height<pervHeight){
            ctx.fillRect(x,totalHeight-(--pervHeight)-4,8,4);
            this.pervPageValue[index] = pervHeight;
        }else{
            ctx.fillRect(x,totalHeight-height-4,8,4); //否则使用当前值直接绘制
            this.pervPageValue[index] = height;
        }

        var linearGradient = ctx.createLinearGradient(x,totalHeight-height,x+8,totalHeight);
        linearGradient.addColorStop(1,"#ff4400")
        linearGradient.addColorStop(0,"green")

        ctx.fillStyle = linearGradient;
        ctx.fillRect(x,totalHeight-height,8,height);



    }
}