//使用Ajax来判断是否可以登录成功
/*
* 用户登录请求处理
* */
var xhr = new XMLHttpRequest();

function user_login(){
    $uname = document.getElementById( 'uname' ).value;
    $upwd = document.getElementById( 'upwd' ).value;
    if( $uname == '' || $upwd == '' ){
        return;
    }
    //创建ajax对象
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){
            let result = xhr.responseText;
            if( result == '1' ){
                alert( '登录成功' );
            } else{
                alert( '登录失败' );
                document.getElementsByClassName( 'uname_judge' )[0].innerHTML = '用户名或密码错误！';
            }
        }
    }
    xhr.open( 'get' , "/user/login/" + $uname + "&" + $upwd , true );
}

/*
*用户注册请求处理
* */
function user_reg(){
    $uname = document.getElementById( 'uname' ).value;
    $upwd = document.getElementById( 'upwd' ).value;
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4 && xhr.status == 200 ){
            let result = xhr.responseText;
            if( result == '1' ){
                alert( '注册成功!' );
            } else{
                alert( '注册失败!' );
            }
        }
    }
    xhr.open( 'post' , "/user/reg" , true );
    xhr.setRequestHeader( 'Content-Type' , 'application/x-www-form-urlencoded' );
    let formData = `uname=${ $uname }&upwd=${ $upwd }`;
    xhr.send( formData );
}

xhr.send();