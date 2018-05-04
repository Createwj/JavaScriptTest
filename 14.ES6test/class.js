class Singer {
  constructor({id, name}) {
    this.id = id,
      this.name = name,
      this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000.jpg?max_age=2592000`
  }
}
var b = []
var a = new Singer({
  id: 123,
  name: '121'
})
b.push(a)
var c = [{id:123,name:321}]
console.log(b[0].id)
console.log(c)
for(let i in b[0]){
  console.log(b[0].i)
}