document.getElementById('javascriptbutton').addEventListener('click',()=> {
    window.location.href = 'javascript.html'
})  

document.getElementById('laravelbutton').addEventListener('click',()=> {
    window.location.href = 'laravel.html'
})  

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}