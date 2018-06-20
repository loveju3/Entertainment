var topic=["尚未開學",
           "國定假日",
           "環境準備",
           "隨機性",
           "重複性",
           "翹課"];
var startdate =new Date();
function setMonthAndDay(startMonth,startDay)
{
    startdate.setMonth(startMonth-1);
    startdate.setDate(startDay);
    startdate.setHours(0);
    startdate.setMinutes(0);
    startdate.setSeconds(0);
}

setMonthAndDay(2,21);