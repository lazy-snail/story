function drawNext() {
    var lastdraw = $("#luckyperson").html();
    var alllucky = $("#drawhistory").html();
    // $("#drawhistory").html(lastdraw + '<br />' + alllucky);
    // var personname = data[Math.floor(Math.random() * data.length)];
    // var bodypart = body_data[Math.floor(Math.random() * body_data.length)];
    // $("#luckyperson").html(personname + " " + bodypart);
    var personname = t_f[Math.floor(Math.random() * t_f.length)];
    $("#luckyperson").html(personname);
}
