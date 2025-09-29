$(function(){
//BGM変更
//$("#BGM").replaceWith("<audio src='BGM/bgm/ok.m4a' autoplay loop></audio>");

//ランダムで要素を取り出す
var Kx = [0,1,2,3,4,5];
//配列xの各要素に乱数で重みをつける
for (var i = 0, l = Kx.length; i < l; ++i) {
	Kx[i] = [Kx[i], Math.random()];
}
//配列xを重みによってソートする
Kx.sort(function(a, b){return a[1] - b[1];});
//配列xを元の形に戻したいので、重み部分のデータを取り除く
for (var i = 0, l = Kx.length; i < l; ++i) {
	Kx[i] = Kx[i][0];
}
//xの要素はランダムな順序に入れ替えられた

//alert(Kx);

//シャッフルした配列の値をボタンタグのvalueにそれぞれ設定
$("#Kana1").val(Kx[0]);
$("#Kana2").val(Kx[1]);
$("#Kana3").val(Kx[2]);
$("#Kana4").val(Kx[3]);
$("#Kana5").val(Kx[4]);
$("#Kana6").val(Kx[5]);

//点数を入れる変数
resultKurohige = 0;

//スタートボタンを押して説明文を消す
$("#Kstart").on("click",function(){
		$( '#sound-file09' ).get(0).play() ;
		$("#Kstart").css("display", "none");
		$("#Krule").css("display", "none");
		});	

//剣左上のアニメーション
	$("#Kana1").on("click",function(){
		$( '#sound-file05' ).get(0).play() ;
		$("#Kken1").css("display", "block");
		$("#Kana1").attr("disabled","disabled");
		$("#Kana2").attr("disabled","disabled");
		$("#Kana3").attr("disabled","disabled");
		$("#Kana4").attr("disabled","disabled");
		$("#Kana5").attr("disabled","disabled");
		$("#Kana6").attr("disabled","disabled");
		
	if(Kx[0]==1){
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear",oto).animate({
				"margin-left":"0px"
			},100,"linear").animate({
				"margin-top":"-1200px"
			},500,"swing").animate({
				"opacity": "0"
			},750,"swing");
			
			function oto(){
			$( '#sound-file07' ).get(0).play() ;
			}
			
			$("#Kend").animate({
				"margin-top":"-200px"
			},2000,"linear").animate({
				"margin-top":"2000px"
			},300,"linear",biyoyon).animate({
				"margin-top":"1800px"
			},100,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1880px"
			},150,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1960px"
			},200,"linear").animate({
				"margin-top":"2000px"
			},300,"linear").animate({
				"margin-top":"2000px"
			},1000,"linear",Kblue);
			
			function biyoyon(){
			$( '#sound-file08' ).get(0).play() ;
			}
			
			function Kblue(){
			$("#Kblue").css("display", "block");
			$("#Kmoji").css("display", "block");
			$("#btnGame1").show(500);
			}
											
			
			
		}else{
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"0px"
			},100,"linear");
			//ポイントアップ表示
			$("#Kpoint").animate({
				"opacity": "0"
			},1200,"linear").animate({
				"opacity": "1"
			},500,"linear").animate({
				"opacity": "1"
			},400,"linear").animate({
				"opacity": "0"
			},500,"linear",Kkaten1)

			function Kkaten1(){
			resultKurohige += 20;
			//console.log(resultBingo);
			$("#Ktokuten").html(resultKurohige+"p");
			
			$("#Kana1").removeAttr("disabled");
			$("#Kana2").removeAttr("disabled");
			$("#Kana3").removeAttr("disabled");
			$("#Kana4").removeAttr("disabled");
			$("#Kana5").removeAttr("disabled");
			$("#Kana6").removeAttr("disabled");
			$( '#sound-file06' ).get(0).play();
			}
		}
		});	
