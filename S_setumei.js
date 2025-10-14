$(function(){
	$.getJSON("setumei.json",
	
		function(data){
		$("#btnTitle").on("click",function(){
			$( '#sound-file16' ).get(0).play();
			$("#Mtitle").animate({"opacity":"0"},1000,"linear").hide(1);
			Mtutorial();
		});
		function Mtutorial(){
			$("#Mtutorial").show(1000).animate({"opacity":"1"},3000,"linear");
			Mtutorialjson();
		}
		function Mtutorialjson(){
			var S_timer=setInterval(S_fnc,2000);
			var i=1;
				function S_fnc(){
					$("#S_message")
					.append('<p class="S_anime">'+data[0]["setumei"]["setumei"+i]+'</p>');
					i++;
					if(i>=10){
						clearInterval(S_timer);
						$("#Mtutorial>div:first").removeClass("Stouka");
						$("#btnTutorial").removeClass("S_hidden");
					}
				}
			}
		}
	);
}); 