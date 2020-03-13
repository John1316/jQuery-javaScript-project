/*
$(".test").show(2000)
$(".test").hide(2000)
$(".test").toggle(2000)

$(".test").slideDown(2000)
$(".test").slideUp(2000)
$(".test").slideToggle(1000)

 $(".test").fadeIn(1000)    
 $(".test").fadeOut(1000)    
 $(".test").fadeToggle(1000) 
 $(".test").fadeTo(1500 , 0.2)   

// callBack function $("#btnB").click (function (){
    $(".test").slideUp(1500, function(){
        $("#btnB").css("backgroundColor","red")
    });

// animated     $(".test").animate {el animation nafso:'value' } ({width:'50%',height:'+=200px',borderRadius:'5%',backgroundColor:'red' },2000)




$("#btnB").click (function (){
    $(".test").animate({width:'50%',height:'+=200px',borderRadius:'5%',backgroundColor:'red' },2000)
  

})

$("section").animate( {width:'100%'},1000)
$("section").animate( {height:'100%'},1000,function(){
    $("h2").fadeIn(1000)

})

$("#start").click(function(){
    $(".test").animate({width:'100%'},4000)// bt2bal animation m3ada background color
    $(".test").animate({height:'100%'},3000)
})

$("#stop").click(function(){
    $(".test").stop(true,false);  // hna el default bta3 stop hwa (false=>mw2fsh 7aga ,trueawsl=>lel25r)

})

//    $(".test").html("<h2>Sassy</h2>") => tags bs zae <h2></h2>
//    $(".test").html("sassy") => text bs 
//    $(".test").val(); => bytl3 ele ktbto gwa elform 
//    $(".test").CSS(); => bytl3 ele ktbto gwa elform :  $(".test").click(function()
    {
        $(".test").css({"backgroundColor": "blue" , "borderRadius":"50%"})
    })


//$("span").parents().css("",""); Kol ele 7wlen el tag 
//$("span").parent().css("",""); el ab elmobashr le tag
//$("span").parentsUntil("Section").css("","");
//$("el parent nafso ").children() 34an n3rf el child bta3o 
//$("section").find("span").css("border","solid 3px green");
//$("section").find("hna ana b2olo hatly el7aga de").css("border","solid 3px green"); 
//$("section").find(*).css("border","solid 3px green"); lw nagma yb2a hat kol 7aga fel section maslun

//$(".x").click(function(){
    $(this).css("","") ba8er el 7aga ele bados 3laha 
})
//$(".x").click(function(){
    $(this).siblings().css("color","red") lma a3oz ados 3la 7aga yb2a kolo a7mar m3ada el wa7da tb2a soda 
})
//$(".x").click(function(){
    $(this).css("color","black") // lma a3oz ados 3laha we targ3 a7mar we ados 3la 7aga tanya we tb2a soda 
    $(this).siblings().css("color","red")
})

//let  colors = [ "yellow", "green" ,"red" ,"blue" ]

$(".x").click(function(){
    let x = Math.round( Math.random()*3);

    $(this).css("color","black");
    $(this).siblings().css("color",colors[x]);// a5li alwan tdas 3ashwa2y
})

//$(this).addClass("test")
//$(this).removeClass("test")
//$(this).toggleClass("test") bt5lih mwgod lw msh mwgod we msh mwgod lw mwgod 
//$(this).empty() btfdy kol 7aga 
//$(this).remove() 
//

*/


$("ul li").eq(0).css("color","green")


   