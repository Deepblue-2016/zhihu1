/**
 * Created by Administrator on 2018/9/13.
 */
// function modify() {
//     var province = document.getElementById("province");
//     var city = document.getElementById("city");
//
//     province.disabled = false;
//     city.disabled = false;
//
//     //在html中增加class名，要使用.className来操作，增加的class名前要有空格
//     province.className = " add-border";
//     city.className = " add-border";
//
//     var job = document.getElementById("job");
//
//     job.readOnly = false;
//     job.className = " add-border";
//
// }

var CLSNAME = [];

window.onload = function () {

    var arr = document.getElementsByClassName("fildtext");

    for (var i in arr) {
        // console.log(arr[i].className);
        CLSNAME[i] = arr[i].className;
    }
}

function modify() {
    var sexnv = document.getElementById("sexnv");
    var sexnan = document.getElementById("sexnan");

    sexnv.disabled = false;
    sexnan.disabled = false;

    var arr = document.getElementsByClassName("fildtext");

    for (var i in arr) {
        arr[i].disabled = false;
        arr[i].readOnly = false;

        //在html中增加class名，要使用.className来操作，增加的class名前要有空格
        //一定要使用+=，在class名中增加选择器和对应的css属性
        //否则会覆盖原有的class名

        console.log(arr[i].className);

        arr[i].className = CLSNAME[i] + " add-border";

        console.log(arr[i].className);
    }
}

function savedate() {
    var sexnv = document.getElementById("sexnv");
    var sexnan = document.getElementById("sexnan");

    sexnv.disabled = true;
    sexnan.disabled = true;

    var province = document.getElementById("province");
    var city = document.getElementById("city");

    province.disabled = true;
    city.disabled = true;

    var arr = document.getElementsByClassName("fildtext");

    for (var i in arr) {
        arr[i].readOnly = true;
        arr[i].className = CLSNAME[i];
    }
}

// function shengshi() {
//
//     var province = document.getElementById("province");
//
//     if (province.value == "辽宁省") {
//         var shi = "<option value=''>沈阳</option>";
//         shi += "<option value=''>抚顺</option>";
//         shi += "<option value=''>大连</option>";
//
//         var city = document.getElementById("city");
//         city.innerHTML = shi;
//     }
//
//     if (province.value == "吉林省") {
//         var shi = "<option value=''>四平</option>";
//         shi += "<option value=''>吉林</option>";
//
//         var city = document.getElementById("city");
//         city.innerHTML = shi;
//     }
//
// }

function shengshi() {

    var province = document.getElementById("province");
    var citylist = [];

    switch (province.value) {
        case "辽宁省":
            citylist = ["沈阳", "抚顺", "大连", "本溪", "鞍山"];
            break;

        case "吉林省":
            citylist = ["四平", "吉林"];
            break;

        case "黑龙江省":
            citylist = ["哈尔滨", "大庆"];
            break;
    }

    var cityhtml;

    for (var i in citylist) {
        cityhtml += "<option value=''>" + citylist[i] + "</option>";
    }

    var city = document.getElementById("city");
    city.innerHTML = cityhtml;

}











