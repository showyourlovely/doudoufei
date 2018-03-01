$("li:has(ul)").on("click",function(){
	$(this).find("ul")
			.toggle()
})