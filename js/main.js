var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);

/* Funciones para cerrar el search windows */


let removingSearch = function(){
    document.querySelector("#search_window").classList.remove("on");
}
let addingSearch = function(){
    document.querySelector("#search_window").classList.add("on");
}
window.addEventListener('keydown', function(e){
     if(e.key == 'Escape'){
        removingSearch();
     }
})
document.querySelector("#btn-search").addEventListener('click', function(e){
    addingSearch();
});

document.querySelector("#close-search").addEventListener('click', function(e){
    removingSearch();
});



   