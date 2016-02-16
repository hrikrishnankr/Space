$(document).ready(function(){
   
   $(document).on("click",".dashboard",function(){
   		$('.dashboard').find("a").addClass("show_color");
   		$('.employees').find("a").removeClass("show_color");
   		$('.projects').find("a").removeClass("show_color");
   		$('.customers').find("a").removeClass("show_color");
   		$('.status_report').find("a").removeClass("show_color");
   		$('.vacation').find("a").removeClass("show_color");
   		$('.todo').find("a").removeClass("show_color");
   });

   $(document).on("click",".employees",function(){
   		$('.employees').find("a").addClass("show_color");
   		$('.dashboard').find("a").removeClass("show_color");
   		$('.projects').find("a").removeClass("show_color");
   		$('.customers').find("a").removeClass("show_color");
   		$('.status_report').find("a").removeClass("show_color");
   		$('.vacation').find("a").removeClass("show_color");
   		$('.todo').find("a").removeClass("show_color");
   });

	$(document).on("click",".projects",function(){
   		$('.projects').find("a").addClass("show_color");
   		$('.dashboard').find("a").removeClass("show_color");
   		$('.employees').find("a").removeClass("show_color");
   		$('.customers').find("a").removeClass("show_color");
   		$('.status_report').find("a").removeClass("show_color");
   		$('.vacation').find("a").removeClass("show_color");
   		$('.todo').find("a").removeClass("show_color");
   });   

	$(document).on("click",".customers",function(){
   		$('.customers').find("a").addClass("show_color");
   		$('.dashboard').find("a").removeClass("show_color");
   		$('.employees').find("a").removeClass("show_color");
   		$('.projects').find("a").removeClass("show_color");
   		$('.status_report').find("a").removeClass("show_color");
   		$('.vacation').find("a").removeClass("show_color");
   		$('.todo').find("a").removeClass("show_color");
   });

	$(document).on("click",".status_report",function(){
   		$('.status_report').find("a").addClass("show_color");
   		$('.dashboard').find("a").removeClass("show_color");
   		$('.employees').find("a").removeClass("show_color");
   		$('.projects').find("a").removeClass("show_color");
   		$('.customers').find("a").removeClass("show_color");
   		$('.vacation').find("a").removeClass("show_color");
   		$('.todo').find("a").removeClass("show_color");
   });

	$(document).on("click",".vacation",function(){
   		$('.vacation').find("a").addClass("show_color");
   		$('.dashboard').find("a").removeClass("show_color");
   		$('.employees').find("a").removeClass("show_color");
   		$('.projects').find("a").removeClass("show_color");
   		$('.customers').find("a").removeClass("show_color");
   		$('.status_report').find("a").removeClass("show_color");
   		$('.todo').find("a").removeClass("show_color");
   });

	$(document).on("click",".todo",function(){
   		$('.todo').find("a").addClass("show_color");
   		$('.dashboard').find("a").removeClass("show_color");
   		$('.employees').find("a").removeClass("show_color");
   		$('.projects').find("a").removeClass("show_color");
   		$('.customers').find("a").removeClass("show_color");
   		$('.status_report').find("a").removeClass("show_color");
   		$('.vacation').find("a").removeClass("show_color");
   });

});