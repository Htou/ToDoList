$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");


    //if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn it black
//         //turn it gray
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     else { 
//         //turn it gray
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }   
});

//click on X to delete todo
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='Text']").keypress(function(event){
    if(event.which == 13){  
        // grabbing new to do text
       var todoText = $(this).val();
       $(this).val("")
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +  "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})