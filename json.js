$(document).ready(function(){
  $.getJSON("hall-of-wwar.json",
    function(result){
      $.each(result.sort(function(a,b){ return a.first_year - b.first_year }),function(i,player){
      $("#timeline-in.new").append("<li id='"+player.uid+"' class='"+player.hof+" "+player.pos+"'>"+player.last_name+" <div>"+player.first_name+" "+player.last_name+" <em>"+player.pos+" ("+player.first_year+"-"+player.last_year+")</em> <dl><dt>WAR/pos</dt><dd>"+player.war_pos+"</dd><dt>WAR/p</dt><dd>"+player.war_p+"</dd><dt>WAR/tot</dt><dd>"+player.war_tot+"</dd><dt>WAR/162</dt><dd>"+player.war_162+"</dd></dl><dl><dt>WAE</dt><dd>"+player.wae+"</dd><dt>WAM</dt><dd>"+player.wam+"</dd></dl><dl><dt>LDSWPA</dt><dd>"+player.wpa_lds+"</dd><dt>LCSWPA</dt><dd>"+player.wpa_lcs+"</dd><dt>WSWPA</dt><dd>"+player.wpa_ws+"</dd><dt>wWPA</dt><dd>"+player.wwpa+"</dd></dl><dl><dt>wWAR</dt><dd>"+player.wwar+"</dd><dt>wWAR/norm</dt><dd>"+player.wwar_norm+"</dd></dl></div></li>\r");
      $("#list-in tbody.new").append("<tr id='"+player.uid+"' class='"+player.hof+" "+player.pos+"'><th>"+player.last_name+", "+player.first_name+"</th><td>"+player.pos+"</td><td>"+player.war_pos+"</td><td>"+player.war_p+"</td><td>"+player.war_tot+"</td><td>"+player.war_162+"</td><td>"+player.wae+"</td><td>"+player.wam+"</td><td>"+player.wwpa+"</td><td>"+player.wwar+"</td><td>"+player.wwar_norm+"</td><td>"+player.first_year+"</td><td>"+player.last_year+"</td></tr>\r");
    });
  });
});
