//グローバル変数
var D_ctx, D_dartsBoard, D_arrow, D_angel, D_power;//オブジェクト生成用変数
var D_timer1,D_timer2,D_timer3,D_timer4;// 1 = D_mainLoop　2 = D_hit_or_bad　3 = D_next  4 = D_init
var D_hit_x, D_hit_y;//矢がヒットする座標用変数
//var D_speed = 0;//スピード変化用変数
var D_countRound = 1;//ラウンド数カウント
var D_countClick = 0;//クリック回数カウント
var D_score = 0;//スコア格納
var D_totalScore = 0;//トータルスコア格納
var D_maxScore = 180;//最高得点
var D_result=0;//最高得点/トータルスコア　結果のパーセンテージを格納
resultDarts="";//結果をメインに返す用の変数
//オブジェクト
function D_dartsBoard(){	//ダーツボードオブジェクト
		this.x = 400;//中心ｘ座標
		this.y = 300;//中心ｙ座標
		this.r1 = 260;//黒大円半径
		this.r2 = 200;//ダブルリング半径
		this.r3 = 180;//シングルリング半径
		this.r4 = 120;//トリプルリング半径
		this.r5 = 100;//シングルリング半径
		this.r6 = 20;//シングルブル半径
		this.r7 = 10; //ダブルブル半径
}
function D_arrow(){	//矢オブジェクト
		this.img_set_x = 90;//画像のｘ座標初期値
		this.img_x = 90;//画像のｘ座標
		this.sa_x = 25;//画像のｘ座標と矢の先端のｘ座標の_差
		this.dx = 5;//矢の移動幅
		this.img_set_y = 560;//画像のｙ座標初期値
		this.img_y = 560;//画像のｙ座標
}
function D_angel(){	//天使オブジェクト
		this.img_set = 25;//画像のy座標初期値
		this.img_y = 25;//画像のｙ座標
		this.sa_y = 42;//画像のｙ座標と天使の矢の先端のｙ座標の差
		this.dy =5;//天使の移動幅
		this.img_x = 15;//画像のx座標
}
function D_power(){	//パワーオブジェクト
		this.height = 0;//パワーゲージの高さ
		this.max = 60;//パワーゲージの最大の高さ
		this.min = -60;//パワーゲージの最少の高さ
		this.dh = -2;//パワーゲージの増減値
		this.r = 0;//パワーゲージ（円）の半径値
		this.max_r = 60;//パワーゲージ（円）の最大半径値
		this.dr = 2;//パワーゲージ（円）の半径値の増減値
		this.color = "yellow";
		this.justColor = "red";
		this.strongColor = "yellow";
		this.weakColor = "skyblue";
}
//------------------------------------------------------------------------------------
$(function(){
		D_top();
});

//TOP画面
function D_top(){
		D_dartsBoard = new D_dartsBoard();//オブジェクト生成
		D_arrow = new D_arrow();//オブジェクト生成
		D_angel = new D_angel();//オブジェクト生成
		D_power = new D_power();//オブジェクト生成
		D_ctx = document.getElementById("D_canvas").getContext("2d");
		D_ctx.fillStyle = "white";//背景色設定
		D_ctx.fillRect(0,0,1000, 700);
		D_ctx.drawImage(D_renga,0,0,1000, 700);
		D_drawArrow();//矢描画
		D_drawBoard();//ダーツボード描画
		D_drawAngel();//天使描画
		D_ctx.globalAlpha = 0.4;//グレー半透明背景設定
		D_ctx.fillStyle = "#000000";
		D_ctx.fillRect(0,0,1000, 700);
		D_ctx.globalAlpha = 1;
		D_drawRule();//ルール描画
		D_drawStartButton();//スタートボタン描画
		document.getElementById("D_canvas").onclick = Doto;
		
		function Doto(){
		$( '#sound-file09' ).get(0).play() ;										//8/2追加
		D_init();
		}
		
}
//初期化とメインループ開始
function D_init(){
		if(D_countRound > 1){
			//clearTimeout(D_timer4);
		}
		D_countClick = 0;//クリックカウント初期化
		document.getElementById("D_throwArrows").src = "images/darts/arrow1.png";
		D_arrow.img_x = D_arrow.img_set_x;//矢の位置初期化
		D_arrow.img_y = D_arrow.img_set_y;
		D_arrow.dx = 5//+ D_speed;//矢の移動幅初期化とスピードアップ
		D_angel.img_y = D_angel.img_set;//天使の位置初期化
		D_angel.dy = 5//+ D_speed;//天使の移動幅初期化とスピードアップ
		D_power.height = 0;//パワーの高さ初期化
		D_power.r = 0;//パワーの円の半径初期化
		D_power.dh = -2//-D_speed; //パワーの高さの増減値初期化とスピードアップ
		D_power.dr = 2//+ D_speed; // パワーの円の半径の増減値初期化とスピードアップ
		D_power.color = D_power.strongColor;//パワーの色初期化
		D_hit_x = 0;//矢がヒットする座標初期化
		D_hit_y = 0;
		if(D_countRound ==1){
			D_timer1 = setInterval(D_mainLoop, 40);//メインループ開始
		} else if(D_countRound == 2){
			D_timer1 = setInterval(D_mainLoop, 10);//メインループ開始
		}else if(D_countRound == 3){
			D_timer1 = setInterval(D_mainLoop, 1);//メインループ開始
		}
}

