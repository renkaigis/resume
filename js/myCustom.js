window.onload = function () {
    window.requestAnimationFrame(getDate)
}

function getDate() {
    var d = new Date();
    var year = d.getFullYear()  //获取年

    // 页面底部日期
    var currentYear = document.getElementById("currentYear")
    currentYear.innerHTML = year
}
