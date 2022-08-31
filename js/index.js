$("#color-options").hide(); //how to show icon only when reloading the page


$("#options i").click(function(){
    $("#color-options").toggle(1000);
}) // inside & outside



let lis = $("#options ul li");
let hs = $("h1,h2,h3,h4,h5,h6");

for (let i = 0; i < lis.length; i++) {
    let x = Math.round(Math.random() * 254);
    let y = Math.round(Math.random() * 254);
    let z = Math.round(Math.random() * 254);
    lis.eq(i).css("backgroundColor", `rgb( ${x} , ${y} , ${z} )`)
}

lis.click(function(){
    let color = $(this).css("backgroundColor");
    $(hs).css("color",color)
}) 



lis.click(function(){
    let colors = $(this).css("backgroundColor");
    hs.css("color",colors)
})//colors options


$("#options img").click(function(){
   let imgSrc = $(this).attr("src");
   $("#home").css("backgroundImage",`url(${imgSrc})`)
}) //image options


let profileOffset = $(".profile").offset().top;


$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
if (scrollTop >  profileOffset)
{
    $("nav").css("backgroundColor","rgba(0,0,0)")
}
else 
{
    $("nav").css("backgroundColor","transparent")

}

if(scrollTop > 800)
{
    $("#btnUp").fadeIn(500)
    
}
else{
    $("#btnUp").fadeOut(500)
}
}) //nav options


$("#btnUp").click(function(){
    $("body,html").animate({scrollTop:0},1000) 
}) //button up

$("nav a").click(function(){

    let aHref = $(this).attr("href") 
    let linksOffset = $(aHref).offset().top;
    $("body,html").animate({scrollTop:linksOffset},1000) 

}) //nav link smoothing
function darkBtn() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}



$(document).ready(function(){
    $("#loading").fadeOut(function(){
        $("body").css("overflow","auto")
    });

})


/*
$("a[href='#contacts']").click(function(){

    let linksOffset = $("#contacts").offset().top;

    $("body,html").animate({scrollTop:linksOffset},1000) 

})

$("a[href='#home']").click(function(){

    let linksOffset = $("#home").offset().top;

    $("body,html").animate({scrollTop:linksOffset},1000) 

})

$("a[href='#gallery']").click(function(){

    let linksOffset = $("#gallery").offset().top;

    $("body,html").animate({scrollTop:linksOffset},1000) 

})


//el fo2 bto3 colors
let lis = $("#options ul li");
let hs = $("h1,h2,h3,h4,h5,h6");

lis.eq(0).css("backgroundColor","red") 
lis.eq(1).css("backgroundColor","teal") 
lis.eq(2).css("backgroundColor","Tomato") 
lis.eq(3).css("backgroundColor","blue") 
lis.eq(4).css("backgroundColor","orange") 
lis.eq(5).css("backgroundColor","black") 
lis.eq(6).css("backgroundColor","beige") 
lis.eq(7).css("backgroundColor","chocolate") 
lis.eq(8).css("backgroundColor","aqua") 
lis.eq(9).css("backgroundColor","blueviolet") 



lis.click(function(){
    let colors = $(this).css("backgroundColor");
    hs.css("color",colors)
})

*/