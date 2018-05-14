<template>
  <div class="hello">
    <!--<canvas id="canvas"></canvas>-->
    <!--<img src="" id="image">-->


    <div id="capture" style="padding: 10px; ">
      <h4 style="color: #000; ">Hello world!</h4>
      <img crossorigin="anonymous" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3497300994,2503543630&fm=27&gp=0.jpg" >
    </div>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){

  },
  mounted(){

        // let canvas = document.getElementById('canvas')
        // let ctx = canvas.getContext('2d')
        // let image = new Image()
        // image.setAttribute('crossorigin', 'anonymous')
        //
        //
        // image.src = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3497300994,2503543630&fm=27&gp=0.jpg'
        //
        // image.onload = function() {
        //     ctx.drawImage(image, 0, 0)
        //     document.getElementById('image').src = canvas.toDataURL('image/png')
        // }


// 使用html2canvas 将html 保存
        html2canvas(

          document.querySelector("#capture")

        ).then(canvas=>{
          document.body.appendChild(canvas)
          }

        );

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