//画面描画-------------------------------------------------------------------
//top画面のルール描画
function D_drawRule(){
		D_ctx.fillStyle = "black";//塗りつぶしの色指定
		D_ctx.fillRect(750,0,250, 700);//info塗りつぶし
		D_ctx.fillStyle = "#ffffff";
		D_ctx.font = "45pt Arial";
		D_ctx.shadowColor = "#FD3A85";
		D_ctx.shadowBlur = 10;
		D_ctx.fillText("DARTS",775,70);
		D_ctx.fillText("GAME",785,130);
		D_ctx.shadowColor = "rgba(0,0,0,0)";
		D_ctx.strokeStyle = "#ffffff";
		D_ctx.strokeText("DARTS",775,70);
		D_ctx.strokeText("GAME",785,130);
		D_ctx.font = "14pt Arial";
		var rule = ["▶︎ STARTボタンを押して"," ゲームを開始します","▶︎ STOPボタンを押して"," x座標・y座標・強さを","それぞれ決定します",
					"▶︎ ダーツを３本投げた"," 合計が得点となります"];
		for(i = 0; i<rule.length; i++){
			D_ctx.fillText(rule[i],775,190+i*35);
		}
		D_ctx.strokeStyle = "#ffffff";
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(430, 60);
		D_ctx.lineTo(460, 20);
		D_ctx.lineTo(550, 20);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("ナンバー",560,25);
		D_ctx.strokeText("(基本となる点数)",570,50);
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(480, 170);
		D_ctx.lineTo(560, 90);
		D_ctx.lineTo(600, 90);
		D_ctx.stroke();
		D_ctx.beginPath();
		D_ctx.moveTo(440, 250);
		D_ctx.lineTo(560, 90);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("シングル",610,95);
		D_ctx.strokeText("(ナンバーが得点)",600,120);
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(515, 450);
		D_ctx.lineTo(550, 490);
		D_ctx.lineTo(600, 490);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("ダブル",610,495);
		D_ctx.strokeText("(ナンバーの2倍の得点)",550,520);
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(400, 410);
		D_ctx.lineTo(490, 565);
		D_ctx.lineTo(550, 565);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("トリプル",560,570);
		D_ctx.strokeText("(ナンバーの3倍の得点)",550,595);
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(400, 410);
		D_ctx.lineTo(490, 565);
		D_ctx.lineTo(550, 565);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("トリプル",560,570);
		D_ctx.strokeText("(ナンバーの3倍の得点)",550,595);
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(400, 410);
		D_ctx.lineTo(490, 565);
		D_ctx.lineTo(550, 565);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("トリプル",560,570);
		D_ctx.strokeText("(ナンバーの3倍の得点)",550,595);
		D_ctx.lineWidth = 3;
		D_ctx.beginPath();
		D_ctx.moveTo(400, 300);
		D_ctx.lineTo(300, 600);
		D_ctx.stroke();
		D_ctx.moveTo(410, 310);
		D_ctx.lineTo(387, 340);
		D_ctx.stroke();
		D_ctx.lineWidth = 1;
		D_ctx.strokeText("ブル",290,625);
		D_ctx.strokeText("(内側の小さい円　ダブルブル/50点)",290,650);
		D_ctx.strokeText("(外側の円　シングルブル/25点)",290,675);

}
//ゲーム中の画面にルール描画
function D_drawRule2 (){
		D_ctx.fillStyle = "#ffffff";
		D_ctx.strokeStyle = "#ffffff";
		D_ctx.font = "14pt Arial";
		if(D_countClick ==0){
			var rule1 = ["▼ STOPボタンを押して","　x座標を決定します"];
			for(i = 0; i<rule1.length; i++){
				D_ctx.fillText(rule1[i],775,370+i*35);
			}
		}else if(D_countClick ==1){
			var rule2 = ["▼ STOPボタンを押して","　y座標を決定します"];
			for(i = 0; i<rule2.length; i++){
				D_ctx.fillText(rule2[i],775,370+i*35);
			}
		}else if(D_countClick ==2){
			var rule3 = ["▼ STOPボタンを押して","　強さを決定します","　強い(黄)とより高く","　弱い(青)とより低く","　矢が飛びます"];
			for(i = 0; i<rule3.length; i++){
				D_ctx.fillText(rule3[i],775,270+i*35);
			}
		}
}
//全体描画
function D_draw(){
		D_ctx.drawImage(D_renga, 0,0);
		//D_ctx.fillStyle = "#ffffff";//塗りつぶしの色指定
		//D_ctx.fillRect(0,0,1000, 700);//画面クリア
		D_ctx.fillStyle = "#000000";//塗りつぶしの色指定
		D_ctx.fillRect(750,0,250, 700);//info塗りつぶし
		D_drawBoard();
		D_drawArrow();
		D_drawAngel();
		D_drawPower();
		D_drawRaund();
		D_drawRule2();
		D_drawButton();
		D_drawScore();
}
//ダーツボード描画関数
function D_drawBoard(){
		D_ctx.lineWidth = 2;//線の幅指定
		//黒大円(1点ゾーン)描画
		D_ctx.fillStyle = "#000000";
		D_ctx.strokeStyle = "#000000";
		D_ctx.beginPath();
		D_ctx.arc(D_dartsBoard.x, D_dartsBoard.y, D_dartsBoard.r1, 0, 2*Math.PI);
		D_ctx.closePath();
		D_ctx.fill();
		D_ctx.stroke();
		//ダブルリング描画
		D_ctx.strokeStyle = "#000000";
		for(var i=0; i<20; i++){
			D_ctx.save();
			if(i%2 == 0){
				D_ctx.fillStyle = "#22611B";			
			}else if(i%2 == 1){
				D_ctx.fillStyle = "#DF0034";	
			}
			var r = Math.PI/10*i;
			D_ctx.translate(D_dartsBoard.x, D_dartsBoard.y);
			D_ctx.rotate(r);
			D_ctx.beginPath();
			D_ctx.moveTo(0,0);
			D_ctx.arc(0, 0, D_dartsBoard.r2, -1*Math.PI/20, Math.PI/20, false);
			D_ctx.closePath();
			D_ctx.fill();
			D_ctx.stroke();
			D_ctx.restore();
		}
		//シングルリング描画
		for(var i=0; i<20; i++){
			D_ctx.save();
			if(i%2 == 0){
				D_ctx.fillStyle = "#ffffff";				
			}else if(i%2 == 1){
				D_ctx.fillStyle = "#000000";	
			}
			var r = Math.PI/10*i;
			D_ctx.translate(D_dartsBoard.x, D_dartsBoard.y);
			D_ctx.rotate(r);
			D_ctx.beginPath();
			D_ctx.moveTo(0,0);
			D_ctx.arc(0, 0, D_dartsBoard.r3, -1*Math.PI/20, Math.PI/20, false);
			D_ctx.closePath();
			D_ctx.fill();
			D_ctx.stroke();
			D_ctx.restore();
		}
		//トリプルリング描画
		for(var i=0; i<20; i++){
			D_ctx.save();
			if(i%2 == 0){
				D_ctx.fillStyle = "#22611B";				
			}else if(i%2 == 1){
				D_ctx.fillStyle = "#DF0034";	
			}
			var r = Math.PI/10*i;
			D_ctx.translate(D_dartsBoard.x, D_dartsBoard.y);
			D_ctx.rotate(r);
			D_ctx.beginPath();
			D_ctx.moveTo(0,0);
			D_ctx.arc(0, 0, D_dartsBoard.r4, -1*Math.PI/20, Math.PI/20, false);
			D_ctx.closePath();
			D_ctx.fill();
			D_ctx.stroke();
			D_ctx.restore();
		}
		//シングルリング描画
		for(var i=0; i<20; i++){
			D_ctx.save();
			if(i%2 == 0){
				D_ctx.fillStyle = "#ffffff";				
			}else if(i%2 == 1){
				D_ctx.fillStyle = "#000000";	
			}
			var r = Math.PI/10*i;
			D_ctx.translate(D_dartsBoard.x, D_dartsBoard.y);
			D_ctx.rotate(r);
			D_ctx.beginPath();
			D_ctx.moveTo(0,0);
			D_ctx.arc(0, 0, D_dartsBoard.r5, -1*Math.PI/20, Math.PI/20, false);
			D_ctx.closePath();
			D_ctx.fill();
			D_ctx.stroke();
			D_ctx.restore();
		}
		//シングルブル描画
		D_ctx.beginPath();
		D_ctx.fillStyle = "#DF0034";
		D_ctx.arc(D_dartsBoard.x, D_dartsBoard.y, D_dartsBoard.r6, 0, 2*Math.PI);
		D_ctx.closePath();
		D_ctx.fill();
		//ダブルブル描画
		D_ctx.beginPath();
		D_ctx.fillStyle = "#000000";
		D_ctx.arc(D_dartsBoard.x, D_dartsBoard.y, D_dartsBoard.r7, 0, 2*Math.PI);
		D_ctx.closePath();
		D_ctx.fill();
		//ボード上の得点描画
		D_ctx.fillStyle = "white";
		D_ctx.font = "38pt Arial";
		D_ctx.fillText(20,373,90);
		D_ctx.fillText(1,455,100);
		D_ctx.fillText(18,505,135);
		D_ctx.fillText(4,575,190);
		D_ctx.fillText(13,590,250);
		D_ctx.fillText(6,615,320);
		D_ctx.fillText(10,590,385);
		D_ctx.fillText(15,558,452);
		D_ctx.fillText(2,520,500);
		D_ctx.fillText(17,440,540);
		D_ctx.fillText(3,385,550);
		D_ctx.fillText(19,300,540);
		D_ctx.fillText(7,250,505);
		D_ctx.fillText(16,183,453);
		D_ctx.fillText(8,170,390);
		D_ctx.fillText(11,145,320);
		D_ctx.fillText(14,150,250);
		D_ctx.fillText(9,195,190);
		D_ctx.fillText(12,230,135);
		D_ctx.fillText(5,318,100);
}
//矢描画関数
function D_drawArrow(){
		switch(D_countRound){
			case 1:D_ctx.drawImage(D_countArrows, 860,100);
			case 2:D_ctx.drawImage(D_countArrows, 930,100);
			case 3:D_ctx.drawImage(D_throwArrows, D_arrow.img_x,D_arrow.img_y);
		}
}
//天使描画関数
function D_drawAngel(){
		D_ctx.drawImage(D_angels, D_angel.img_x,D_angel.img_y);
}
//補助線と強さメーター画像
function D_drawPower(){
		D_ctx.globalAlpha = 0.3;//補助線設定
		D_ctx.strokeStyle = "white";
		D_ctx.fillStyle = "white";
		D_ctx.lineWidth = 5;
		D_ctx.beginPath();//補助線ｘ描画
		if(D_countClick == 2){　//パワー選択中は補助線短くなる
			D_ctx.moveTo(D_hit_x, D_hit_y - D_power.max);
			D_ctx.lineTo(D_hit_x, D_hit_y - D_power.min);
			D_ctx.stroke();
		}else if(D_countClick < 2){
			D_ctx.moveTo(D_hit_x, D_arrow.img_y);
			D_ctx.lineTo(D_hit_x, 0);
			D_ctx.stroke();
		}
		D_ctx.beginPath();//補助線ｙ描画
		if(D_countClick == 2){	//パワー選択中は補助線短くなる
			D_ctx.moveTo(D_hit_x - D_power.max, D_hit_y);
			D_ctx.lineTo(D_hit_x - D_power.min, D_hit_y);
			D_ctx.stroke();
		}else if(D_countClick < 2){
			D_ctx.moveTo(D_angel.img_x+140, D_hit_y);
			D_ctx.lineTo(750, D_hit_y);
			D_ctx.stroke();
		}
		if(D_countClick <= 2){//矢を打つまではパワーゲージ描画、矢を打ったら描画しない
		D_ctx.beginPath();//パワーゲージ円描画
			D_ctx.arc(D_hit_x, D_hit_y,D_power.r, 0, 2*Math.PI );
			D_ctx.closePath();
			D_ctx.fill();
			D_ctx.beginPath();//パワーゲージ上下描画
			D_ctx.globalAlpha = 0.8;
			D_ctx.strokeStyle = D_power.color;
			D_ctx.moveTo(D_hit_x, D_hit_y);
			D_ctx.lineTo(D_hit_x, D_hit_y + D_power.height);
			D_ctx.stroke();
		}
		D_ctx.globalAlpha = 1;
}
//ラウンド数描画関数
function D_drawRaund(){
		D_ctx.fillStyle = "#ffffff";
		D_ctx.font = "45pt Arial";
		D_ctx.shadowColor = "#FD3A85";
		D_ctx.shadowBlur = 10;
		D_ctx.fillText("Round" + D_countRound ,775,70);
		D_ctx.shadowColor = "rgba(0,0,0,0)";	
}
//スタートボタン描画
function D_drawStartButton(){
		D_ctx.fillStyle = "#FD3A85";
		D_ctx.strokeStyle = "#ffffff";
		D_ctx.fillRect(770, 430, 210, 100);
		D_ctx.strokeRect(775, 435, 200, 90);
		D_ctx.fillStyle = "#ffffff";
		D_ctx.font = "44pt Arial";
		D_ctx.strokeText("START",780,500);
		D_ctx.fillText("START",780,500);
}

