/*
* 判断注册或者登陆用户名的输入情况
* */
function judgeUname( number ){
    let $uname = document.getElementById( 'uname' ).value;
    let $uname_judge = document.getElementsByClassName( 'uname_judge' );
    //判断用户输入用户名是否符合设定
    //用户名长度必须在3~15位
    if( number == 1 ){
        $uname.length == 0 ? $uname_judge[0].innerHTML = '用户名不能为空' : $uname.length < 3 || $uname.length > 15 ? $uname_judge[0].innerHTML = "用户名必须在3~15个字符之间" : $uname_judge[0].innerHTML = '';
    } else{
        $uname.length == 0 ? $uname_judge[0].innerHTML = '用户名不能为空' : $uname_judge[0].innerHTML = '';
    }
}

/*
* 判断用户密码输入是否符合设定
* */
function judgeUpwd( number ){
    let $upwd = document.getElementById( 'upwd' ).value;
    let $upwd_judge = document.getElementsByClassName( 'upwd_judge' );
    if( number == 1 ){
        $upwd.length == 0 ? $upwd_judge[0].innerHTML = '密码不能为空' : $upwd.length < 6 || $upwd.length > 20 ? $upwd_judge[0].innerHTML = "密码6～20位，区分大小写" : $upwd_judge[0].innerHTML = '';
    } else{
        $upwd.length == 0 ? $upwd_judge[0].innerHTML = '密码不能为空' : $upwd_judge[0].innerHTML = '';
    }
}

/*
* 判断用户名重复输入的是否与上一次输入一致
* */
function judgeUcpwd(){
    let $cpwd = document.getElementById( 'cpwd' ).value;
    let $upwd = document.getElementById( 'upwd' ).value;
    var $cpwd_judge = document.getElementsByClassName( 'cpwd_judge' );
    $cpwd.length == 0 ? $cpwd_judge[0].innerHTML = '密码不能为空' : $cpwd == $upwd ? $cpwd_judge[0].innerHTML = '' : $cpwd_judge[0].innerHTML = '密码输入不一致！';
}
