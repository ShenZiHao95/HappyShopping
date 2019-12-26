var show_num = [];

draw( show_num );

function dj(){
    draw( show_num );
}

function changeChenkBoxValue(){
    $ready_ok = document.getElementById( 'ready_ok' );
    $ready_ok.value == 1 ? $ready_ok.value = 0 : $ready_ok.value = 1;
}

/*
* 提交时判断用户输入的验证码是否正确
* */
function judgeS_code(){
    let val = document.getElementById( "s_code" ).value;
    let $s_code = document.getElementsByClassName( 's_code_judge' );
    let num = show_num.join( "" );
    if( val == '' ){
        alert( '请输入验证码！' );
        $s_code[0].innerHTML = '验证码不能为空';
    } else if( val.toString().toLowerCase() == num.toLowerCase() ){
        alert( '输入正确！' );
        //验证码输入正确后，判断同意书是否勾选
        $ready_ok = document.getElementById( 'ready_ok' );
        if( $ready_ok.value==0 ){
            alert("请勾选并查看网络使用协议!")
            return;
        }
        return;

    } else{
        alert( '验证码错误！\n你输入的是:  ' + val + "\n正确的是:  " + num + '\n请重新输入！' );
        document.getElementById( "s_code" ).value = '';
        draw( show_num );
    }

}

function draw( show_num ){
    var canvas_width = document.getElementById( 'can_code' ).clientWidth;
    var canvas_height = document.getElementById( 'can_code' ).clientHeight;
    var canvas = document.getElementById( "can_code" );//获取到canvas的对象，演员
    var context = canvas.getContext( "2d" );//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
    var aCode = sCode.split( "," );
    var aLength = aCode.length;//获取到数组的长度

    for( var i = 0 ; i <= 3 ; i++ ){
        var j = Math.floor( Math.random() * aLength );//获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt;
        var x = 10 + i * 20;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate( x , y );
        context.rotate( deg );

        context.fillStyle = randomColor();
        context.fillText( txt , 0 , 0 );

        context.rotate( -deg );
        context.translate( -x , -y );
    }
    for( var i = 0 ; i <= 5 ; i++ ){ //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo( Math.random() * canvas_width , Math.random() * canvas_height );
        context.lineTo( Math.random() * canvas_width , Math.random() * canvas_height );
        context.stroke();
    }
    for( var i = 0 ; i <= 30 ; i++ ){ //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo( x , y );
        context.lineTo( x + 1 , y + 1 );
        context.stroke();
    }
}

function randomColor(){//得到随机的颜色值
    var r = Math.floor( Math.random() * 256 );
    var g = Math.floor( Math.random() * 256 );
    var b = Math.floor( Math.random() * 256 );
    return "rgb(" + r + "," + g + "," + b + ")";
}
