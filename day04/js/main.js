//创建js/main.js主程序[入口程序]
//(1)创建弹幕对象
//(2)接收用户输入文字
//1.创建函数game
//1.1创建两个全局变量保存画布与画笔
var c3;
var ctx;
//1.2创建两个全局变量保存画布宽高
var canWidth;
var canHeight;
//1.3创建一个全局变量保存弹幕对象
var msg;
//1.4创建四个全局变量  输入框/颜色/字体/发送按钮
var inputMsg;
var inputFont;
var inputColor;
var inputBtn;

function game() {
    init();
    gameloop();
};
//2.创建函数init 负责所有对象创建
function init() {
    //2.1获取画布对象赋值c3
    c3 = document.getElementById("c3");
    //2.2获取画笔对象赋值ctx
    ctx = c3.getContext("2d");
    //2.3获取画布宽度赋值canWidth;
    canWidth = c3.width;
    //2.4获取画布高度赋值canHeight;
    canHeight = c3.height;
    //2.5创建弹幕对象赋值msg
    msg = new msgObj();
    //2.6调用弹幕对象init函数
    msg.init();
    //2.7获取输入框赋值inpytMsg
    inputMsg = document.getElementById("inputMsg");
    //2.8获取文字大小列表赋值inputFont
    inputFont = document.getElementById("inputFont");
    //2.9获取文字颜色赋值inputColor
    inputColor = document.getElementById("inputColor");
    //2.10获取发送按钮
    inputBtn = document.getElementById("inputBtn");
    //2.11为按钮绑定点击事件并且指定事件处理函数handleMsg
    inputBtn.addEventListener("click", handleMsg);
};
//3.创建函数gameloop
function gameloop() {
    //3.1创建定时器
    requestAnimationFrame(gameloop);
    //3.2调用弹幕绘制方法
    msg.draw();
};
//4.将main.js添加到02.html
//5.当页面加载成功事件触发调用game
document.body.onload = game;
//6.创建函数处理用户输入的内容
function handleMsg() {
    console.log(inputMsg.value);
}