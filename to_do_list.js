


$("ul").on("click","span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});



$("input").keypress(function(e){
	if(e.which ===13){

		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	};

});

$("ul").on("click", "li", function(){
	$(this).toggleClass("comp");
});

$(".fa-pencil").click(function(){
	$("input").fadeToggle(50);

});