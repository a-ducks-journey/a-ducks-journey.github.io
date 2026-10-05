(function () {
  var root = document.documentElement;
  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-ui') === 'en' ? 'zh' : 'en';
      root.setAttribute('data-ui', next);
      try { localStorage.setItem('ui-lang', next); } catch (e) {}
    });
  });
})();
