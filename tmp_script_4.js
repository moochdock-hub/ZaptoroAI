
(function(){
  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var btn = document.getElementById('mobileMenuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) btn.addEventListener('click', function(){ menu.classList.toggle('hidden'); });

  // Counters on view
  function animateCounter(el, target){
    var dur = 1800, t0 = performance.now();
    function step(t){
      var p = Math.min((t - t0)/dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      var val = Math.floor(target * e);
      if (el.dataset.format === 'percent' || (el.textContent||'').indexOf('%') !== -1) el.textContent = val + '%';
      else el.textContent = val.toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('.counter[data-target]');
  if (counters.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(ent){
        if (ent.isIntersecting){
          var t = parseInt(ent.target.getAttribute('data-target')||'0',10);
          animateCounter(ent.target, t);
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(c){ io.observe(c); });
  }

  // Reveal animations
  var animated = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in-bounce');
  if (animated.length){
    animated.forEach(function(el){ el.style.animationPlayState = 'paused'; });
    var so = new IntersectionObserver(function(entries){
      entries.forEach(function(ent){
        if (ent.isIntersecting){ ent.target.style.animationPlayState = 'running'; so.unobserve(ent.target); }
      });
    }, { threshold: 0.1 });
    animated.forEach(function(el){ so.observe(el); });
  }
})();
