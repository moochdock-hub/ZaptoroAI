
(function(){
  // Hero video -> image fallback (safe, once)
  var v = document.getElementById('heroVideo');
  var f = document.getElementById('heroFallback');
  function fallback(){ try{ if(v && v.parentNode) v.parentNode.removeChild(v); }catch(e){} if(f) f.classList.remove('hidden'); }
  if (v && f) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fallback();
    } else {
      v.play().catch(fallback);
      ['error','stalled','abort','suspend'].forEach(function(ev){ v.addEventListener(ev, fallback, { once:true }); });
    }
  }
})();
