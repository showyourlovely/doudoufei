$("li:has(ul)").on("click",function(){
	console.log("1");
	$(this).find("ul")
			.toggle()
})