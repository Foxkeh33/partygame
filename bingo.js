//////////////////////////////////////

	//var resultBingo=0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////ここ！！！

	$(function(){
		$("#BopenBtn").on("click",function(){
			$(".gameBox").fadeOut(2000);
				});
	});
	
		
	$(function(){
		resultBingo=0;
		$("#BopenBtn").on("click",function(){
			BOid = setTimeout(BtnOpen,2000);
		})
	//console.log("soko");

		function BtnOpen(){
			//clearTimeout(BOid);
			$("#BopenBtn")
			.addClass("Bhidden");
			$(".gameBox")
			.removeClass("background1")
			.css("background-image","url('images/bingo/flower-back.jpg')")
			$("#BingoCardBtn")
			.removeClass("Bhidden");
			$("#BingoCard")
			.removeClass("Bhidden");
			$("#Bingo-space")
			.removeClass("Bhidden");
			$("#BingoMachineBtn")
			.fadeOut(0000);
			$("#BingoBall")
			.fadeOut(0000)
			$(".gameBox").fadeIn(2000);
			$("#Bsetumei").removeClass("Bhidden");
			BOOid=setTimeout(OpenAnimation,1000);

		}
	
		function OpenAnimation(){
			//clearTimeout(BOOid);
		$("#Bsetumei>h1").html("BINGO START");
		$("#Bsetumei>p").html("カードを作成後、ビンゴを回す際はビンゴマシーンをクリックして下さい");
		
		}
	
	
	
	
	
	
	
	});
////////////////////ここ！！！



//↓ここからビンゴカードを作る↓//


//ビンゴをスタートするボタンを押す関数
	$(function(){
		$("#BingoCardBtn")
			.on("click",{ran:0},BingoCard)
			.on("click",function(){
			$(this).addClass("Bhidden");
			$( '#sound-file1' ).get(0).play() ;
			$("#Bsetumei").addClass("Bhidden");
			$("#BingoMachineBtn")
			.fadeIn(4000);
			$("#BingoBall")
			.fadeIn(4000)
			.html("click");
		});
	});
	
//ランダムでカード内に数字を出す
	
	function BingoCard(n){
	
	$("#B1").html(BarrayCard[n.data.ran+0]);
	$("#B2").html(BarrayCard[n.data.ran+1]);
	$("#B3").html(BarrayCard[n.data.ran+2]);
	$("#B4").html(BarrayCard[n.data.ran+3]);
	$("#B5").html(BarrayCard[n.data.ran+4]);
	$("#B6").html(BarrayCard[n.data.ran+5]);
	$("#B7").html(BarrayCard[n.data.ran+6]);
	$("#B8").html(BarrayCard[n.data.ran+7]);
	$("#B9").html(BarrayCard[n.data.ran+8]);
	$("#B10").html(BarrayCard[n.data.ran+9]);
	$("#B11").html(BarrayCard[n.data.ran+10]);
	$("#B12").html(BarrayCard[n.data.ran+11]);
	//$("#B13").html(BarrayCard[12]);←ここには別のCSSをつける？？
	$("#B14").html(BarrayCard[n.data.ran+12]);
	$("#B15").html(BarrayCard[n.data.ran+13]);
	$("#B16").html(BarrayCard[n.data.ran+14]);
	$("#B17").html(BarrayCard[n.data.ran+15]);
	$("#B18").html(BarrayCard[n.data.ran+16]);
	$("#B19").html(BarrayCard[n.data.ran+17]);
	$("#B20").html(BarrayCard[n.data.ran+18]);
	$("#B21").html(BarrayCard[n.data.ran+19]);
	$("#B22").html(BarrayCard[n.data.ran+20]);
	$("#B23").html(BarrayCard[n.data.ran+21]);
	$("#B24").html(BarrayCard[n.data.ran+22]);
	$("#B25").html(BarrayCard[n.data.ran+23]);
	}
	
	
	function Brandom(array, num) {
	  var a = array;
	  var t = [];
	  var r = [];
	  var l = a.length;
	  var n = num < l ? num : l;
	  while (n-- > 0) {
	    var i = Math.random() * l | 0;
	    r[n] = t[i] || a[i];
	   // console.log(r[t]);
	    --l;
	    t[i] = t[l] || a[l];
	   // console.log(t[i]);
	  }
	  return r;
	}

	var Btest_array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
	//console.log(Btest_array[0]);
	var BarrayCard=Brandom(Btest_array, 30);
	

	
