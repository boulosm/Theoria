(function () {
  // Mobile menu
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.menu-btn');
  if (nav && btn) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Quote form: composes an email in the visitor's mail app (no server needed).
  // To collect submissions without email clients, see README (Formspree).
  var form = document.getElementById('quote-form');
  if (!form || form.getAttribute('data-mode') !== 'mailto') return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
    var body = [
      'Name: ' + v('name'),
      'Email: ' + v('email'),
      'Type of build: ' + v('type'),
      'Deadline: ' + (v('deadline') || 'Flexible'),
      '',
      'What I need Excel to do:',
      v('need'),
      '',
      'How I do it now:',
      v('current') || '—',
      '',
      '(If you have an existing file, attach it to this email.)'
    ].join('\n');
    var subject = 'Free Excel Build Quote' + (v('name') ? ' – ' + v('name') : '');
    window.location.href = 'mailto:' + form.getAttribute('data-email') +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    var note = document.getElementById('form-note');
    if (note) note.hidden = false;
  });
})();

// Showcase tabs (homepage)
(function () {
  var tabs = document.querySelectorAll('[role="tab"]');
  if (!tabs.length) return;
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); select(n);
    });
  });
})();
