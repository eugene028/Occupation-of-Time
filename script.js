var mainbox = document.querySelector(".view");
mainbox.addEventListener('click', function(){
        mainbox.classList.remove("hidden");
        console.log("클릭");
});

var youtube = document.querySelector(".youtube");
youtube.addEventListener('click', function(){
    window.open('https://youtu.be/emq3ZVNCUGs');
})

var sidebar = document.querySelector(".sidebarCollapse");
sidebar.addEventListener('click',function(){
    document.querySelector(".sidebar").classList.add("active");
    document.querySelector(".overlay").style.display ="block";
})

var overlay = document.querySelector(".overlay");
overlay.addEventListener('click',function(){
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".overlay").style.display ="none";
})

var sidebutton = document.querySelector(".sideform");
sidebutton.addEventListener('click',function(){
    document.querySelector(".sidebar").classList.remove("active");
    document.querySelector(".overlay").style.display ="none";
    document.querySelector('.form-container').scrollIntoView({behavior:'smooth'});
});