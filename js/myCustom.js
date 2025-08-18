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

/* Masonry reveal */
(function($){
  $(document).ready(function(){
    var $items = $('.gallery-card');
    if (!$items.length) return;

    var reveal = function(entries, observer) {
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    };

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(reveal, {
        root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15
      });
      $items.each(function(){ io.observe(this); });
    } else {
      $items.addClass('in-view');
    }
  });
})(jQuery);