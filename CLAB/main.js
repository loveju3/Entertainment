$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
                             
    var secondUnit = 1000;
    var minuteUnit = secondUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit= hourUnit*24;
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+
                                 (new Date((startdate.getTime()+    x*7*dayUnit))).toLocaleDateString().slice(5)+"</td>");
        //對date物件
        //gettime()從1970/01/01開始到現在有多少毫秒，
        //to localDateString()把總共多少毫秒換回去，現在的日期
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("</tr>");
    }
});