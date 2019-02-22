/**
 * Created by Administrator on 2018/9/13.
 */
function quiz() {
    var q = document.getElementById("Modal-wrapper");

    q.style.display = "block";
}

function closeWin() {
    var q = document.getElementById("Modal-wrapper");
    q.style.display = "none";
}

function openEdit() {
    window.location.href = "editPersonal.html";
}