/*倒计时*/
setInterval( count_down , 1000 );

var currentTime = new Date();
currentTime.setHours( currentTime.getHours() + 10 );
var target_time = new Date( currentTime );

function count_down(){
    let temp_time = new Date( target_time - new Date() );
    let down_time_hours = temp_time.getHours() - 8;
    let down_time_minute = temp_time.getMinutes();
    let down_time_second = temp_time.getSeconds();
    document.getElementById( 'h' ).innerHTML = down_time_hours;
    document.getElementById( 'm' ).innerHTML = down_time_minute;
    document.getElementById( 's' ).innerHTML = down_time_second;
    // console.log( down_time_hours + "时" + down_time_minute + "分" + down_time_second + "秒" );
    //如果倒计时到了，让原价恢复，并且折扣被划掉
    if( down_time_hours == '0' && down_time_minute == '0' && down_time_second == '0' ){
        let $price = document.getElementsByClassName( "price" );
        //让原价删除线去除
        $price[1].style.textDecoration = "none";
        //让折扣增加删除线
        let $discount_details = document.getElementsByClassName( 'discount_details' );
        $discount_details[0].style.textDecoration = "line-through";
    }
}

if( document.getElementById( 'h' ).innerHTML == '9' && document.getElementById( 'm' ).innerHTML == '59' && document.getElementById( 's' ).innerHTML == '55' ){
    alert( 11 );
    clearInterval( count_down );
}
