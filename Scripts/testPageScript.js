$(document).ready(function()
{
	var timer;
	
	$("#norImg").on("mouseenter", function()
	{
		$("#normal").attr("src", "Images/TestPage/strange.jpg");
		timer = setTimeout(function()
		{
			$("#normal").attr("src", "Images/TestPage/normal.jpg");
		}, 500);
	}).on("mouseleave", function()
	{
		clearTimeout(timer);
		$("#normal").attr("src", "Images/TestPage/normal.jpg");
	});
	
	
});