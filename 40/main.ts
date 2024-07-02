function make_album(artist_name:string,album_title:string,tracks?:number){
    let album:{artist:string,title:string,tracks?:number}={
        artist:artist_name,
        title:album_title,
    }
    if(tracks !== undefined){
        album.tracks=tracks;
    }
    return album
}

let album1=make_album("Salman","Album Title1")
let album2=make_album("Faizan","Album Title2")
let album3=make_album("Usman","Album Title3",5)

console.log(album1);
console.log(album2);
console.log(album3);