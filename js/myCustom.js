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


document.addEventListener("DOMContentLoaded", function () {
    // Select all UL elements with the class "publication-list"
    document.querySelectorAll(".publication_list").forEach((ul) => {
        let count = 1; // Start numbering from 1 for each UL
        ul.querySelectorAll("li").forEach((li) => {
            li.innerHTML = `[${count}] ` + li.innerHTML;
            count++;
        });
    });
});