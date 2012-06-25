$(document).ready(function(){

  function hideAll() {
    $("#timeline li, #list-view tbody tr").hide();
  }

  hideAll();
  $(".how2").show();
  $(".sortable").tablesorter();
  $("#toggles #show-all").addClass("yah");

  $("#timeline li div, #visuals").hide();
  $("#timeline li").hover(function(){
    $(this).find('div').toggle();
  });

  $("#show-visuals").click(function(){
    $("#visuals").toggle();
  });

  $("#show-all").click(function(){
    hideAll();
    $(".how2").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-p").click(function(){
    hideAll();
    $(".how2.p, .how2.rp").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-pos").click(function(){
    hideAll();
    $(".how2").show();
    $(".how2.p, .how2.rp").hide();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-c").click(function(){
    hideAll();
    $(".how2.c").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-1b").click(function(){
    hideAll();
    $(".how2.1b").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-2b").click(function(){
    hideAll();
    $(".how2.2b").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-3b").click(function(){
    hideAll();
    $(".how2.3b").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-ss").click(function(){
    hideAll();
    $(".how2.ss").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-lf").click(function(){
    hideAll();
    $(".how2.lf").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-cf").click(function(){
    hideAll();
    $(".how2.cf").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-rf").click(function(){
    hideAll();
    $(".how2.rf").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#show-dh").click(function(){
    hideAll();
    $(".how2.dh").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#whos-in").click(function(){
    hideAll();
    $(".how2").show();
    $(".hof").hide();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#whos-out").click(function(){
    hideAll();
    $(".hof").show();
    $(".how2").hide();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  $("#whos-next").click(function(){
    hideAll();
    $(".upcoming").show();
    $("#toggles a").removeClass("yah");
    $(this).addClass("yah");
  });
  if( window.location.hash ) {
    $(window.location.hash).click();
  }
});
