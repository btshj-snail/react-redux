/**
 * Created by snail on 16-12-5.
 */


import React, {Component} from 'react';
import Highlight from 'react-highlight';
import snailUtils, {snailBusinessUtils} from '../../common/snailUtils';

export default class Es6String extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        snailBusinessUtils.overflow2ElPosition();
    }

    render() {
        return (
            <div>
                <h1 className="colorLight sub_container_head">ES6-字符串</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                        ES6加强了对Unicode的支持，并且扩展了字符串对象。

                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="codePointAt">codePointAt() </a>
                    </li>
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="includesAndStartsWithAndEndsWith">includes(),
                            startsWith(), endsWith() </a>
                    </li>
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="repeatFunction">repeat() </a>
                    </li>
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="padStartAndPadEnd">padStart()，padEnd() </a>
                    </li>
                </ul>

                <h2 data-anchor="codePointAt" className="two-level-title">
                    codePointAt()
                </h2>
                <p className="code_chunk_desc">
                    JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
                </p>
                <Highlight className="code_chunk">
                    {
                        'let s = "𠮷";\n' +
                        's.length ; //2\n' +
                        's.charAt(0); // ""\n' +
                        's.charAt(1);//"" \n' +
                        's.charCodeAt(0);//55362\n' +
                        's.charCodeAt(1);//57271\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    上面代码中，汉字“𠮷”（注意，这个字不是”吉祥“的”吉“）的码点是0x20BB7，UTF-16编码为0xD842 0xDFB7（十进制为55362
                    57271），需要4个字节储存。对于这种4个字节的字符，JavaScript不能正确处理，字符串长度会误判为2，而且charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值。
                    ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
                </p>
                <Highlight className="code_chunk">
                    {
                        'let s = "𠮷a";\n' +
                        's.codePointAt(0);//134071\n' +
                        's.codePointAt(1);//57271\n' +
                        's.codePointAt(2);//97\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    codePointAt方法的参数，是字符在字符串中的位置（从0开始）。上面代码中，JavaScript将“𠮷a”视为三个字符，codePointAt方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点134071（即十六进制的20BB7）。在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，codePointAt方法的结果与charCodeAt方法相同。

                    总之，codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。
                    你可能注意到了，codePointAt方法的参数，仍然是不正确的。比如，上面代码中，字符a在字符串s的正确位置序号应该是1，但是必须向codePointAt方法传入2。解决这个问题的一个办法是使用for...of循环，因为它会正确识别32位的UTF-16字符。
                </p>

                <Highlight className="code_chunk">
                    {
                        'let s = "𠮷a";\n' +
                        'for(let ch of s){\n' +
                        '   console.log(ch.codePointAt(0).toString(16));\n' +
                        '}\n'
                    }
                </Highlight>

                <h2 data-anchor="includesAndStartsWithAndEndsWith" className="two-level-title">
                    includes(), startsWith(), endsWith()
                </h2>
                <p className="code_chunk_desc">
                    传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
                </p>
                <p className="code_chunk_desc">
                    includes()：返回布尔值，表示是否找到了参数字符串。
                </p>
                <p className="code_chunk_desc">
                    startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
                </p>
                <p className="code_chunk_desc">
                    endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。
                </p>
                <Highlight className="code_chunk">
                    {
                        'let helloworld = "helloworld";\n' +
                        's.startsWith("hello"); //true\n' +
                        's.endsWith("world"); //true\n' +
                        's.includes("o"); //true\n' +
                        '//以上三个方法都支持第二个参数，表示开始搜索的位置。\n' +
                        's.startsWith("world",5); //true\n' +
                        's.endsWith("ll",4); //true\n' +
                        's.includes("o"); //true\n'
                    }
                </Highlight>

                <h2 data-anchor="repeatFunction" className="two-level-title">
                    repeat()
                </h2>
                <p className="code_chunk_desc">
                    repeat() 方法返回一个新的字符串，表示将原字符重复N次
                </p>
                <Highlight className="code_chunk">
                    {
                        'let newStr = "xxoo!".repeat(3);\n' +
                        'console.log(newStr);//xxoo!xxoo!xxoo!\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    参数如果是小数，会被向下取整。
                </p>
                <p className="code_chunk_desc">
                    如果repeat的参数是负数或者Infinity，会报错。
                </p>


                <h2 data-anchor="padStartAndPadEnd" className="two-level-title">
                    padStart()、padEnd()
                </h2>
                <p className="code_chunk_desc">
                    ES7推出了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart用于头部补全，padEnd用于尾部补全。
                </p>
                <Highlight className="code_chunk">
                    "x".padStart(5, "ab") // "ababx"<br/>
                    "x".padStart(4, "ab") // "abax"<br/>

                    "x".padEnd(5, "ab") // "xabab"<br/>
                    "x".padEnd(4, "ab") // "xaba"<br/>

                    'xxx'.padStart(2, 'ab') // 'xxx'<br/>
                    'xxx'.padEnd(2, 'ab') // 'xxx'<br/>

                    'abc'.padStart(10, '0123456789')<br/>
                    // '0123456abc'<br/>

                    'x'.padStart(4) // ' x'<br/>
                    'x'.padEnd(4) // 'x '<br/>
                </Highlight>
                <p className="code_chunk_desc">
                    上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
                    如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
                    如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
                    如果省略第二个参数，则会用空格补全长度。
                </p>
                <p className="code_chunk_desc">
                    padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。
                </p>
                <Highlight className="code_chunk">
                    '1'.padStart(10, '0') // "0000000001"<br/>
                    '12'.padStart(10, '0') // "0000000012"<br/>
                    '123456'.padStart(10, '0') // "0000123456"<br/>
                </Highlight>

                <p className="code_chunk_desc">
                    另一个用途是提示字符串格式。
                </p>
                <Highlight className="code_chunk">
                    '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"<br/>
                    '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"<br/>
                </Highlight>
            </div>
        );
    }

}