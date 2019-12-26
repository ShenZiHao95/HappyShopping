setInterval( Update_time , 1000 );
var time = '1576029600';

//距离下次更新时间
function Update_time() {
    let $times_hours = document.getElementById('update_hours');
    let $times_min = document.getElementById('update_min');
    let $times_second = document.getElementById('update_second');
    let tempTime = new Date(time - new Date());
    let hour = tempTime.getHours();
    let min = tempTime.getMinutes();
    let second = tempTime.getSeconds();
    //倒计时时间
    //$times_update.innerHTML = hour + "时" + min + "分" + second + "秒";
    $times_hours.innerHTML = hour;
    $times_min.innerHTML = min;
    $times_second.innerHTML = second;
}