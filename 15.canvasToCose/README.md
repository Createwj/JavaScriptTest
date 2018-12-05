ALL5   koa2 node mongodb react-native canvas vue react angule webpack  小程序  pwa  nginx  cocos2d-js  nuxt.js
exect    2    2     2          1         2    4    2      1     3        3     3      2      0


react-native 原声app开发成本过高 使用react开发替代方案 节约成本

vue koa2 mongodb node(插件) 高仿美团

cocos2d-js  51CTO 李宁游戏H5 2D


<template>
<div class="wrapper">
  <div id="info"></div>
  <canvas id="canvas" width="700px" height="700px"></canvas>

</div>
</template>
<script>
  export default {
    name: "blok",
    mounted(){
      let winWidth = document.documentElement.clientWidth
      let winHeight =document.documentElement.clientHeight
      document.getElementById('canvas').setAttribute('width',`${winWidth}px`)
      document.getElementById('canvas').setAttribute('height',`${winHeight}px`)
      console.log(winWidth,winHeight)

      var ctx;//工具
      var canvas;//画布
      var canalpha=0;
      var cirradius=100;
      var smciradius=15;
      var ani=false; //动画是否在进行中
      var speed=30;  //针的速度
      var ins=false;  //是否可以触发insert动画
      var n=0;  //针的步长
      var num=1;  //针的编号
      var angel=[];  // 各针停留时的角度数组
      angel[0]=0;  //初始化为1根针时设定，可改变
      var speed2=111150;  //旋转速度
      var over=false;  //游戏结束标志
      var INTERID;  //周期函数ID

      function drawmap() {
        ctx.fillStyle = "rgba(50%,25%,25%,0.9)";
        ctx.translate(250, 250);
        ctx.rotate(canalpha);
        ctx.translate(-250, -250);
        ctx.beginPath();
        ctx.arc(250, 250, cirradius, 0, Math.PI * 2, true);
        ctx.moveTo(250, 350);
        ctx.lineTo(250, 450);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.beginPath();
        ctx.arc(250, 465, smciradius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        if(!ins) {
          drawNail(num);
        }else{
          nailact(num);
        }
        //使用for循环去 插进去内容
        for (var j = 1; j <= angel.length; j++) {
          ctx.fillStyle = "rgba(0,0,0,0.5)";//由于填充颜色只能用于一次路径或fill函数，所以需放在循环内
          ctx.beginPath();
          ctx.arc(250 + Math.sin(angel[j]) * 215, 600 - (350 - Math.cos(angel[j]) * 215), smciradius, 0, Math.PI * 2, true);
          ctx.moveTo(250 + Math.sin(angel[j]) * 200, 450 - (200 * (1 - Math.cos(angel[j]))));
          ctx.lineTo(250 + Math.sin(angel[j]) * 100, 450 - (200 - Math.cos(angel[j]) * 100));
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(j, 247 + Math.sin(angel[j]) * 215, 605 - (350 - Math.cos(angel[j]) * 215));
        }
      }


      /**
       * 开始绘制
       * **/
      function mapact() {
        canvas=document.getElementById("canvas");
        ctx=canvas.getContext("2d");
        if(!over) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.save();
          drawmap();
          ctx.restore();
          overgame(); // 判断忧思
          canalpha += Math.PI / speed2;
        }else{
          window.clearInterval(INTERID);  // 定时器绘制
          var pa=document.createElement("p");
          pa.innerHTML="You Lose!!";
          document.getElementById("info").appendChild(pa);
        }
      }


      /**
       * 向上移动的小球
       * **/
      function nailact(i){
        ctx.fillStyle="rgba(0,0,0,0.5)";
        if((350-(n+1)*speed)>=215) {
          // 向 上 移 动 的 小 球
          ctx.beginPath();
          ctx.arc(250 + Math.sin(canalpha) * (350 - n * speed), 600 - (350 - Math.cos(canalpha) * (350 - n * speed)), smciradius, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(i, 247 + Math.sin(canalpha) * (350-n*speed), 605 - (350 - Math.cos(canalpha) * (350 - n * speed)));
          n++;
        }else{
          /*ctx.beginPath();
               ctx.arc(250 + Math.sin(canalpha) * 215, 600 - (350 - Math.cos(canalpha) * 215), smciradius, 0, Math.PI * 2, true);
               ctx.moveTo(250+ Math.sin(canalpha) * 200,450-(200*(1 - Math.cos(canalpha))));
               ctx.lineTo(250+ Math.sin(canalpha) * 100, 450-(200 - Math.cos(canalpha) *100));
               ctx.fill();
               ctx.stroke();
               ctx.closePath();
               ctx.fillStyle = "#FFFFFF";
               ctx.fillText(j, 247 + Math.sin(canalpha) *215, 605 - (350 - Math.cos(canalpha) * 215));* / * 尝试画面无闪顿的方法*/
          angel[i]=canalpha;
          num++;
          n=0;
          ins=false;
        }
      }
      /**
       * 绘制插在上面的小球
       * **/
      function drawNail(i){
        ctx.fillStyle="rgba(0,0,0,0.5)";
        ctx.beginPath();ctx.arc(250+Math.sin(canalpha)*350,600-(1-Math.cos(canalpha))*350,smciradius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle="#FFFFFF";
        ctx.fillText(i,247+Math.sin(canalpha)*350,605-(1-Math.cos(canalpha))*350);
      }
      /**
       * 判断游戏是否结束
       * **/
      function overgame()
      {
        for(var j=0;j<angel.length;j++) {
          if ((Math.abs(Math.sin((angel[num-1] - angel[j]) / 2))<3/43)&&(j!=num-1)) {
            over = true;
          }
        }
      }


      window.onload=function(){
        mapact();
        ani=true;//开启动画
        INTERID=setInterval(mapact,30); // 30ms  1000/30 帧数FPS  人眼24PFS
      }

      document.getElementById("canvas").addEventListener('click',function(){
        if(ani){
          ins=true;
        }else{
          return;
        }
      })


      /**
       * 检测窗口发生变化 改变转盘的样式
      **/
      window.addEventListener("resize", function () {
        mapact();
        console.log('窗口发生变化')
      })

    }
  }
</script>

<style scoped>
.wrapper{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
