<template>
    <div>
      <canvas id="canvas" width="300px" height="300px"></canvas>
    </div>
</template>

<script>
  export default {
    name: "blac",
    mounted(){
      var  canvas=document.getElementById("canvas");
      var ctx=canvas.getContext("2d");
      var canalpha=0;
      var speed2 = 100;
      function ad(){
        ctx.save()
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.translate(140,140)
        ctx.rotate(canalpha)
         ctx.translate(-140,-140)
        let img = new Image()
        img.src = 'https://ifish.im/games/jfcd/images/cutitinfipt1-sheet0.png'
        ctx.drawImage(img,140,140,24,115)
        ctx.restore()
      }

      function ads(){
        ctx.save()
        ctx.translate(140,140)
        // ctx.rotate(0)
        // ctx.translate(-140,-140)
        ctx.strokeStyle='rgb(99,99,99)'
        ctx.strokeRect(0,0,90,90)
        ctx.restore()
      }


      function adss(){
        ctx.save()
        ctx.translate(40,40)
        ctx.rotate(-canalpha/3)
        // ctx.translate(-140,-140)
        ctx.strokeStyle='rgb(99,99,99)'
        ctx.strokeRect(0,0,70,70)
        ctx.restore()
      }
      setInterval(()=>{
        ad()
        ads()
        adss()
        canalpha += Math.PI / speed2;
      },30)
    }
  }
</script>

<style scoped>

</style>
