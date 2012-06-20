$(document).ready(function(){
  $("#list-in, #list-out, #list-next, #list-all").tablesorter();
  $("#toggles dd#show-all").addClass("yah");
  $("#timeline li div, #list-out, #timeline-out, #list-next, #timeline-next, nav ul").css("display","none");
  $("#timeline li").hover(function(){
    $(this).find('div').toggle();
  });
  $("#show-visuals").click(function(){
    $("nav ul").toggle();
  });
  $("#show-all").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li").css("display","block"); // show all timeline-in boxes
    $("#list-in tbody tr").css("display","table-row"); // show all list-in rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-p").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.p, #timeline-in li.rp").css("display","block"); // show all p boxes
    $("#list-in tbody tr.p, #list-in tbody tr.rp").css("display","table-row"); // show all p rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-pos").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li").css("display","block"); // show all timeline-in boxes
    $("#list-in tbody tr").css("display","table-row"); // show all list-in rows
    $("#timeline-in li.p, #timeline-in li.rp").css("display","none"); // hide all p boxes
    $("#list-in tbody tr.p, #list-in tbody tr.rp").css("display","none"); // hide all p rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-c").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.c").css("display","block"); // show all c boxes
    $("#list-in tbody tr.c").css("display","table-row"); // show all c rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-1b").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.1b").css("display","block"); // show all 1b boxes
    $("#list-in tbody tr.1b").css("display","table-row"); // show all 1b rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-2b").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.2b").css("display","block"); // show all 2b boxes
    $("#list-in tbody tr.2b").css("display","table-row"); // show all 2b rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-3b").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.3b").css("display","block"); // show all 3b boxes
    $("#list-in tbody tr.3b").css("display","table-row"); // show all 3b rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-ss").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.ss").css("display","block"); // show all ss boxes
    $("#list-in tbody tr.ss").css("display","table-row"); // show all ss rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-lf").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.lf").css("display","block"); // show all lf boxes
    $("#list-in tbody tr.lf").css("display","table-row"); // show all lf rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-cf").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.cf").css("display","block"); // show all cf boxes
    $("#list-in tbody tr.cf").css("display","table-row"); // show all cf rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-rf").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.rf").css("display","block"); // show all rf boxes
    $("#list-in tbody tr.rf").css("display","table-row"); // show all rf rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#show-dh").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li, #list-in tbody tr").css("display","none"); // hide all rows and boxes
    $("#timeline-in li.dh").css("display","block"); // show all dh boxes
    $("#list-in tbody tr.dh").css("display","table-row"); // show all dh rows
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#whos-in").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-in").css("display","block"); // show timeline-in
    $("#list-in").css("display","table"); // show list-in
    $("#timeline-in li").css("display","block"); // show all timeline-in boxes
    $("#list-in tbody tr").css("display","table-row"); // show all list-in rows
    $("#timeline-in li.hof").css("display","none"); // hide timeline-in boxes if they're in the hof
    $("#list-in tr.hof").css("display","none"); // hide list-in rows if they're in the hof
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#whos-out").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-out").css("display","block"); // show timeline-out
    $("#list-out").css("display","table"); // show list-out
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  $("#whos-next").click(function(){
    $("#timeline ul, #list-view table").css("display","none"); // hide all timelines and tables
    $("#timeline-next").css("display","block"); // show timeline-next
    $("#list-next").css("display","table"); // show list-next
    $("#toggles a").removeClass("yah"); // remove all yah classes from toggles
    $(this).addClass("yah"); // add yah class to this toggle
  });
  if( window.location.hash ) {
    $(window.location.hash).click();
  }
});