//ボタン描画関数
function D_drawButton(){
		D_ctx.fillStyle = "#8C8C8C"; //ボタン背景色設定
		if(D_countClick == 0){
			D_ctx.fillStyle = "#3B5FFF";
		}else if(D_countClick == 1){
			D_ctx.fillStyle = "#FD3A85";
		}else if(D_countClick == 2){
			D_ctx.fillStyle = "#CBFF59";
		}
		D_ctx.fillRect(770, 430, 210, 100);//ボタン背景描画
		D_ctx.strokeStyle = "#ffffff";
		D_ctx.strokeRect(775, 435, 200, 90);
		D_ctx.font = "44pt Arial";//STOP文字設定、描画
		D_ctx.fillStyle = "#D8D8D8";
		D_ctx.strokeText("STOP",795,500);
		D_ctx.fillText("STOP",795,500);
		if(D_countClick == 0 || D_countClick == 1 || D_countClick == 2){
			D_ctx.fillStyle = "#ffffff";
			D_ctx.strokeText("STOP",795,500);
			D_ctx.fillText("STOP",795,500);
		}
}

//スコアボード描画関数
function D_drawScore(){
		D_ctx.fillStyle = "white";
		D_ctx.fillRect(770,550,210, 100);
		D_ctx.strokeStyle = "#FD3A85";
		D_ctx.strokeRect(770, 550, 210, 100);
		D_ctx.fillStyle = "black";
		D_ctx.font = "20pt Arial";
		D_ctx.fillText("TOTAL SCORE",780,585);
		D_ctx.font = "40pt Arial";
		D_ctx.fillText(D_totalScore,860,635);
}