//配列を文字列にする。	
	
	var goodArray=Btest_array.join(" ");
	


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//↓ここからビンゴが回る↓//

	//ここで定義した数字がボールの中とdivの中に出てくる。

	
	
	$(function(){
		$("#BingoMachineBtn")
		.on("click",BnumberMake)
		.on("click",function(){
			$( '#sound-file2' ).get(0).play() ;
			document.getElementById( 'sound-file2' ).currentTime = 0 ;
			$("#BingoBall")
			.removeClass("Bhidden")
			.addClass("BallMove");
		})
		.on("click",{num:Bnumber},BselectNum)
		.on("click",function(){
			Bid = setTimeout(BtnStart,1000);
		})
		.on("click",function(){
			Btid=setTimeout("BchangeColor()",1000);
		})
		.on("click",function(){
			BBtid=setTimeout("BingoJudge()",1200);
		})

	});

	function BchangeColor(){
				//clearTimeout(Btid);
							var targetBtn = document.getElementById("BingoMachineBtn");
							// targetBtnの値を取得
							var num = targetBtn.value;
							// targetBtnをクリックしたとき
							//targetBtn.value =num;  BselectNumで先にグローバルで定義したので無くていい
							//num++;　　BselectNumで先にグローバルで定義したので無くていい
							//targetBtn.value = num;　　BselectNumで先にグローバルで定義したので無くていい
							//console.log(num);
									if(BJC==0){
											for(var i=24;i<=29;i++){
												if(BarrayCard[i]==Bnumber){
															$(".errer").removeClass("Bhidden");
															$( '#sound-file3' ).get(0).play() ;
							        								}
							        		}
					        		}else if(BJC==1){
					        				for(var i=0;i<=5;i++){
												if(BarrayCard[i]==Bnumber){
															$(".errer").removeClass("Bhidden");
							        								}
							        			}
					        		}
									for(i=0;i<=30;i++){
										if(BarrayCard[i]==Bnumber){
											var bbb=Bnumber.toString(10);	//数字のBnumberを文字列に直す
											//console.log(goodArray);
											//console.log(bbb);
													//文字列の確認用
											var aaa=goodArray.match(bbb);	//結果の配列を入れる変数
											//console.log(aaa);				//matchメソッドでマッチングした結果の配列内を確認
											if(aaa){	//正規表現にマッチしたらcolorRクラスをつけるための分岐
												//console.log("配列の中身：" + aaa[0]);			//確認用
												$('td:contains(' + aaa[0] + ')').each(function(){	//完全一致用のコード(containsは完全一致でないため)
													//console.log("containsで拾ってしまう数字：" + $(this).html());	//確認用
					        							if($(this).html() == aaa[0]) {
						        								$(this)
						        								.addClass("colorR")
						        								.attr("data-bingo","1");
						        								
					        								}
					        							});
											
												}
											}
										
							
					}
			}	
			

	var Bnumber=null;
	
	function BnumberMake(){
			$(".errer").addClass("Bhidden");
			$(".ok").addClass("Bhidden");
			var basicSuuzi=Math.floor(Math.random()*30+1);
			//console.log(basicSuuzi);
			Bnumber=basicSuuzi;
		}
	
	function Bshuffle(array){
		var n=array.length,t,i;//Btest_arrayを引っ張ってきている。長さは1-24の24こ。変数のtとiには何も定義されていない。
		
		while(n){//30回分まわります。
			i=Math.floor(Math.random()*n--);//0-29まで回るよ。配列番号だから回数-1だよ。
			t=array[n];//tにはBtest_arrayの配列の最後の数字をとりだすよ。
			array[n]=array[i];//たとえばi=20がでたとき、Btest_array[20]の答えである21が取り出されて新しい配列shuffle[20]の値と交代になるよ。どんどん後ろから前へ配列が作られていく。
			array[i]=t;//array[i]をBtest_array[n]にもどすよ。
		}
		return array;
	}
	
	var Bran=Bshuffle(Btest_array);	
	//console.log("ビンゴマシーン用の配列"+Bran);
	
	function BselectNum(a){

			var targetBtn = document.getElementById("BingoMachineBtn");
				// targetBtnの値を取得
			var num = targetBtn.value;
				// targetBtnをクリックしたとき
			targetBtn.value =num;
			num++;
			targetBtn.value = num;

					$("#BingoBall")
					$("#BingoMachineBtn")
						.attr("disabled","disabled")
						.attr("src","images/bingo/bng2.png");

					Bnumber=Bran.slice(0,1);
					$("#BingoBall")
						.html(Bnumber);
					//console.log("取り出した要素"+Bnumber);
					
					Bran.shift();
					//console.log("取り出した後の配列"+Bran);

		}


	function BtnStart(){
		//clearTimeout(Bid);
		$("#BingoMachineBtn")
		.removeAttr("disabled","disabled");
		}
	

