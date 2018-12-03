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

    // ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
    // ctx.save();                  // 保存默认状态
    //
    // ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
    // ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
    //
    // ctx.save();                  // 保存当前状态
    // ctx.fillStyle = '#FFF'       // 再次改变颜色配置
    // ctx.globalAlpha = 0.5;
    // ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
    //
    // ctx.restore();               // 重新加载之前的颜色状态
    // ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
    //
    // ctx.restore();               // 加载默认颜色配置
    // ctx.fillRect(60,60,30,30);

    /**
     * save() restore()  保存和恢复原来的状态
     * **/

    // for (var i = 0; i < 3; i++) {
    //   for (var j = 0; j < 3; j++) {
    //     ctx.save();
    //     ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
    //     ctx.translate(10 + j * 50, 10 + i * 50);
    //     console.log(10 + j * 50,10 + i * 50);
    //     ctx.fillRect(150, 0, 25, 25);
    //     ctx.restore();
    //   }
    // }
    //
    //
    // ctx.translate(75,305);
    // ctx.scale(1.1,0.4);
    // for (var i=1;i<6;i++){  // 五个层次
    //   ctx.save();
    //   ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
    //   for (var j=0;j<i*6;j++){  // 六个小球
    //     ctx.rotate(Math.PI*2/(i*6));  // 旋转画布
    //     ctx.beginPath();
    //     ctx.arc(0,i*12.2,5,0,Math.PI*2,true);
    //     ctx.fill();
    //   }
    //   ctx.restore();
    // }
    //
    //  setTransform
    var sin = Math.sin(Math.PI/6);
    var cos = Math.cos(Math.PI/6);
    ctx.translate(100, 100);
    var c = 0;
    for (var i=0; i <= 12; i++) {
      c = Math.floor(255 / 12 * i);
      ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
      ctx.fillRect(0, 0, 100, 10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }

    /**
     * transform(m11, m12, m21, m22, dx, dy)
     *  m11：水平方向的缩放

        m12：水平方向的倾斜偏移

        m21：竖直方向的倾斜偏移

        m22：竖直方向的缩放

        dx：水平方向的移动

        dy：竖直方向的移动
     *
     *  **/
    ctx.setTransform(1, 0, 0, 1, 100, 100);
    ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
    ctx.fillRect(0, 50, 100, 100);

  }
}
</script>

<style scoped>

</style>
