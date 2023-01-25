let html = document.querySelector("#html");
let style = document.querySelector("#style");

let n = 0;
let string = `
/* 你好，我是一名前端新人
接下來我要加样式了
先创建一个div */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 再画一个圆 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 再画一个八卦 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加两个小球 */
#div1::before
{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let string2 = '';
//string = string.replace(/\n/g, "<br>");
// html.innerHTML = string.substring(0, n);
// style.innerHTML = string.substring(0, n);

let step = () => {
    setTimeout(() => {
        // style.innerHTML = string.substring(0, n);
        if (string[n] === "\n") {
            string2 = string2 + "<br>"
        } else {
            string2 = string2 + string[n]
        }
        n = n + 1;
       // html.innerHTML = string.substring(0, n);
       style.innerHTML = string.substring(0, n);
       html.innerHTML = string2;
        if (n < string.length) {
            step();
        }
    }, 0);
};

step();

