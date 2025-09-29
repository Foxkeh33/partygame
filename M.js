$(function(){
//アニメーション
	//オープニング
	setTimeout(function(){
		$("#Mop").animate({"opacity":"0"},1000,"linear").hide(1);
		title();
	},5000);
	function title(){
		$("#Mtitle").show(1000).animate({"opacity":"1"},3000,"linear");
		setTimeout(function(){
			$("#btnTitle").show(1);
		},5000);
	}
	
	//チュートリアル
	$("#btnTutorial").on("click",function(){
		$("#Mtutorial").animate({"opacity":"0"},1000,"linear").hide(1);
		$( '#sound-file17' ).get(0).play();
		Mselect();
	});
	function Mselect(){
		$("#Mselect").show(1000).animate({"opacity":"1"},3000,"linear");
		$("#BGM").replaceWith("<audio id='BGM' src='BGM/bgm/sentaku.m4a' autoplay loop></audio>");
	}
	
	//相手役選択ページ
	$("#btnStart").on("click",function(){
		$("#Mselect").animate({"opacity":"0"},1000,"linear").hide(1);
		Mtobira();
	});
	function Mtobira(){
		$("#Mtobira").show(1000).animate({"opacity":"1"},3000,"linear");
		setTimeout(function(){
			$( '#sound-file20' ).get(0).play();
		},6500);	
		$("#Mdoor").addClass("MdoorOpen1");
		$("#MleftDoor").addClass("MdoorOpen2");
		$("#MrightDoor").addClass("MdoorOpen2");
		
		//扉の前＿セリフ1
		setTimeout(function(){
			$("#Mtobira").animate({"opacity":"0"},1000,"linear").hide(1);
			$("#BGM").replaceWith("<audio id='BGM' src='BGM/bgm/game.m4a' autoplay loop></audio>");
			Mparty1();
		},10000);
		
	}
	function Mparty1(){
		$("#Mparty1").show(1000).animate({"opacity":"1"},3000,"linear");
		setTimeout(function(){
			$("#btnParty1").show(1);
		},10000);
	}
	
	//パーティ会場＿セリフ1.5
	$("#btnParty1").on("click",function(){
		$( '#sound-file18' ).get(0).play();
		$("#Mparty1").animate({"opacity":"0"},1000,"linear").hide(1);
		Mgame1();
	});
	function Mgame1(){
		$("#Mgame1").show(1000).animate({"opacity":"1"},3000,"linear");
		$(".Mbtn").hide();
	}
	
	//ゲーム1
	$("#btnGame1").on("click",function(){
		$( '#sound-file18' ).get(0).play();	
		$("#Mgame1").animate({"opacity":"0"},1000,"linear").hide(1);
		Mparty2();
	});
	function Mparty2(){
		$("#Mparty2").show(1000).animate({"opacity":"1"},3000,"linear");
	}
	
	//パーティ会場＿セリフ2
	$("#btnParty2").on("click",function(){
		$( '#sound-file18' ).get(0).play();
		$("#Mparty2").animate({"opacity":"0"},1000,"linear").hide(1);
		Mgame2();
	});
		function Mgame2(){
			$("#Mgame2").show(1000).animate({"opacity":"1"},3000,"linear");
			$(".Mbtn").hide();
	}
	
	//ゲーム2
	$("#btnGame2").on("click",function(){
		$( '#sound-file18' ).get(0).play();
		$("#Mgame2").animate({"opacity":"0"},1000,"linear").hide(1);
		Mparty3();
	});
	function Mparty3(){
		$("#Mparty3").show(1000).animate({"opacity":"1"},3000,"linear");
	}
	
	//パーティ会場＿セリフ3
	$("#btnParty3").on("click",function(){
		$( '#sound-file18' ).get(0).play();
		$("#Mparty3").animate({"opacity":"0"},1000,"linear").hide(1);
		Mgame3();
	});
	function Mgame3(){
		$("#Mgame3").show(1000).animate({"opacity":"1"},3000,"linear");
		$(".Mbtn").hide();
	}
	
	//夜景＿告白選択
	$("#btnResult").on("click",function(){
		$( '#sound-file17' ).get(0).play();
		$("#Mkokuhakumae2").animate({"opacity":"0"},1000,"linear").hide(1);
		Mend();
	});
	function Mend(){
		$("#Mend").show(1000).animate({"opacity":"1"},3000,"linear");
	}



//各ページ設定

	//相手選択ページ＿ラジオボタン
	
	var Sgallery=$("#Sgallery");
		for(var i=1;i<=5;i++){
			Sgallery.append("<img src='images/select/arubamu_"+i+".jpg'>");
		}
	
	$("input[name='Mselect']").change(function(){
		var parson=$(this).val();
	
		if(parson === "risa"){
			$( '#sound-file18' ).get(0).play();
			Sgallery.css("left","0px");
		}else if(parson === "syuhei"){
			$( '#sound-file18' ).get(0).play();
			Sgallery.css("left","-800px");
		}else if(parson === "tomomi"){
			$( '#sound-file18' ).get(0).play();
			Sgallery.css("left","-1600px");
		}else if(parson === "miki"){
			$( '#sound-file18' ).get(0).play();
			Sgallery.css("left","-2400px");
		}else if(parson === "maika"){
			$( '#sound-file18' ).get(0).play();
			Sgallery.css("left","-3200px");
		}
	});	
	$("#btnStart").on("click",function(){
		$(this).attr("src","images/select/kurakka2.png");
		$( '#sound-file17' ).get(0).play() ;
	});
	
		
	//＿決定ボタン設定
	$("#Mselect input[type='radio']").on("change",function(){
		$("#btnStart").animate({"opacity":"1"},0).removeAttr("disabled");
	});

});
