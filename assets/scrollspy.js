// Shared scrollspy: highlights the TOC link for the section currently in view.
(function(){
  var toc = document.getElementById('toc');
  if(!toc) return;
  var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a'));
  var map = {};
  tocLinks.forEach(function(a){
    var href = a.getAttribute('href') || '';
    if(href.charAt(0) !== '#') return;          // skip cross-page links
    var el = document.getElementById(href.slice(1));
    if(el) map[href.slice(1)] = a;
  });
  var ids = Object.keys(map);
  if(!ids.length) return;
  var sb = document.getElementById('sidebar');
  function onScroll(){
    var pos = window.scrollY + 120;
    var currentId = ids[0];
    for(var i=0;i<ids.length;i++){
      var el = document.getElementById(ids[i]);
      if(el && el.offsetTop <= pos) currentId = ids[i];
    }
    tocLinks.forEach(function(a){ a.classList.remove('active'); });
    var link = map[currentId];
    if(link){
      link.classList.add('active');
      if(sb){
        var lt = link.offsetTop, lb = lt + link.offsetHeight;
        if(lt < sb.scrollTop || lb > sb.scrollTop + sb.clientHeight){
          sb.scrollTop = lt - sb.clientHeight/2;
        }
      }
    }
  }
  var ticking=false;
  window.addEventListener('scroll',function(){
    if(!ticking){ window.requestAnimationFrame(function(){onScroll();ticking=false;}); ticking=true; }
  });
  onScroll();
})();