//画面描画用関数ここまで----------------------------------------------------------------

//メインループ------------------------------------------------------------------------
function D_mainLoop(){
		D_draw();
			if(D_countClick == 0){	//D_countClickが０の時 矢のx座標を更新する
				D_arrow.img_x += D_arrow.dx;//矢のx座標更新
				if(D_arrow.img_x>=660){	//右端についたら折り返す
					D_arrow.dx *=-1 ;
				}else if(D_arrow.img_x<=90){	//左端についたら折り返す
					D_arrow.dx *=-1 ;
				}
				D_hit_x = D_arrow.img_x + D_arrow.sa_x
				document.getElementById("D_canvas").onclick = function(){
				$( '#sound-file15' ).get(0).play() ;						//8/2追加
					D_countClick++;
				}	
				
			}else if(D_countClick == 1){	//D_countClickが１の時 天使のy座標を更新する
				D_angel.img_y += D_angel.dy;//y座標を加算
				if(D_angel.img_y>=515){	//下端についたら折り返す
					D_angel.dy *=-1 ;
				}else if(D_angel.img_y<=5){	//上端についたら折り返す
					D_angel.dy *=-1 ;
				}
				D_hit_y = D_angel.img_y + D_angel.sa_y
				document.getElementById("D_canvas").onclick = function(){
				$( '#sound-file15' ).get(0).play() ;						//8/2追加
					D_countClick++;
				}

			}else if(D_countClick == 2){	//D_countClickが2の時 パワーゲージ半径と高さ更新
				D_power.r　+= D_power.dr;//半径を加算
				if(D_power.r >= D_power.max_r){//半径がmax以上になったら折り返す
					D_power.dr *=-1;
				}else if(D_power.r < 1){//半径が1以下になったら折り返す
					D_power.dr *=-1;
				}
				
				D_power.height += D_power.dh;//高さを加算
				if(D_power.height >= D_power.max){//高さがmax以上になったら折り返す
					D_power.dh *=-1;
				}else if(D_power.height <= D_power.min){//高さがmin以下になったら折り返す
					D_power.dh *=-1;
				}
				if(D_power.r == 0){//半径が０の時ジャストの表示をする＆パワーゲージの色の変更
					D_ctx.beginPath();//ジャストの表示（赤い円を表示）
					D_ctx.fillStyle = D_power.justColor;
					D_ctx.arc(D_hit_x, D_hit_y,5, 0, 2*Math.PI );
					D_ctx.closePath();
					D_ctx.fill();
					if(D_power.color == D_power.strongColor){//
							D_power.color = D_power.weakColor;
					}else if(D_power.color == D_power.weakColor){
							D_power.color = D_power.strongColor;
					}
				}
				document.getElementById("D_canvas").onclick = function(){
					D_countClick++;
				}

			}else if(D_countClick == 3){	//D_countClickが3の時 矢を投げる
				if(D_power.color == D_power.strongColor){
					D_hit_y -= D_power.r;
//0801追加①ここから-----------------------------------------------------------------------------------------------
				if(D_hit_x == D_dartsBoard.x){//D_hit_xがD_dartsBoard.xと同じ値だった場合、バグるので1増やして調整
						D_hit_x +=1;
					}
				if(D_hit_y == D_dartsBoard.y){//D_hit_yがD_dartsBoard.yと同じ値だった場合、バグるので1増やして調整
						D_hit_y +=1;
					}
//①ここまで--------------------------------------------------------------------------------------------------------
				}else if(D_power.color == D_power.weakColor){
					D_hit_y += D_power.r;
//0801追加②ここから-----------------------------------------------------------------------------------------------
				if(D_hit_x == D_dartsBoard.x){//D_hit_xがD_dartsBoard.xと同じ値だった場合、バグるので1増やして調整
						D_hit_x +=1;
					}
				if(D_hit_y == D_dartsBoard.y){//D_hit_yがD_dartsBoard.yと同じ値だった場合、バグるので1増やして調整
						D_hit_y +=1;
					}
				}
//②ここまで--------------------------------------------------------------------------------------------------------

				D_arrow.img_y = D_hit_y;
				document.getElementById("D_throwArrows").src = "images/darts/hit_arrow1.png";
				D_countClick++;

			}else if(D_countClick == 4){	//D_countClickが4の時　判定、スコア更新
				//★矢が刺さった位置を判定して得点を出す
				//※座標を右上、右下、左下、左上に分割して角度を計算する
				//※ずべて０～９０度以内でｘ軸からの角度になる
				var x, y;//ダーツボード中心からの座標の値を入れる変数
				var a, b;//a=角度をラジアンで取得　ｂ＝ラジアンを度数に変換　したものを入れる変数
				if(D_dartsBoard.x < D_hit_x && D_dartsBoard.y > D_hit_y){
					x = D_hit_x - D_dartsBoard.x;
					y = D_dartsBoard.y - D_hit_y;
					a = Math.atan2(y, x);
					b = a*180/Math.PI;
					if(b >=0 && b<9){
						D_score = 6;
						//console.log("6");
					}else if(b>=9 && b<27){
						D_score = 13;
						//console.log("13");
					}else if(b>=27 && b<45){
						D_score = 4;
						//console.log("4");
					}else if(b>=45 && b<63){
						D_score = 18;
						//console.log("18");
					}else if(b>=63 && b<81){
						D_score = 1;
						//console.log("1");
					}else if(b>=81 && b<90){
						D_score = 20;
						//console.log("20");
					}
				}else if(D_dartsBoard.x < D_hit_x && D_dartsBoard.y < D_hit_y){
					x = D_hit_x - D_dartsBoard.x;
					y = D_hit_y - D_dartsBoard.y;
					a = Math.atan2(y, x);
					b = a*180/Math.PI;
					if(b >=0 && b<9){
						D_score = 6;
						//console.log("6");
					}else if(b>=9 && b<27){
						D_score = 10;
						//console.log("10");
					}else if(b>=27 && b<45){
						D_score = 15;
						//console.log("15");
					}else if(b>=45 && b<63){
						D_score = 2;
						//console.log("2");
					}else if(b>=63 && b<81){
						D_score = 17;
						//console.log("17");
					}else if(b>=81 && b<90){
						D_score = 3;
						//console.log("3");
					}
				}else if(D_dartsBoard.x > D_hit_x && D_dartsBoard.y < D_hit_y){
					x = D_dartsBoard.x - D_hit_x;
					y = D_hit_y - D_dartsBoard.y;
					a = Math.atan2(y, x);
					b = a*180/Math.PI;
					if(b >=0 && b<9){
						D_score = 11;
						//console.log("11");
					}else if(b>=9 && b<27){
						D_score = 8;
						//console.log("8");
					}else if(b>=27 && b<45){
						D_score = 16;
						//console.log("16");
					}else if(b>=45 && b<63){
						D_score = 7;
						//console.log("7");
					}else if(b>=63 && b<81){
						D_score = 19;
						//console.log("19");
					}else if(b>=81 && b<90){
						D_score = 3;
						//console.log("3");
					}
				}else if(D_dartsBoard.x > D_hit_x && D_dartsBoard.y > D_hit_y){
					x = D_dartsBoard.x - D_hit_x;
					y = D_dartsBoard.y - D_hit_y;
					a = Math.atan2(y, x);
					b = a*180/Math.PI;
					if(b >=0 && b<9){
						D_score = 11;
						//console.log("11");
					}else if(b>=9 && b<27){
						D_score = 14;
						//console.log("14");
					}else if(b>=27 && b<45){
						D_score = 9;
						//console.log("9");
					}else if(b>=45 && b<63){
						D_score = 12;
						//console.log("12");
					}else if(b>=63 && b<81){
						D_score = 5;
						//console.log("5");
					}else if(b>=81 && b<90){
						D_score = 20;
						//console.log("20");
					}
				}
			//★半径ｘの円に任意の点が含まれているかどうか判定して、ダブルリングは２倍、トリプルリングは３倍にする
				if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r7 * D_dartsBoard.r7){
					$( '#sound-file10' ).get(0).play() ;							//8/2追加
					//console.log("50点");
					D_score = 50;
					D_totalScore += D_score;
				}else if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r6 * D_dartsBoard.r6){
					$( '#sound-file11' ).get(0).play() ;							//8/2追加
					//console.log("25点");
					D_score = 25;
					D_totalScore += D_score;
				}else if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r5 * D_dartsBoard.r5){
					$( '#sound-file13' ).get(0).play() ;							//8/2追加
					//console.log("1倍");
					D_totalScore += D_score;
				}else if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r4 * D_dartsBoard.r4){
					$( '#sound-file11' ).get(0).play() ;							//8/2追加
					//console.log("3倍");
					D_score *=3;
					D_totalScore += D_score;
				}else if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r3 * D_dartsBoard.r3){
					$( '#sound-file13' ).get(0).play() ;							//8/2追加
					//console.log("1倍");
					D_totalScore += D_score;
				}else if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r2 * D_dartsBoard.r2){
					$( '#sound-file12' ).get(0).play() ;							//8/2追加
					//console.log("2倍");
					D_score *=2;
					D_totalScore += D_score;
				}else if ( (D_dartsBoard.x - D_hit_x) * (D_dartsBoard.x - D_hit_x) + (D_dartsBoard.y - D_hit_y) * (D_dartsBoard.y - D_hit_y)
				<= D_dartsBoard.r1 * D_dartsBoard.r1){
					$( '#sound-file14' ).get(0).play() ;							//8/2追加
					//console.log("0点");
					D_score = 0;
					D_totalScore += D_score;
				}else {
					$( '#sound-file14' ).get(0).play() ;							//8/2追加
					//console.log("0点");
					D_score = 0;
					D_totalScore += D_score;
				}
				clearInterval(D_timer1);
				D_draw();
				D_timer2 = setTimeout(D_hit_or_bad, 100);
			}
}
//メインループここまで-----------------------------------------------------------

