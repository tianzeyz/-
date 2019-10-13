//功能:保存弹幕相关所有数据与行为
// 创建msgObj构造函数
var msgObj = function() {
    //弹幕文字x坐标
    this.x = [];
    //弹幕文字y坐标
    this.y = [];
    //弹幕文字
    this.m = [];
    //弹幕速度
    this.spd = [];
    //弹幕字体
    this.font = [];
    //弹幕颜色
    this.color = [];
    //弹幕状态  true显示   false隐藏
    this.alive = [];
};
//为构造函数添加属性num
msgObj.prototype.num = 100;
//为构造函数添加方法init
msgObj.prototype.init = function() {
    //3.1创建循环遍历所有弹幕
    for (var i = 0; i < this.num; i++) {
        //3.2赋值x  canWidth
        this.x[i] = canWidth;
        //3.3赋值y  0~500
        this.y[i] = 400 * Math.random();
        //3.4赋值m  文字"111"
        this.m[i] = "666";
        //3.5文字大小与颜色  12px   #fff
        this.font[i] = "25px";
        this.color[i] = "#aff";
        //3.6赋值spd   3
        this.spd[i] = 3;
        //3.7赋值alive状态  true
        this.alive[i] = true;
    }
    console.log(this);
};
//为构造函数添加方法draw 绘制
msgObj.prototype.draw = function() {
    //1.创建循环遍历每个弹幕文字
    for (var i = 0; i < this.num; i++) {
        ctx.clearRect(0, 0, canWidth, canHeight)
            //2.判断当前文字是否显示状态
        if (this.alive[i]) {
            //3.获取当前文字颜色
            ctx.fillStyle = this.color[i];
            //4.获取当前文字大小
            ctx.font = this.font[i] + " SimHei";
            //5.获取当前文字内容
            var m = this.m[i];
            //6.修改文字速度
            this.x[i] -= this.spd[i];
            //7.绘制文本
            ctx.fillText(m, this.x[i], this.y[i]);
        }
    }
};
//测试
// var obj=new msgObj();
// obj.init();
// obj.draw();
//将msg.js添加02.html中
//在main.js创建构造函数对象 并调用