//剣右上のアニメーション
	$("#Kana2").on("click",function(){
		$( '#sound-file05' ).get(0).play() ;
		$("#Kken2").css("display", "block");
		$("#Kana1").attr("disabled","disabled");
		$("#Kana2").attr("disabled","disabled");
		$("#Kana3").attr("disabled","disabled");
		$("#Kana4").attr("disabled","disabled");
		$("#Kana5").attr("disabled","disabled");
		$("#Kana6").attr("disabled","disabled");

	if(Kx[1]==1){
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear",oto).animate({
				"margin-left":"0px"
			},100,"linear").animate({
				"margin-top":"-1200px"
			},500,"swing").animate({
				"opacity": "0"
			},750,"swing");
			
			function oto(){
			$( '#sound-file07' ).get(0).play() ;
			}
			
			$("#Kend").animate({
				"margin-top":"-200px"
			},2000,"linear").animate({
				"margin-top":"2000px"
			},300,"linear",biyoyon).animate({
				"margin-top":"1800px"
			},100,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1880px"
			},150,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1960px"
			},200,"linear").animate({
				"margin-top":"2000px"
			},300,"linear").animate({
				"margin-top":"2000px"
			},1000,"linear",Kblue);
			
			function biyoyon(){
			$( '#sound-file08' ).get(0).play() ;
			}
			
			function Kblue(){
			$("#Kblue").css("display", "block");
			$("#Kmoji").css("display", "block");
			$("#btnGame1").show(500);
			}
			
			
		}else{
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"0px"
			},100,"linear");
			//ポイントアップ表示
			$("#Kpoint").animate({
				"opacity": "0"
			},1200,"linear").animate({
				"opacity": "1"
			},500,"linear").animate({
				"opacity": "1"
			},400,"linear").animate({
				"opacity": "0"
			},500,"linear",Kkaten2)
			
			function Kkaten2(){
			resultKurohige += 20;
			//console.log(resultBingo);
			$("#Ktokuten").html(resultKurohige+"p");
			
			$("#Kana1").removeAttr("disabled");
			$("#Kana2").removeAttr("disabled");
			$("#Kana3").removeAttr("disabled");
			$("#Kana4").removeAttr("disabled");
			$("#Kana5").removeAttr("disabled");
			$("#Kana6").removeAttr("disabled");
			$( '#sound-file06' ).get(0).play();

			}
		}
		});
//剣左真ん中のアニメーション
	$("#Kana3").on("click",function(){
		$( '#sound-file05' ).get(0).play() ;
		$("#Kken3").css("display", "block");
		$("#Kana1").attr("disabled","disabled");
		$("#Kana2").attr("disabled","disabled");
		$("#Kana3").attr("disabled","disabled");
		$("#Kana4").attr("disabled","disabled");
		$("#Kana5").attr("disabled","disabled");
		$("#Kana6").attr("disabled","disabled");

	if(Kx[2]==1){
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear",oto).animate({
				"margin-left":"0px"
			},100,"linear").animate({
				"margin-top":"-1200px"
			},500,"swing").animate({
				"opacity": "0"
			},750,"swing");
			
			function oto(){
			$( '#sound-file07' ).get(0).play() ;
			}
			
			$("#Kend").animate({
				"margin-top":"-200px"
			},2000,"linear").animate({
				"margin-top":"2000px"
			},300,"linear",biyoyon).animate({
				"margin-top":"1800px"
			},100,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1880px"
			},150,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1960px"
			},200,"linear").animate({
				"margin-top":"2000px"
			},300,"linear").animate({
				"margin-top":"2000px"
			},1000,"linear",Kblue);
			
			function biyoyon(){
			$( '#sound-file08' ).get(0).play() ;
			}
			
			function Kblue(){
			$("#Kblue").css("display", "block");
			$("#Kmoji").css("display", "block");
			$("#btnGame1").show(500);
			}
									
			
			
		}else{
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"0px"
			},100,"linear");
			//ポイントアップ表示
			$("#Kpoint").animate({
				"opacity": "0"
			},1200,"linear").animate({
				"opacity": "1"
			},500,"linear").animate({
				"opacity": "1"
			},400,"linear").animate({
				"opacity": "0"
			},500,"linear",Kkaten3)

			function Kkaten3(){
			resultKurohige += 20;
			//console.log(resultBingo);
			$("#Ktokuten").html(resultKurohige+"p");
			
			$("#Kana1").removeAttr("disabled");
			$("#Kana2").removeAttr("disabled");
			$("#Kana3").removeAttr("disabled");
			$("#Kana4").removeAttr("disabled");
			$("#Kana5").removeAttr("disabled");
			$("#Kana6").removeAttr("disabled");
			$( '#sound-file06' ).get(0).play();
			
			}
		}
		});
