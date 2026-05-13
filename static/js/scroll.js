$(document).ready(function() {
    var navbarEl = document.querySelector('.fixed-top');
    if (navbarEl && window.bootstrap && window.bootstrap.ScrollSpy) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.fixed-top',
            offset: 80
        });
    }

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        var navbarCollapse = document.getElementById('navbar');
        if (navbarCollapse && window.bootstrap && window.bootstrap.Collapse) {
            var inst = bootstrap.Collapse.getInstance(navbarCollapse);
            if (inst) inst.hide();
        }
    });
});

var cbpAnimatedHeader = (function() {
    var changeHeaderOn = 200, scrollDebounce = 250;

    function scrollPage() {
      $('.navbar-default').toggleClass('navbar-scroll', scrollY() >= changeHeaderOn);
    }

    function scrollY() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }

    window.addEventListener('scroll', function() { setTimeout(scrollPage, scrollDebounce); }, false);
})();

// Animate-on-scroll: replaces wowjs with IntersectionObserver
(function() {
    var wowEls = document.querySelectorAll('.wow');
    if (!wowEls.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('animate__animated');
                e.target.classList.remove('wow');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    wowEls.forEach(function(el) { io.observe(el); });
})();
