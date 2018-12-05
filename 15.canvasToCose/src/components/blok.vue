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


      var ctx; //工具
      var canvas; //画布
      var canalpha=0;  // 旋转角度
      var cirradius=100;  // 半径
      var smciradius=15;  // 小球半径
      var ani=false; //动画是否在进行中
      var speed=30;  //针的速度
      var ins=false;  //是否可以触发insert动画
      var n=0;  //针的步长
      var num=1;  //针的编号
      var angel=[];  // 各针停留时的角度数组
      angel[0]=0;  //初始化为1根针时设定，可改变
      var speed2=50;  //旋转速度
      var over=false;  //游戏结束标志
      var INTERID;  //周期函数ID
      var nums = 0;
      var numsi = 19;
      function drawmap() {
        // ctx.save();ctx.restore();
        if(!ins) {
          drawNails(1);  //  绘制小球
        }else{
         nailacts(num);   // 移动小球
        }
        ctx.fillStyle = "rgba(50%,25%,25%,0.9)";
        ctx.translate(winWidth/2, 250);  // 设置旋转中心
        ctx.rotate(canalpha);           // 设置旋转角度
        ctx.translate(-winWidth/2, -250);  // 设置画布中心

        // https://ifish.im/games/jfcd/images/roata-sheet0.png
        var img=new Image();
        var img0=new Image();
        img.src="https://ifish.im/games/jfcd/images/roata-sheet0.png";
        img0.src="https://ifish.im/games/jfcd/images/cutitinfipt1-sheet0.png";
        // 初始化木桶

        // 初始化刀子
        ctx.save();
        ctx.arc(winWidth/2, 250, cirradius, 0, Math.PI * 2, true);
        ctx.rotate(Math.PI);
        ctx.drawImage(img0,-winWidth/2-12,-410,24,115)
        ctx.restore();
        ctx.closePath();

        // 使用 for 循环去 插进去 内容
        for (var j = 1; j <= angel.length; j++) {
          console.log(angel)
          // ctx.arc(winWidth/2, 250, cirradius, 0, Math.PI * 2, true);
          // ctx.rotate(0.1);
          ctx.drawImage(img0,winWidth/2 + Math.sin(angel[j]) * 100-12, 450 - (200 - Math.cos(angel[j]) * 100)-58,24,115)
          // ctx.translate(-winWidth/2, -250);
          // ctx.restore();
          // ctx.fillStyle = "rgba(0,0,0,0.5)";//由于填充颜色只能用于一次路径或fill函数，所以需放在循环内
          // ctx.beginPath();
          // ctx.moveTo(winWidth/2 + Math.sin(angel[j]) * 200, 450 - (200 * (1 - Math.cos(angel[j]))));
          // ctx.lineTo(winWidth/2 + Math.sin(angel[j]) * 100, 450 - (200 - Math.cos(angel[j]) * 100));
          // ctx.fill();

        }
        ctx.drawImage(img,396,0,396,394,  (winWidth-cirradius*2)/2,150,cirradius*2,cirradius*2);
        ctx.closePath();
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

      function nailacts(i) {
        // console.log(i)
        ctx.fillStyle="rgba(0,0,0,0.5)";
        if((350-(n+1)*speed)>=215) {
          ctx.save()
          var img0=new Image();
          img0.src="https://ifish.im/games/jfcd/images/cutitinfipt1-sheet0.png";
          ctx.translate(winWidth/2,600);
          ctx.rotate(Math.PI);
          if(nums === 0){
            ctx.drawImage(img0,-12,-50,24,115);
          }else if(nums === i){
            numsi++
            console.log(numsi)
            ctx.drawImage(img0,-12,-(50-numsi*10),24,115);
            if(numsi ===22){
              numsi = 19
            }
          }
          nums = i
          ctx.restore()
          n++;
        }else{ //

          angel[i]=canalpha;
          num++;
          n=0;
          ins=false;
        }
      }
      /**
       * 绘制下面的小球
       * **/
       function drawNails(i) {
         ctx.save()
        var img0=new Image();
        img0.src="https://ifish.im/games/jfcd/images/cutitinfipt1-sheet0.png";
        ctx.translate(winWidth/2,600)
        ctx.rotate(Math.PI);
        ctx.drawImage(img0,-12,-50,24,115);
        ctx.restore()
      }

      /**
       * 判断游戏是否结束
       * **/
      function overgame() {
        for(var j=0;j<angel.length;j++) {
          if ((Math.abs(Math.sin((angel[num-1] - angel[j]) / 2))<3/43)&&(j!=num-1)) {  // 控制间隔密度
            over = true;
          }
        }
      }
      window.onload=function() {
        mapact();
        ani=true;//开启动画
        INTERID=setInterval(mapact,30); // 30ms  1000/30 帧数FPS  人眼24PFS
      }

      document.getElementById("canvas").addEventListener('click',function() {
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
