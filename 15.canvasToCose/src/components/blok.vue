<template>
<div class="wrapper">
  <div id="info"></div>
  <canvas id="canvas" width="700px" height="700px"></canvas>

</div>
</template>
<script>
  export default {
    name: "blok",
    beforeCreate(){

    },
    mounted(){
      let winWidth = document.documentElement.clientWidth
      let winHeight =document.documentElement.clientHeight

      document.getElementById('canvas').setAttribute('width',`${winWidth}px`)
      document.getElementById('canvas').setAttribute('height',`${winHeight}px`)


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
      var speed2=150;  //旋转速度
      var over=false;  //游戏结束标志
      var INTERID;  //周期函数ID

      function drawmap() {
        ctx.save();
        ctx.fillStyle = "rgba(50%,25%,25%,0.9)";
        ctx.translate(winWidth/2, 250);  // 设置旋转中心
        ctx.rotate(canalpha);           // 设置旋转角度
        ctx.translate(-winWidth/2, -250);  // 设置画布中心


        // https://ifish.im/games/jfcd/images/roata-sheet0.png
        var img=new Image();
        var img0=new Image();
        img.src="https://ifish.im/games/jfcd/images/roata-sheet0.png";
        img0.src="https://ifish.im/games/jfcd/images/cutitinfipt1-sheet0.png";
        ctx.restore();
        // 初始化木桶


        // 初始化刀子
        ctx.save();
        ctx.arc(winWidth/2, 250, cirradius, 0, Math.PI * 2, true);
        ctx.rotate(Math.PI);
        ctx.drawImage(img0,-winWidth/2-12,-410,24,115)
        ctx.restore();





        if(!ins) {

          drawNail(num);

        }else{
          nailact(num);
        }
        //使用for循环去 插进去内容
        for (var j = 1; j <= angel.length; j++) {
          // ctx.save();
          // ctx.arc(winWidth/2, 250, cirradius, 0, Math.PI * 2, true);
          // ctx.rotate(Math.PI);
          ctx.drawImage(img0,winWidth/2 + Math.sin(angel[j]) * 100, 450 - (200 - Math.cos(angel[j]) * 100),24,115)
          // ctx.restore();


          ctx.fillStyle = "rgba(0,0,0,0.5)";//由于填充颜色只能用于一次路径或fill函数，所以需放在循环内
          ctx.beginPath();
          ctx.moveTo(winWidth/2 + Math.sin(angel[j]) * 200, 450 - (200 * (1 - Math.cos(angel[j]))));
          ctx.lineTo(winWidth/2 + Math.sin(angel[j]) * 100, 450 - (200 - Math.cos(angel[j]) * 100));
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
         ctx.drawImage(img,396,0,396,394,  (winWidth-cirradius*2)/2,150,cirradius*2,cirradius*2);
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
          // 游戏结束
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
          ctx.arc(winWidth/2 + Math.sin(canalpha) * (350 - n * speed), 600 - (350 - Math.cos(canalpha) * (350 - n * speed)), smciradius, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.fillText(i, 247 + Math.sin(canalpha) * (350-n*speed), 605 - (350 - Math.cos(canalpha) * (350 - n * speed)));
          n++;
        }else{//
          // ctx.beginPath();
          //      ctx.arc(250 + Math.sin(canalpha) * 215, 600 - (350 - Math.cos(canalpha) * 215), smciradius, 0, Math.PI * 2, true);
          //      ctx.moveTo(250+ Math.sin(canalpha) * 200,450-(200*(1 - Math.cos(canalpha))));
          //      ctx.lineTo(250+ Math.sin(canalpha) * 100, 450-(200 - Math.cos(canalpha) *100));
          //      ctx.fill();
          //      ctx.stroke();
          //      ctx.closePath();
          //      ctx.fillStyle = "#FFFFFF";
          //      ctx.fillText(i, 247 + Math.sin(canalpha) *215, 605 - (350 - Math.cos(canalpha) * 215));/** / * 尝试画面无闪顿的方法*/
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

        ctx.save();
         // ctx.translate(0,0)
       // ctx.rotate(-canalpha/3)
        // ctx.translate(-140,-140)
        ctx.strokeStyle='rgb(99,99,99)'
        ctx.strokeRect(winWidth/2,550,70,70)
        // ctx.fillStyle="rgba(0,0,0,0.5)";
        // ctx.beginPath();
        // ctx.translate(winWidth/2+Math.sin(canalpha)*350,600-(1-Math.cos(canalpha))*350);
        // ctx.translate(-winWidth/2+Math.sin(canalpha)*350,-600-(1-Math.cos(canalpha))*350);
        // ctx.arc(winWidth/2+Math.sin(canalpha)*350,600-(1-Math.cos(canalpha))*350,smciradius,0,Math.PI*2,true);
        //
        // ctx.closePath();
        // ctx.fill();
        // ctx.fillStyle="#000000";
        // ctx.fillText(i,winWidth/2+Math.sin(canalpha)*350,605-(1-Math.cos(canalpha))*350);
        ctx.restore();


        //
        // var img0=new Image();
        // img0.src="https://ifish.im/games/jfcd/images/cutitinfipt1-sheet0.png";
        //
        // console.log(winWidth/2+Math.sin(canalpha)*350,600-(1-Math.cos(canalpha))*350,smciradius)
        // // ctx.translate(winWidth/2+Math.sin(canalpha)*350-12,540-(1-Math.cos(canalpha))*350);
        // // ctx.rotate(-canalpha);
        // ctx.save();
        // ctx.translate(0,0);
        // ctx.rotate(0);
        // ctx.drawImage(img0,0,0,24,115);
        // //ctx.translate(-12,-12);
        // ctx.restore();
        // ctx.translate(-winWidth/2, -250);
        // ctx.translate(-winWidth/2+Math.sin(canalpha)*350-12,-540-(1-Math.cos(canalpha))*350);

        // ctx.translate(winWidth/2, 250);
        // ctx.rotate(canalpha);
        // ctx.translate(-winWidth/2, -250);
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
