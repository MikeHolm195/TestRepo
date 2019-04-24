unloadJS("timerScript");

var countDate = new Date("April 25, 2019 10:00:00").getTime();

var x = setInterval(function()
{
	var now = new Date().getTime();
	var diff = countDate - now;
	
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diff % (1000 * 60)) / 1000);
	
	if(diff < 0)
	{
		clearInterval(x);
		document.getElementById("countText").innerHTML = "Yes. It is possible but be warned. I don't know how much traffic or functionality will be allowed on this free service but hopefully it will be enough";
	}
	else
	{
		document.getElementById("countText").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";
	}
}, 1000);

function unloadJS(scriptName) {
	var head = document.getElementsByTagName('head').item(0);
	var js = document.getElementById(scriptName);
	js.parentNode.removeChild(js);
}