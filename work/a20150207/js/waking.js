$().ready(function(e) {
   $(".menu-w ul li").mousemove(function(){ 	
	  $(".xiala").hide()
	  $(this).find(".xiala").show();
   })
   
   $(".case_list").mousemove(function(){ 	
	  $(".case_x").hide()
	  $(this).find(".case_x").show();
   })
});