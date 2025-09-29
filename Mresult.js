$(function(){
	var AbtnNum="";
	$.getJSON("serif.json",
		function(data){
			
			var i="";
			var v="";
			var k="";
			
			var MparsonName="";
			$("#btnStart").on("click",MparsonSelect);
			function MparsonSelect(){
				MparsonName=$("input[name='Mselect']:checked").val();
			}
			$("#do").on("click",function(){
				$( '#sound-file18' ).get(0).play();
			});
			$("#donot").on("click",function(){
				$( '#sound-file18' ).get(0).play();
			});
			$("#btnResult").on("click",selectResult);
			function selectResult(){
				var selectResult=$("input[name='Mresult']:checked").val();
				if(selectResult=="do"){
					result();
					After();
				}else if(selectResult=="donot"){
					$("#resultFriend").show();
					i="friend";
					k="#resultFriend ";
					MresultSerif();
					setTimeout(afterFriend,12000);
				}
			}
			
			var allresult="";
			function result(){
				allresult=(resultBingo+resultDarts+resultKurohige)/3;
				
				switch(MparsonName){
					case "risa":
						resultRisa();
						break;
					case "syuhei":
						resultSyuhei();
						break;
					case "tomomi":
						resultTomomi();
						break;
					case "miki":
						resultMiki();
						break;
					case "maika":
						resultMaika();
						break;
				}
			}
			
			//得点による分岐
			//risa
			function resultRisa(){
				if(allresult >= 80){
					$("#resultOk").show();
					i="good";
					k="#resultOk ";
					$("#Abtn0").attr("id","Abtn1");
					AbtnNum=1;
					MresultSerif()
				}else if(allresult < 80){
					$("#resultNg").show();
					i="bad";
					k="#resultNg ";
					$("#Abtn0").attr("id","Abtn2");
					AbtnNum=2;
					MresultSerif()
				}
			}
			
			//syuhei
			function resultSyuhei(){
				if(allresult >= 60){
					$("#resultOk").show();
					i="good";
					k="#resultOk ";
					$("#Abtn0").attr("id","Abtn3");
					AbtnNum=3;
					MresultSerif()
				}else if(allresult < 60){
					$("#resultNg").show();
					i="bad";
					k="#resultNg ";
					$("#Abtn0").attr("id","Abtn4");
					AbtnNum=4;
					MresultSerif()
				}
			}
			
			//tomomi
			function resultTomomi(){
				if(allresult >= 40){
					$("#resultOk").show();
					i="good";
					k="#resultOk ";
					$("#Abtn0").attr("id","Abtn5");
					AbtnNum=5;
					MresultSerif()
				}else if(allresult < 40){
					$("#resultNg").show();
					i="bad";
					k="#resultNg ";
					$("#Abtn0").attr("id","Abtn6");
					AbtnNum=6;
					MresultSerif()
				}
			}
			
			//miki
			function resultMiki(){
				if(allresult >= 30){
					$("#resultOk").show();
					i="good";
					k="#resultOk ";
					$("#Abtn0").attr("id","Abtn7");
					AbtnNum=7;
					MresultSerif()
				}else if(allresult < 30){
					$("#resultNg").show();
					i="bad";
					k="#resultNg ";
					$("#Abtn0").attr("id","Abtn8");
					AbtnNum=8;
					MresultSerif()
				}
			}
			
			//maika
			function resultMaika(){
				if(allresult >= 20){
					$("#resultOk").show();
					i="good";
					k="#resultOk ";
					$("#Abtn0").attr("id","Abtn9");
					AbtnNum=9;
					MresultSerif()
				}else if(allresult < 20){
					$("#resultNg").show();
					i="bad";
					k="#resultNg ";
					$("#Abtn0").attr("id","Abtn10");
					AbtnNum=10;
					MresultSerif()
				}
			}
			
			
			
			function ok(){
				//↓BGM8/1追加
				$("#BGM").replaceWith("<audio id='BGM' src='BGM/bgm/ok.m4a' autoplay loop></audio>");
				$("#E_endOK").addClass("E_OK_bg");
				$("#E_OKspan1").addClass("E_OK1");
				$("#E_OKspan2").addClass("E_OK2");
				$("#E_OKspan3").addClass("E_OK3");
				$("#E_OKspan4").addClass("E_OK4");
				E_makeheart();
			}
			
			function ng(){
				//↓BGM8/1追加
				$("#BGM").replaceWith("<audio id='BGM' src='BGM/bgm/no.3gp' autoplay loop></audio>");
				$("#E_end_left").addClass("E_broken_left");
				$("#E_end_right").addClass("E_broken_right");
				$("#E_NGspan1").addClass("E_NG1");
				$("#E_NGspan2").addClass("E_NG2");
				$("#E_NGspan3").addClass("E_NG3");
				$("#E_NGspan4").addClass("E_NG4");
			}
			
					
			//セリフの関数
			function MresultSerif(){
				var imgNum="";
				switch(i){
					case "good":
						imgNum="Ok";
						ok();
						break;
					case "friend":
						imgNum="";
						break;
					case "bad":
						imgNum="Ng";
						ng();
						break;
				}
				
				var imgResult="images/char/" + MparsonName+"/"+MparsonName +imgNum+".png";
				$(".resultParsonImage").attr("src",imgResult);

				var resultSerif0=(data[0][MparsonName]["serif3"][i][0]).split("");
				var resultSerif1=(data[0][MparsonName]["serif3"][i][1]).split("");
				var resultSerif2=(data[0][MparsonName]["serif3"][i][2]).split("");
				var resultSerif3=(data[0][MparsonName]["serif3"][i][3]).split("");
				
				//カウント用変数
				var countResult =0;
				var countResultOne =0;
				var countResultTwo =0;
				var countResultThree =0;
				
				//1行目
				var timerResult=setTimeout(txtResultCount0,2000);
				function txtResultCount0(){
					var timer = setTimeout(txtResultCount0,100);
					v=(k+".resultOne")+' ';
					$(v).append(resultSerif0[countResult]);
					countResult++;
					if(countResult == resultSerif0.length){
						//clearTimeout(timer);
						setTimeout(txtResultCount1,2000);
						}
				}
				
				//2行目
				function txtResultCount1(){
					var timer2 = setTimeout(txtResultCount1,100);
					v=(k+".resultTwo")+' ';
					$(v).append(resultSerif1[countResultOne]);
					countResultOne++;
					if(countResultOne == resultSerif1.length){
						//clearTimeout(timer2);
						setTimeout(txtResultCount2,2000);
					}
				}//２行目
							
				//3行目
				function txtResultCount2(){
					var timer = setTimeout(txtResultCount2,100);
					v=(k+".resultThree")+' ';
					$(v).append(resultSerif2[countResultTwo]);
					countResultTwo++;
					if(countResultTwo == resultSerif2.length){
						//clearTimeout(timer);
						setTimeout(txtResultCount3,2000);
					}
				}//3行目
				
				//4行目
				function txtResultCount3(){
					var timer = setTimeout(txtResultCount3,100);
					v=(k+".resultFour")+' ';
					$(v).append(resultSerif3[countResultThree]);
					countResultThree++;
					if(countResultThree == resultSerif3.length){
						//clearTimeout(timer);
					}
				}//4行目
				//cleartimeout(timerResult);
			
			}
		}
	);
	function After(){
		setTimeout(function(){
			$(".MendSerifBtn").show();
		},15000);
		
		$.getJSON("After.json",
		
			function(data){
				switch (AbtnNum){
					case 1:
						document.getElementById("Abtn1").onclick =Abtn1;
						break;
					case 2:
						document.getElementById("Abtn2").onclick =Abtn2;
						break;
					case 3:
						document.getElementById("Abtn3").onclick =Abtn3;
						break;
					case 4:
						document.getElementById("Abtn4").onclick =Abtn4;
						break;
					case 5:
						document.getElementById("Abtn5").onclick =Abtn5;
						break;
					case 6:
						document.getElementById("Abtn6").onclick =Abtn6;
						break;
					case 7:
						document.getElementById("Abtn7").onclick =Abtn7;
						break;
					case 8:
						document.getElementById("Abtn8").onclick =Abtn8;
						break;
					case 9:
						document.getElementById("Abtn9").onclick =Abtn9;
						break;
					case 10:
						document.getElementById("Abtn10").onclick =Abtn10;
						break;
				}
				function Abtn1(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter1");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=0
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["risa"]["ok"]["AfterSerif"+i]+'</p>')
						if(i>=3){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
					
				function Abtn2(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter1");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=3
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["risa"]["no"]["AfterSerif"+i]+'</p>')
						if(i>=6){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
				
				function Abtn3(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter1");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=6
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["syuhei"]["ok"]["AfterSerif"+i]+'</p>')
						if(i>=9){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
				
				function Abtn4(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter1");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=9
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["syuhei"]["no"]["AfterSerif"+i]+'</p>')
						if(i>=12){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
			
				function Abtn5(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter2");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=12
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["tomomi"]["ok"]["AfterSerif"+i]+'</p>')
						if(i>=15){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
					
				function Abtn6(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter3");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=15
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["tomomi"]["no"]["AfterSerif"+i]+'</p>')
						if(i>=18){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
				
				function Abtn7(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter2");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=18
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["miki"]["ok"]["AfterSerif"+i]+'</p>')
						if(i>=21){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}	
					
				function Abtn8(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter3");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=21
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["miki"]["no"]["AfterSerif"+i]+'</p>')
						if(i>=24){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
				
				function Abtn9(){
					$( '#sound-file17' ).get(0).play();
					hide();
					
					$("#MAfter").addClass("MAfter4");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=24
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["maika"]["ok"]["AfterSerif"+i]+'</p>')
						if(i>=27){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
				
				function Abtn10(){
					$( '#sound-file17' ).get(0).play();
					hide();
					$("#MAfter").addClass("MAfter4");
					$("#MAfter").removeClass("MAfter");
					var A_timer=setInterval(A_fnc,3000);
					var i=27
					function A_fnc(){
						i++;
						$("#A_message")
							.append('<p class="A_anime">'+data[0]["After"]["maika"]["no"]["AfterSerif"+i]+'</p>')
						if(i>=30){
							clearInterval(A_timer);
						}
					}
					setTimeout(setEndroll,18000);
				}
			}
		);
		
	}
});

//ハートを飛ばすアニメーション
var E_imgArray =[];
var E_count=0;
var E_Timer1;
function E_makeheart(){
	var images=["heart.png","heart01.png","kirakira.png","kirakira1.png"];
		for(i=0; i<=30; i++){
			var img = document.createElement("IMG");
			img.src = "images/ending/"+images[i%images.length];
			img.style.position = "fixed";
			img.style.left = Math.floor(Math.random()*1280)+"px";
			img.style.top = 900+Math.floor(Math.random()*700)+"px";
			img.style.zIndex = 1;
			$("#resultOk").prepend(img);
			E_imgArray[i] = img;
		}	
		E_timer1= setInterval(E_fly,100);//メインjsでタイマー止めること
	}
function E_fly(){
		for(i=0; i<E_imgArray.length; i++){
			var img = E_imgArray[i];
			var x = parseInt(img.style.left);
			var y = parseInt(img.style.top);
			y-=3+Math.floor(Math.random()*2);
			if(y < -50){
				y=920+50;
				x=Math.floor(Math.random()*1280);
			}else{
				x += Math.floor(Math.sin(y/40)*2);
			}
			img.style.left = x+"px";
			img.style.top = y+"px";	
		}
		E_count ++;
		if(E_count >=300){
			clearInterval(E_timer1);
		}
}
function hide(){
	$("#Mend").animate({"opacity":"0"},1000,"linear").hide(1);
	MAfter();
}

function MAfter(){
	$("#MAfter").show(1000).animate({"opacity":"1"},3000,"linear");
}
function setEndroll(){
	$("#MAfter").animate({"opacity":"0"},1000,"linear").hide(1);
	StEndroll();
}
function afterFriend(){
	$("#Mend").animate({"opacity":"0"},1000,"linear").hide(1);
	StEndroll();
}
function StEndroll(){
	$("#ER_endRoll").show(1000).animate({"opacity":"1"},3000,"linear");
	$("#BGM").replaceWith("<audio id='BGM' src='BGM/bgm/endroll.m4a' autoplay loop></audio>");
	$("#ER_move").animate({
		"top" : "-5500px"
		}, 50000, "linear",function(){
		$("#ER_photo6").fadeOut(2000);
		$(".ER_tape1").fadeOut(2000);
		$(".ER_tape2").fadeOut(2000);
	});
}
