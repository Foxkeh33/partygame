var T_timer;

$(function(){

var OP_timer;
$(function(){
	OP_timer = setTimeout(glass, 1000);
});

	function glass(){
		$("#glassL").animate({
			"top" : "450",
			"left" : "460"}, 800, "swing").animate({
			"top" : "450",
			"left" : "460"}, 300, "swing",OPoto).animate({
			"top" : "400",
			"left" : "500"}, 100, "linear").animate({
			"top" : "250",
			"left" : "400"}, 1000, "linear")

		$("#glassR").animate({
			"top" : "450",
			"left" : "620"}, 800, "swing").animate({
			"top" : "450",
			"left" : "620"}, 300, "swing").animate({
			"top" : "400",
			"left" : "590"}, 100, "linear").animate({
			"top" : "250",
			"left" : "700"}, 1000, "linear");
		
		function OPoto(){
			$( '#sound-file19' ).get(0).play();//8/3追加
		}
				clearTimeout = (OP_timer);
	}
	
	//タイトルページ
	T_timer = setTimeout(T_tomomi, 5000);
	
});
function T_tomomi(){
	$("#T_tomomi").animate({
		"left" : "-180"}, 1000, "swing", T_syuuhei);
			clearTimeout = (T_timer);
}
function T_syuuhei(){
 	$("#T_syuuhei").animate({
		"left" : "730"}, 1000, "swing", T_maika);
 }
function T_maika(){
 	$("#T_maika").animate({
		"left" : "100"}, 1000, "swing", T_miki);
 }
function T_miki(){
 	$("#T_miki").animate({
		"left" : "600"}, 1000, "swing",T_risa);
 }
 function T_risa(){
	$("#T_risa").animate({
		"left" : "250"}, 1000, "swing",function(){
		T_Timer = setInterval(T_ClickToStart);
	});
}
function T_ClickToStart(){
	$("#btnTitle p").animate({
	"opacity" : "0.3"},1000,"swing").animate({
	"opacity" : "1"},1000,"swing");
}