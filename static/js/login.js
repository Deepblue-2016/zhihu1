/**
 * Created by Administrator on 2018/9/12.
 */
// function psChecked() {
//     var patt = /^[0-9]{8}$/;
//
//     var ps = document.getElementById("password");
//
//     if( !patt.test(ps.value) )
//     {
//         var pstips = document.getElementById("psTips");
//
//         // pstips.style.display = "inline";
//
//         pstips.innerHTML = "请输入8位数字";
//     }
// }

function psChecked() {
    var patt = /^[0-9]{8}$/;

    var ps = document.getElementById("password");

    if( !patt.test(ps.value) )
    {
        var pstips = document.getElementById("psTips");

        pstips.style.display = "inline";

        // pstips.innerHTML = "请输入8位数字";
    }
}

function capChecked() {
    var cap = document.getElementById("captcha");

    if( cap.value != "nk6p" && cap.value != "NK6P"  )
    {
        var capTips = document.getElementById("capTips");

        capTips.style.display = "inline";
    }
}

function nameChecked(a) {
    var patt = /^1[3578][0-9]{9}$/;

    // var name = document.getElementById("username");

    console.log(patt.test(a.value));

    if( !patt.test(a.value) )
    {
        var nameTips = document.getElementById("nameTips");
        nameTips.style.display = "inline";
    }
}

// function clearPsTips() {
//     var pstips = document.getElementById("psTips");
//     pstips.innerHTML = "";
// }

//
// function clearCapTips() {
//     var capTips = document.getElementById("capTips");
//     capTips.style.display = "none";
// }
//
// function clearNameTips(a) {
//
//     console.log(a.name);
//
//     var nameTips = document.getElementById("nameTips");
//     nameTips.style.display = "none";
// }

function clearTips(tips) {
    var a = document.getElementById(tips);
    a.style.display = "none";
}

function sendInfo() {
    var nameTips = document.getElementById("nameTips");
    var pstips = document.getElementById("psTips");
    var capTips = document.getElementById("capTips");

    console.log(nameTips.style.display);
    console.log(pstips.style.display);
    console.log(capTips.style.display);


    if(nameTips.style.display!="none"
        || pstips.style.display!="none"
        || capTips.style.display!="none")
    {
        return false;
    }
    else
    {
        return true;
    }
}









