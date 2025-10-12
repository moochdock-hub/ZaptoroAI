(function(){
  // Hero video -> image fallback (safe, once)
  try {
    var v = document.getElementById('heroVideo');
    var f = document.getElementById('heroFallback');
    var playBtn = document.getElementById('heroPlayBtn');
    function fallback(){ try{ if(v && v.parentNode) v.parentNode.removeChild(v); }catch(e){} if(f) f.classList.remove('hidden'); }
    if (v) {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (f) fallback();
      } else {
        // Try autoplay muted; if blocked, reveal play button to start manually
        v.muted = true;
        v.play()
          .then(function(){ if (playBtn) playBtn.classList.add('hidden'); })
          .catch(function(){ if (playBtn) playBtn.classList.remove('hidden'); });
        if (playBtn){
          playBtn.addEventListener('click', function(){
            v.muted = true;
            v.play().then(function(){ playBtn.classList.add('hidden'); }).catch(function(){ /* keep visible */ });
          });
        }
        if (f) ['error','stalled','abort','suspend'].forEach(function(ev){ try{ v.addEventListener(ev, fallback, { once:true }); }catch(e){} });
      }
    }
  } catch(e){ console.warn('hero fallback error', e); }

  // Footer year, mobile menu, counters, reveal animations
  try {
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
        try{
          if (el.dataset.format === 'percent' || (el.textContent||'').indexOf('%') !== -1) el.textContent = val + '%';
          else el.textContent = val.toLocaleString();
        }catch(e){}
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
  } catch(e){ console.warn('footer scripts error', e); }
})();