//剣右真ん中のアニメーション
	$("#Kana4").on("click",function(){
		$( '#sound-file05' ).get(0).play() ;
		$("#Kken4").css("display", "block");
		$("#Kana1").attr("disabled","disabled");
		$("#Kana2").attr("disabled","disabled");
		$("#Kana3").attr("disabled","disabled");
		$("#Kana4").attr("disabled","disabled");
		$("#Kana5").attr("disabled","disabled");
		$("#Kana6").attr("disabled","disabled");

	if(Kx[3]==1){
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear",oto).animate({
				"margin-left":"0px"
			},100,"linear").animate({
				"margin-top":"-1200px"
			},500,"swing").animate({
				"opacity": "0"
			},750,"swing");
			
			function oto(){
			$( '#sound-file07' ).get(0).play() ;
			}
			
			$("#Kend").animate({
				"margin-top":"-200px"
			},2000,"linear").animate({
				"margin-top":"2000px"
			},300,"linear",biyoyon).animate({
				"margin-top":"1800px"
			},100,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1880px"
			},150,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1960px"
			},200,"linear").animate({
				"margin-top":"2000px"
			},300,"linear").animate({
				"margin-top":"2000px"
			},1000,"linear",Kblue);
			
			function biyoyon(){
			$( '#sound-file08' ).get(0).play() ;
			}
			
			function Kblue(){
			$("#Kblue").css("display", "block");
			$("#Kmoji").css("display", "block");
			$("#btnGame1").show(500);
			}
			
			
			
		}else{
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"0px"
			},100,"linear");
			//ポイントアップ表示
			$("#Kpoint").animate({
				"opacity": "0"
			},1200,"linear").animate({
				"opacity": "1"
			},500,"linear").animate({
				"opacity": "1"
			},400,"linear").animate({
				"opacity": "0"
			},500,"linear",Kkaten4)

			function Kkaten4(){
			resultKurohige += 20;
			//console.log(resultBingo);
			$("#Ktokuten").html(resultKurohige+"p");
			
			$("#Kana1").removeAttr("disabled");
			$("#Kana2").removeAttr("disabled");
			$("#Kana3").removeAttr("disabled");
			$("#Kana4").removeAttr("disabled");
			$("#Kana5").removeAttr("disabled");
			$("#Kana6").removeAttr("disabled");
			$( '#sound-file06' ).get(0).play();

			}
		}
		});
