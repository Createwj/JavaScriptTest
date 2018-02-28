class Song{
    constructor({id}){
        this.id = id
    }
}

function createSong(){
    return new Song({
        id:1
    })
}
console.log(createSong())