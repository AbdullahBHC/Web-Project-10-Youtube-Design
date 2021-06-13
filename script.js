var btntikla = document.getElementById("btn");

var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");

var videoo = document.getElementById("videox");
var bodyy = document.getElementById("body");
var deneme = document.getElementById("group1-video1");
var kontrol = 0;

btntikla.onclick = function () {
    kontrol++;

    if (kontrol % 2 == 0) {
        menu1.style.display = "block";
        menu2.style.display = "none";
        videoo.style.width = "88%";
        videoo.style.paddingLeft = "7.5vh";
    } else {
        menu1.style.display = "none";
        menu2.style.display = "block";
        videoo.style.width = "96%";
        videoo.style.paddingLeft = "1vh";
    }
}

// if (body.style.maxWidth="1500px") {
//     deneme.style.color="green";
//      deneme.innerHTML="2,5 saatte ne kadar kazandım? | Volta RS7 | Moto kurye Günlüğü";
// }
// else if (body.style.maxWidth>"1500px"){
//     deneme.style.color="red";

//     deneme.innerHTML="2,5 saatte ne kadar kazandım? | Volta RS7 | Moto kurye Günlüğü 12 bölüm";
// }