/////////////////////////////////////////////////////////////

//↓ここから、ビンゴとか、リーチとかの判定↓//
		

	var BRS=0;
	
	function BingoJudge(){
		//clearTimeout(BBtid);
			var targetBtn = document.getElementById("BingoMachineBtn");
			var num = targetBtn.value;

					BreachY();
					BreachX();
					BreachLN();
					BreachRN();
	
			$("#BingoMachineBtn").attr("src","images/bingo/bng.png");
			$("#Bnokori").html("残り"+(15-num)+"球");


	//一回目のビンゴ//////////////////
		
				if(document.getElementById("B1").dataset.bingo==1&&document.getElementById("B2").dataset.bingo==1&&document.getElementById("B3").dataset.bingo==1&&document.getElementById("B4").dataset.bingo==1&&document.getElementById("B5").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B6").dataset.bingo==1&&document.getElementById("B7").dataset.bingo==1&&document.getElementById("B8").dataset.bingo==1&&document.getElementById("B9").dataset.bingo==1&&document.getElementById("B10").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B11").dataset.bingo==1&&document.getElementById("B12").dataset.bingo==1&&document.getElementById("B13").dataset.bingo==1&&document.getElementById("B14").dataset.bingo==1&&document.getElementById("B15").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B16").dataset.bingo==1&&document.getElementById("B17").dataset.bingo==1&&document.getElementById("B18").dataset.bingo==1&&document.getElementById("B19").dataset.bingo==1&&document.getElementById("B20").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B21").dataset.bingo==1&&document.getElementById("B22").dataset.bingo==1&&document.getElementById("B23").dataset.bingo==1&&document.getElementById("B24").dataset.bingo==1&&document.getElementById("B25").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B1").dataset.bingo==1&&document.getElementById("B6").dataset.bingo==1&&document.getElementById("B11").dataset.bingo==1&&document.getElementById("B16").dataset.bingo==1&&document.getElementById("B21").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B2").dataset.bingo==1&&document.getElementById("B7").dataset.bingo==1&&document.getElementById("B12").dataset.bingo==1&&document.getElementById("B17").dataset.bingo==1&&document.getElementById("B22").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B3").dataset.bingo==1&&document.getElementById("B8").dataset.bingo==1&&document.getElementById("B13").dataset.bingo==1&&document.getElementById("B18").dataset.bingo==1&&document.getElementById("B23").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B4").dataset.bingo==1&&document.getElementById("B9").dataset.bingo==1&&document.getElementById("B14").dataset.bingo==1&&document.getElementById("B19").dataset.bingo==1&&document.getElementById("B24").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B5").dataset.bingo==1&&document.getElementById("B10").dataset.bingo==1&&document.getElementById("B15").dataset.bingo==1&&document.getElementById("B20").dataset.bingo==1&&document.getElementById("B25").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B1").dataset.bingo==1&&document.getElementById("B7").dataset.bingo==1&&document.getElementById("B13").dataset.bingo==1&&document.getElementById("B19").dataset.bingo==1&&document.getElementById("B25").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
				if(document.getElementById("B5").dataset.bingo==1&&document.getElementById("B9").dataset.bingo==1&&document.getElementById("B13").dataset.bingo==1&&document.getElementById("B17").dataset.bingo==1&&document.getElementById("B21").dataset.bingo==1&&document.getElementById("BingoStar1").dataset.hoshi=="0"){
					$("#BingoStar1").attr('data-hoshi','1').append("<img src='images/bingo/tubaki.png'  data-flg='done'>");			BJC++;
					
				}
			
			
			BingoEnd();
	}
	
	function BreachY(){


			var BRS_Btr1=0;		
			var BRS_Btr2=0;
			var BRS_Btr3=0;
			var BRS_Btr4=0;
			var BRS_Btr5=0;
			
			BRS=0;
			
			for(var i=1;i<=5;i++){
				var BBB="B"+i;
				if(document.getElementById(BBB).dataset.bingo==1){
					BRS_Btr1++;
				}
			}
		if(BRS_Btr1==4){
			BRS++;
		}
	
			for(var i=6;i<=10;i++){
				var BBB="B"+i;
				if(document.getElementById(BBB).dataset.bingo==1){
					BRS_Btr2++;
				}
			}
		if(BRS_Btr2==4){
			BRS++;
		}
				for(var i=11;i<=15;i++){
				var BBB="B"+i;
				if(document.getElementById(BBB).dataset.bingo==1){
					BRS_Btr3++;
				}
			}
		if(BRS_Btr3==4){
			BRS++;
		}
	
			for(var i=16;i<=20;i++){
				var BBB="B"+i;
				if(document.getElementById(BBB).dataset.bingo==1){
					BRS_Btr4++;
				}
			}
		if(BRS_Btr4==4){
			BRS++;
		}
	
			for(var i=21;i<=25;i++){
				var BBB="B"+i;
				if(document.getElementById(BBB).dataset.bingo==1){
					BRS_Btr5++;
				}
			}
		if(BRS_Btr5==4){
			BRS++;
		}
		
	
	}

	function BreachX(){


			var BRS_Btr6=0;		
			var BRS_Btr7=0;
			var BRS_Btr8=0;
			var BRS_Btr9=0;
			var BRS_Btr10=0;
			
			var aaa=100;
			var i=1;

					while(aaa<=101){
						var BBB="B"+i;
									if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr6++;
									}
								i=i+5;
									if(i>=26){
									aaa=aaa+10;
									}
							}
				i=1;
				if(BRS_Btr6==4){
					BRS++;
				}
		
			i++;
				while(aaa<=111){
							var BBB="B"+i;
									if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr7++;
									}
								i=i+5;
									if(i>=27){
									aaa=aaa+10;
									}
							}
				i=2;
				if(BRS_Btr7==4){
					BRS++;
				}
			i++
				while(aaa<=121){
							var BBB="B"+i;
									if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr8++;
									}
								i=i+5;
									if(i>=28){
									aaa=aaa+10;
									}
							}
				i=3;
				if(BRS_Btr8==4){
					BRS++;
				}
			i++;
					while(aaa<=131){
							var BBB="B"+i;
									if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr9++;
									}
								i=i+5;
									if(i>=29){
									aaa=aaa+10;
									}
							}
				i=4;
				if(BRS_Btr9==4){
					BRS++;
				}
			i++;
					while(aaa<=141){
							var BBB="B"+i;
									if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr10++;
									}
								i=i+5;
									if(i>=30){
									aaa=aaa+10;
									}
							}
				if(BRS_Btr10==4){
					BRS++;
				}
		
	}
	
	function BreachLN(){
				
				var BRS_Btr11=0;
					var j=0;
					for(var i=0;i<=4;i++){
						j=6*i+1;
						var BBB="B"+j;
							if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr11++;
									}																}
				if(BRS_Btr11==4){
					BRS++;
				}
	}

	function BreachRN(){
				
				var BRS_Btr12=0;
					var j=0;
					for(var i=0;i<=4;i++){
						j=4*i+5;
						var BBB="B"+j;
							if(document.getElementById(BBB).dataset.bingo==1){
										BRS_Btr12++;
									}																}
				if(BRS_Btr12==4){
					BRS++;
				}
	}



			var BJC=0;//ビンゴした数を数える。
			var BTS=0;//ビンゴの総得点を数える。
			var BRS=0;//リーチの数を調べる。

		function BingoEnd(){
			var targetBtn = document.getElementById("BingoMachineBtn");
			var num = targetBtn.value;

			var BBS=BJC;

			BTS=BRS*4;

			if(BJC==1){
			BTS=50;
			BRS=0;
			}
			
			if(BJC==1&&num==4){
				BTS=BTS+50;
			}else if(BJC==1&&num>=5&&num<=8){
				BTS=BTS+40;
			}else if(BJC==1&&num>=9&&num<=10){
				BTS=BTS+30;
			}else if(BJC==1&&num>=11&&num<=12){
				BTS=BTS+20;
			}else if(BJC==1&&num>=13&&num<=14){
				BTS=BTS+10;
			}

			$("#BRS").html(BRS);
			$("#BTS").html(BTS);
			$("#BBS").html(BBS);
			
			resultBingo=BTS;

							if(BJC==1){
										$( '#sound-file4' ).get(0).play() ;
										 $("#BingoMachineBtn")
										 	.css("disable","disable")
										 	.css("z-index","-=1000");
										$(".ok").removeClass("Bhidden");
										$("#Bsetumei")
										.removeClass("Bhidden")
										.addClass(".Bsetumei2");
										$("#Bsetumei>h1").html("- Back to the party venue！-");
										$("#Bsetumei>p").html("ビンゴ完成！おめでとうございます");
										$("#btnGame3").show(500);
								}
							if(num==15&&BJC==0){
									//$(".gameBox").css("opacity","0.8");
										$("#BingoMachineBtn")
											.css("disable","disable")
											.css("z-index","-=1000");
										$("#Bsetumei")
										.removeClass("Bhidden")
										.addClass(".Bsetumei2");
										$("#Bsetumei>h1").html("- Back to the party venue！-");
										$("#Bsetumei>p").html("ビンゴならず…");
										$("#btnGame3").show(500);
								}

										
			
		}
