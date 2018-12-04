<template>
<div>
  <canvas id="canvas" width="300" height="400">
    当前浏览器不支持canvas
  </canvas>
</div>
</template>

<script>
export default {
  name: "index",
  created(){

  },
  mounted(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var  canvasBuffer = document.createElement("canvas");
    canvasBuffer.width = canvas.width;
    canvasBuffer.height = canvas.height;
    var  contextBuffer = canvasBuffer.getContext("2d");
    // document.body.appendChild(canvasBuffer)
    /**
     * 位置 宽高 长方形
     * **/
    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect (10, 10, 55, 50);
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect (30, 30, 55, 50);
    /**
     * 清除矩形位置
     * **/
    ctx.clearRect(30, 30, 55, 50);

    /**
     * 描边
     * **/
    // ctx.strokeStyle='rgb(99,99,99)'
    // ctx.strokeRect(40,40,70,70)
    //
    //
    //
    // /**
    //  *  绘制路径  beginPath() closePath() stroke()  fill()
    //  * **/
    // ctx.beginPath();
    // ctx.moveTo(175, 50);
    // ctx.lineTo(200, 75);
    // ctx.lineTo(200, 25);
    // ctx.lineTo(275, 50);
    // // ctx.fill();
    // ctx.stroke()

  //
  //   ctx.beginPath();
  //   ctx.arc(175,175,50,0,Math.PI*2,true); // 绘制 圆
  //   ctx.moveTo(210,175);
  //   ctx.arc(175,175,35,0,Math.PI,false);   // 口(顺时针)  (175,175)-位置  35-半径  0-Math.PI 角度   Boolean 控制绘制的半径
  //   ctx.moveTo(165,165);
  //   ctx.arc(160,165,5,0,Math.PI*2,true);  // 左眼
  //   ctx.moveTo(195,165);
  //   ctx.arc(190,165,5,0,Math.PI*2,true);  // 右眼
  //   ctx.stroke();
  //   ctx.closePath()
  //
     /**
     * 二次贝塞尔曲线
     * quadraticCurveTo(cp1x, cp1y, x, y)
     * 绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
     * **/
  //    ctx.beginPath();
  //    ctx.moveTo(75,25);   // 开始的点
  //    ctx.quadraticCurveTo(25,25,25,62.5);
  //    ctx.quadraticCurveTo(25,100,50,100);
  //    ctx.quadraticCurveTo(50,120,30,125);
  //    ctx.quadraticCurveTo(60,120,65,100);
  //    ctx.quadraticCurveTo(125,100,125,62.5);
  //    ctx.quadraticCurveTo(125,25,75,25);
  //    ctx.stroke();


  // ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
  // ctx.save();                  // 保存默认状态
  // //
  // ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
  // ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
  // //
  // ctx.save();                  // 保存当前状态
  // ctx.fillStyle = '#FFF'       // 再次改变颜色配置
  // ctx.globalAlpha = 0.5;
  // ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
  // //
  // ctx.restore();               // 重新加载之前的颜色状态
  // ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
  // //
  // ctx.restore();               // 加载默认颜色配置
  // ctx.fillRect(60,60,30,30);



     /**
      * 三次白塞尔曲线
      * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
      * 绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
      * **/
       // ctx.beginPath();
       // ctx.moveTo(75,40);
       // ctx.bezierCurveTo(75,37,70,25,50,25);
       // ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
       // ctx.bezierCurveTo(20,80,40,102,75,120);
       // ctx.bezierCurveTo(110,102,130,80,130,62.5);
       // ctx.bezierCurveTo(130,62.5,130,25,100,25);
       // ctx.bezierCurveTo(85,25,75,37,75,40);
       // ctx.fill();
       // ctx.closePath()
  //
  //
  //   //    var rectangle = new Path2D();
  //   // rectangle.rect(10, 10, 50, 50);
  //   //
  //   // var circle = new Path2D();
  //   // circle.moveTo(125, 35);
  //   // circle.arc(100, 35, 25, 0, 2 * Math.PI);
  //   //
  //   // ctx.stroke(rectangle);
  //   // ctx.fill(circle);
  //
  //   for (var i=0;i<6;i++){
  //     for (var j=0;j<6;j++){
  //       ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
  //                        Math.floor(255-42.5*j) + ',0)';
  //       ctx.fillRect(j*35,i*35,15,15);
  //     }
  //   }
  // //   ctx.globalAlpha = 0.2  // 设置透明度
  //
  //   ctx.lineWidth = 10
  //   // ctx.lineCap = 'butt'
  //   ctx.lineCap = 'round'
  //   // ctx.lineCap = 'square'
  //   // ctx.beginPath()
  //   ctx.moveTo(200,30)
  //   ctx.lineTo(200,150)
  //   ctx.stroke()
  //
  //
    // var lineJoin = ['round', 'bevel', 'miter'];
    // ctx.lineWidth = 10;
    // for (var i = 0; i < lineJoin.length; i++) {
    //   ctx.lineJoin = lineJoin[i];
    //   ctx.beginPath();
    //   ctx.moveTo(-5, 5 + i * 40);
    //   ctx.lineTo(35, 45 + i * 40);
    //   ctx.lineTo(75, 5 + i * 40);
    //   ctx.lineTo(115, 45 + i * 40);
    //   ctx.lineTo(155, 5 + i * 40);
    //   ctx.stroke();
    // }
  //
  //
    /**
     * 渐变
    **/
  //   var lingrad = ctx.createLinearGradient(0,0,0,150);
  //   lingrad.addColorStop(0, '#00ABEB');
  //   lingrad.addColorStop(0.5, '#fff');
  //   lingrad.addColorStop(0.5, '#26C000');
  //   lingrad.addColorStop(1, '#fff');
  //
  //   var lingrad2 = ctx.createLinearGradient(0,50,0,95);
  //   lingrad2.addColorStop(0.5, '#000');
  //   lingrad2.addColorStop(1, 'rgba(0,0,0,0)');
  //
  //   // assign gradients to fill and stroke styles
  //   ctx.fillStyle = lingrad;   // 线条填充的时候 使用创建的渐变
  //   ctx.strokeStyle = lingrad2;
  //
  //   // draw shapes
  //   ctx.fillRect(10,10,130,130);
  //   ctx.strokeRect(50,50,50,50);
  //
  //   /**
  //    * 绘制图片  drawImage  Patterns
  //   **/
  //   let img = new Image();
  //   img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  //   img.onload = function() {
  //     let ptrn = ctx.createPattern(img, 'repeat');
  //     ctx.fillStyle = ptrn;  // 填充使用的是ctx创建的图片
  //     ctx.fillRect(100, 150, 150, 150);  // 坐标(100,150) 大小(150,150)
  //   }
    //
    let speed = 1000
    let canalpha = 0
  function ad(){
    contextBuffer.save()
    contextBuffer.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    contextBuffer.translate(100, 250);
    contextBuffer.rotate(canalpha)
    var img = new Image();
     img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function(){}
      contextBuffer.drawImage(img,0,0);
      contextBuffer.beginPath();
      contextBuffer.moveTo(30,96);
      contextBuffer.lineTo(70,66);
      contextBuffer.lineTo(103,76);
      contextBuffer.lineTo(170,15);
      contextBuffer.stroke();
      contextBuffer.restore();
      ctx.drawImage(canvasBuffer, 0, 0);



  }

  setInterval(()=>{
    ad();
    canalpha += Math.PI / speed;
       },1/30)


  }
}
</script>

<style scoped>

</style>