//剣左下のアニメーション
	$("#Kana5").on("click",function(){
		$( '#sound-file05' ).get(0).play() ;
		$("#Kken5").css("display", "block");
		$("#Kana1").attr("disabled","disabled");
		$("#Kana2").attr("disabled","disabled");
		$("#Kana3").attr("disabled","disabled");
		$("#Kana4").attr("disabled","disabled");
		$("#Kana5").attr("disabled","disabled");
		$("#Kana6").attr("disabled","disabled");

		
	if(Kx[4]==1){
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear",oto).animate({
				"margin-left":"0px"
			},100,"linear").animate({
				"margin-top":"-1200px"
			},500,"swing").animate({
				"opacity": "0"
			},750,"swing");
			
			function oto(){
			$( '#sound-file07' ).get(0).play() ;
			}
			
			$("#Kend").animate({
				"margin-top":"-200px"
			},2000,"linear").animate({
				"margin-top":"2000px"
			},300,"linear",biyoyon).animate({
				"margin-top":"1800px"
			},100,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1880px"
			},150,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1960px"
			},200,"linear").animate({
				"margin-top":"2000px"
			},300,"linear").animate({
				"margin-top":"2000px"
			},1000,"linear",Kblue);
			
			function biyoyon(){
			$( '#sound-file08' ).get(0).play() ;
			}
			
			function Kblue(){
			$("#Kblue").css("display", "block");
			$("#Kmoji").css("display", "block");
			$("#btnGame1").show(500);
			}
			
			
		}else{
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"0px"
			},100,"linear");
			//ポイントアップ表示
			$("#Kpoint").animate({
				"opacity": "0"
			},1200,"linear").animate({
				"opacity": "1"
			},500,"linear").animate({
				"opacity": "1"
			},400,"linear").animate({
				"opacity": "0"
			},500,"linear",Kkaten5)

			function Kkaten5(){
			resultKurohige += 20;
			//console.log(resultBingo);
			$("#Ktokuten").html(resultKurohige+"p");
			
			$("#Kana1").removeAttr("disabled");
			$("#Kana2").removeAttr("disabled");
			$("#Kana3").removeAttr("disabled");
			$("#Kana4").removeAttr("disabled");
			$("#Kana5").removeAttr("disabled");
			$("#Kana6").removeAttr("disabled");
			$( '#sound-file06' ).get(0).play();
			}
		}
		});
//剣右下のアニメーション
	$("#Kana6").on("click",function(){
		$( '#sound-file05' ).get(0).play() ;
		$("#Kken6").css("display","block");
		$("#Kana1").attr("disabled","disabled");
		$("#Kana2").attr("disabled","disabled");
		$("#Kana3").attr("disabled","disabled");
		$("#Kana4").attr("disabled","disabled");
		$("#Kana5").attr("disabled","disabled");
		$("#Kana6").attr("disabled","disabled");
		
	if(Kx[5]==1){
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear",oto).animate({
				"margin-left":"0px"
			},100,"linear").animate({
				"margin-top":"-1200px"
			},500,"swing").animate({
				"opacity": "0"
			},750,"swing");
			
			function oto(){
			$( '#sound-file07' ).get(0).play() ;
			}
			
			$("#Kend").animate({
				"margin-top":"-200px"
			},2000,"linear").animate({
				"margin-top":"2000px"
			},300,"linear",biyoyon).animate({
				"margin-top":"1800px"
			},100,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1880px"
			},150,"linear").animate({
				"margin-top":"2000px"
			},150,"linear").animate({
				"margin-top":"1960px"
			},200,"linear").animate({
				"margin-top":"2000px"
			},300,"linear").animate({
				"margin-top":"2000px"
			},1000,"linear",Kblue);
			
			function biyoyon(){
			$( '#sound-file08' ).get(0).play() ;
			}
			
			function Kblue(){
			$("#Kblue").css("display", "block");
			$("#Kmoji").css("display", "block");
			$("#btnGame1").show(500);
			}
			
		}else{
			$("#Khige").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"-10px"
			},100,"linear").animate({
				"margin-left":"10px"
			},100,"linear").animate({
				"margin-left":"0px"
			},100,"linear");
			//ポイントアップ表示
			$("#Kpoint").animate({
				"opacity": "0"
			},1200,"linear").animate({
				"opacity": "1"
			},500,"linear").animate({
				"opacity": "1"
			},400,"linear").animate({
				"opacity": "0"
			},500,"linear",Kkaten6)

			function Kkaten6(){
			resultKurohige += 20;
			//console.log(resultBingo);
			$("#Ktokuten").html(resultKurohige+"p");
			
			$("#Kana1").removeAttr("disabled");
			$("#Kana2").removeAttr("disabled");
			$("#Kana3").removeAttr("disabled");
			$("#Kana4").removeAttr("disabled");
			$("#Kana5").removeAttr("disabled");
			$("#Kana6").removeAttr("disabled");
			$( '#sound-file06' ).get(0).play();
			}
		}
		});
});