//Hit or That's too bad 表示
function D_hit_or_bad(){
		D_ctx.font = "40pt Arial";
		if(D_score == 0){
			D_ctx.globalAlpha = 0.6;
			D_ctx.fillStyle = "gray";
			D_ctx.fillRect(0,300,1000,100);
			D_ctx.globalAlpha = 1;
			D_ctx.fillStyle = "white";
			D_ctx.fillText("-That's too bad-",300,370);
		}else{
			D_ctx.globalAlpha = 0.6;
			D_ctx.fillStyle = "orange";
			D_ctx.fillRect(0,300,1000,100);
			D_ctx.globalAlpha = 1;
			D_ctx.fillStyle = "white";
			D_ctx.fillText("Hit!!  " + D_score + "点",400,370);
		}
		//clearTimeout(D_timer2);
		D_timer3 = setTimeout(D_next, 2000);
}

//next 表示
function D_next(){
		//clearTimeout(D_timer3);
		D_draw();
		D_ctx.fillStyle = "blue";
		D_ctx.fillRect(0,300,1000,100);
		D_ctx.fillStyle = "white";
		D_ctx.font = "40pt Arial";
		if(D_countRound == 1){
			D_ctx.fillText("-Second throw-",320,370);
			D_countRound++;
			//D_speed +=2;
			D_timer4 = setTimeout(D_init, 2000);
		}else if(D_countRound == 2){
			D_ctx.fillText("-Third throw-",320,370);
			D_countRound++;
			//D_speed +=2;
			D_timer4 = setTimeout(D_init, 2000);
		}else if(D_countRound == 3){
			D_ctx.globalAlpha = 0.3;//グレー半透明背景設定
			D_ctx.fillStyle = "#ffffff";
			D_ctx.fillRect(0,0,1000, 700);
			D_ctx.globalAlpha = 1;
			D_ctx.fillStyle = "blue";
			D_ctx.fillRect(0,300,1000,100);
			D_ctx.fillStyle = "white";
			D_ctx.fillText("-Back to the party venue!-",200,370);
			D_result = D_totalScore / D_maxScore * 100;
			//console.log(D_result + "%");
			var a = Math.ceil(D_result);
			//console.log(a + "%");
			resultDarts= D_result;
			$("#btnGame2").show(500);
		}
		
}
