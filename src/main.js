let html = document.querySelector('#html') //通过CSS选择器找到这个元素
let style = document.querySelector('#style')

let string = `
/*你好，我是小高
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*接下来我把 div 变成一个太极
*注意看好了
*首先，把 div 变成一个圆
**/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*太极是阴阳形成的
*一黑一白
**/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个风火轮*/
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform:  translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`
let string2 = ''
// string = string.replace(/\n/g, "<br>")   //正则表达式回车换'<br>'
// console.log(string.length) //打出length长度
let n = 0

let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      string2 += '<br>'
      //如果是回车就改成<br>
    } else if (string[n] === ' ') {
      string2 += '&nbsp;'
      //如果是空格就改成'&nbsp;'
    } else {
      //如果不是回车就照搬
      string2 += string[n]
    }
    // string2 += string[n] === '\n' ? '<br>' : string[n]
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    //CSS就不能直接获取string2了，否则会出现 HTML 代码
    window.scrollTo(0, 99999)//竖向滚动条
    html.scrollTo(0, 99999)
    if (n < string.length - 1) {
      // 如果 n 不是最后一个，就继续
      n += 1
      step()
    }
  }, 1)
}
step() //1=>2
