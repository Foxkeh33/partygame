$(function(){
	//相手役のデータの取得
	$("#btnStart").on("click",MparsonSelect);
	function MparsonSelect(){
		var MparsonName=$("input[name='Mselect']:checked").val();
		var img="images/char/" + MparsonName+"/"+MparsonName +".png";
		var imgUp="images/char/" + MparsonName+"/"+MparsonName +"Up.png";
	
		$(".MpartyParsonImage").attr("src",img);
		$(".MpartyParsonImageUp").attr("src",imgUp);
		
		//console.log(img);
		switch(MparsonName){
			case "risa":
				$(".MpartyParson").html("りさ");
				break;
			case "syuhei":
				$(".MpartyParson").html("しゅうへい");
				break;
			case "tomomi":
				$(".MpartyParson").html("ともみ");
				break;
			case "miki":
				$(".MpartyParson").html("みき");
				break;
			case "maika":
				$(".MpartyParson").html("まいか");
				break;
 		}
		
		//各ページのセルフ分岐
		$.getJSON("serif.json",
			function(data){
				
				//セリフ１
				var zeroSerif1=(data[0][MparsonName]["serif1"]["serif1-1"][0]).split("");
				var oneSerif1=(data[0][MparsonName]["serif1"]["serif1-2"][0]).split("");
				var twoSerif1=(data[0][MparsonName]["serif1"]["serif1-3"][0]).split("");
				var zeroSerif11=(data[0][MparsonName]["serif1"]["serif1-1"][1]).split("");
				var oneSerif11=(data[0][MparsonName]["serif1"]["serif1-2"][1]).split("");
				var twoSerif11=(data[0][MparsonName]["serif1"]["serif1-3"][1]).split("");
				
				var randomSerif1=Math.floor(Math.random()*3);
				//console.log("セリフ1のランダムは"+randomSerif1);
				var countOne =0;
				var countOneone =0;
				var serif1Txt="";
				var serif11Txt="";
				switch(randomSerif1){
					case 0 :
						serif1Txt=zeroSerif1;
						serif11Txt=zeroSerif11;
						setTimeout(txt1Count,2000);
						break;
					case 1 :
						serif1Txt=oneSerif1;
						serif11Txt=oneSerif11;
						setTimeout(txt1Count,2000);
						break;
					case 2 :
						serif1Txt=twoSerif1;
						serif11Txt=twoSerif11;
						setTimeout(txt1Count,2000);
						break;
				}
				//console.log(serif1Txt);
				function txt1Count(){
					var timer = setTimeout(txt1Count,100);
					$("#serif1").append(serif1Txt[countOne]);
					countOne++;
					if(countOne == serif1Txt.length){
						//clearTimeout(timer);
						setTimeout(txt11Count,500);
						
					}
				}
				function txt11Count(){
					var timer = setTimeout(txt11Count,100);
					$("#serif11").append(serif11Txt[countOneone]);
					countOneone++;
					if(countOneone == serif11Txt.length){
						//clearTimeout(timer);
						serif00();
					}
				}
				
				//パーティー会場＿セリフ0(ゲーム開始前)
				
				function serif00(){
					var serif00="そろそろゲームが始まるみたい！";
					var txtserif00= serif00.split("");
					//console.log(txtserif00);
					var countZerozero =0;
					setTimeout(txt00Count,5000);
					
					function txt00Count(){
						var timer = setTimeout(txt00Count,100);
						$("#serif00").append(txtserif00[countZerozero]);
						countZerozero++;
						if(countZerozero == txtserif00.length){
							//clearTimeout(timer);
							serif0();
						}
					}
				}
				function serif0(){
					var serif0="(自分：よ～し、頑張って、良いところを見せなくっちゃ！！)";
					var txtserif0= serif0.split("");
					var countZero =0;
					setTimeout(txt2Count,2500);
					
					function txt2Count(){
						var timer = setTimeout(txt2Count,100);
						$("#serif0").append(txtserif0[countZero]);
						countZero++;
						if(countZero == txtserif0.length){
							//clearTimeout(timer);
						}
					}
				}
				
				
				//パーティー会場＿セリフ２(ゲーム１の結果による分岐)
				$("#btnGame1").on("click",resultGame1);
				
				//パーティー会場＿セリフ3(ゲーム2の結果による分岐)
				$("#btnGame2").on("click",resultGame2);
				
				//パーティー会場＿セリフ4(ゲーム3の結果による分岐)
				$("#btnGame3").on("click",resultGame3);
			
				//得点分岐用変数
				var i ="";
				
				//ゲーム分岐用変数
				var resultSelect="";
				
				//ゲームの分岐
				function resultGame1(){
						resultSelect =resultKurohige;
						resultSelectFunc();
				}
				function resultGame2(){
						resultSelect =resultDarts;
						resultSelectFunc();
				}
				function resultGame3(){
						resultSelect =resultBingo;
						resultSelectFunc();
				}
				
					
				//得点分岐
				function resultSelectFunc(){
					switch(MparsonName){
						case "risa":
							if(resultSelect>=80){
								i="good";
							} else if(resultSelect<80){
								i="bad";
							};
							serifGame("serif2");
							break;
						case "syuhei":
							if(resultSelect>=60){
								i="good";
							} else if(resultSelect<60){
								i="bad";
							};
							serifGame("serif2");
							break;
							case "tomomi":
							if(resultSelect>=40){
								i="good";
							} else if(resultSelect<40){
								i="bad";
							};
							serifGame("serif2");
							break;
						case "miki":
							if(resultSelect>=30){
								i="good";
							} else if(resultSelect<30){
								i="bad";
							};
							serifGame("serif2");
							break;
						case "maika":
							if(resultSelect>=20){
								i="good";
							} else if(resultSelect<20){
								i="bad";
							};
							serifGame("serif2");
							break;
					}//switch分
					function MpatyImage(){
						var imgNum="";
						switch(i){
							case "good":
								imgNum="Ok";
								break;
							case "bad":
								imgNum="Ng";
								break;
						}
						var imgResult="images/char/" + MparsonName+"/"+MparsonName +imgNum+".png";
						$(".MpartyParsonImageS").attr("src",imgResult);
					}
					
					function serifGame(a){//セリフをランダムで表示する関数
						MpatyImage()
						var zeroSerif=(data[0][MparsonName][a][i][0]).split("");
						var oneSerif=(data[0][MparsonName][a][i][1]).split("");
						var twoSerif=(data[0][MparsonName][a][i][2]).split("");
						var randomSerif=Math.floor(Math.random()*3);
						var b=("." + a)+' ';
						$(b).html("");
						var txt="";	
						var count =0;
						setTimeout(txt3Count,2000);
						
						function txt3Count(){
							var timer = setTimeout(txt3Count,100);
							
							switch(randomSerif){
								case 0 :
									$(b).append(zeroSerif[count]);
									txt=zeroSerif;
									break;
								case 1 :
									$(b).append(oneSerif[count]);
									txt=oneSerif;
									break;
								case 2 :
									$(b).append(twoSerif[count]);
									txt=twoSerif;
									break;
							}//switch文
							count++;
							if(count == txt.length){
								$(".Mbtn").show();
								//clearTimeout(timer);
							}//if文
						}//関数txt3Count
					}//関数serifGame
				}//関数resultSelectFunc
			}//getJSON内関数(data)の引っ張り
		);//getJSON外
	}//関数MparsonSelect(共通部分)
	

});//readyメソッド