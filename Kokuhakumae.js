$(function(){
	

	$.getJSON("kokuhakumae.json",
	
		function(data){
			//ゲーム3
			$("#btnGame3").on("click",function(){
				$( '#sound-file18' ).get(0).play();
				$("#Mgame3").animate({"opacity":"0"},1000,"linear").hide(1);
				Mparty4();
			});
			function Mparty4(){
				$("#Mparty4").show(1000).animate({"opacity":"1"},3000,"linear");
			
				//パーティ会場＿セリフ4
				setTimeout(function(){
					$("#Mparty4").animate({"opacity":"0"},1000,"linear").hide(1);
					Mkokuhakumae1();
				},10000);
			}
			
		
			function Mkokuhakumae1(){
				$("#BGM").replaceWith("<audio id='BGM' src='BGM/bgm/end.3gp' autoplay loop></audio>");
				$("#Mkokuhakumae1").show(1000).animate({"opacity":"1"},3000,"linear");
				$("#Ktouka").addClass("Ktouka");
				
				setTimeout(K_fnc2,2000);
				
				var kokuhakumae1=data[0]["kokuhakumae"]["kokuhakumae1"];
				var kokuhakumae2=data[0]["kokuhakumae"]["kokuhakumae2"];
				var kokuhakumae3=data[0]["kokuhakumae"]["kokuhakumae3"];
				var kokuhakumae4=data[0]["kokuhakumae"]["kokuhakumae4"];
				var kokuhakumae5=data[0]["kokuhakumae"]["kokuhakumae5"];
				var kokuhakumae6=data[0]["kokuhakumae"]["kokuhakumae6"];
				var kokuhakumae7=data[0]["kokuhakumae"]["kokuhakumae7"];
				var kokuhakumae8=data[0]["kokuhakumae"]["kokuhakumae8"];
				
				function K_fnc2(){
					$("#K_message").append('<p class="K_anime">'+kokuhakumae1+'</p>');
					setTimeout(Ktwo,2000);
				}
				function Ktwo(){
					$("#K_message").append('<p class="K_anime">'+kokuhakumae2+'</p>');
					setTimeout(Kthree,2000);
				}
				function Kthree(){
					$("#K_message").append('<p class="K_anime">'+kokuhakumae3+'</p>');
					setTimeout(Kfour,2000);
				}
				function Kfour(){
					$("#K_message").append('<p class="K_anime">'+kokuhakumae4+'</p>');
					setTimeout(Kfive,2000);
				}
				function Kfive(){
					$("#K_message").append('<p class="K_anime">'+kokuhakumae5+'</p>');
					$("#Mkokuhakumae1").fadeOut(2000);
					$("#Mkokuhakumae2")
							.fadeOut(0000)
							.fadeIn(2000);
					$("#K_message2").removeClass("K_hidden");
					setTimeout(Ksix,3000);
				}
				function Ksix(){
					$("#K_message2").append('<p class="K_anime">'+kokuhakumae6+'</p>');
					setTimeout(Ksevene,2000);
				}
				function Ksevene(){
					$("#K_message2").append('<p class="K_anime">'+kokuhakumae7+'</p>');
					setTimeout(Keight,2000);
				}
				function Keight(){
					$("#K_message2").append('<p class="K_anime">'+kokuhakumae8+'</p>');
					setTimeout(Kselect,2000);
				}
				function Kselect(){
					$("#MkokuhakumaeBtn2").removeClass("K_hidden");
				}
			}
		}
	);
	
}); 