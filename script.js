/* Nour: reveals, hero exit, scrollspy, booking, AR/FR, theme (dark signature). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STR = {
    skip: { ar: 'تخطَّ إلى المحتوى', fr: 'Aller au contenu' },
    brandSub: { ar: 'سطيف · مشروع تجريبي', fr: 'Sétif · démo' },
    nav0: { ar: 'الرعاية', fr: 'Soins' },
    nav1: { ar: 'الخدمات', fr: 'Services' },
    nav2: { ar: 'لماذا نحن', fr: 'Pourquoi nous' },
    nav3: { ar: 'احجز', fr: 'Réserver' },
    navLabel: { ar: 'أقسام الصفحة', fr: 'Sections de la page' },
    themeToggle: { ar: 'تبديل المظهر', fr: 'Changer de thème' },
    book: { ar: 'احجز موعد', fr: 'Réserver' },
    kicker: { ar: 'سطيف · طب عام · استقبال هادئ', fr: 'Sétif · médecine générale · accueil calme' },
    heroTitle: { ar: 'طِبٌّ <em>يُسمَع</em> قبل أن يُوصَف', fr: 'Une médecine qui <em>écoute</em> d’abord' },
    heroSub: { ar: 'عيادة النور: نصف ساعة تُنصَت لك، تشخيص يُشرَح بكلماتك، ومتابعة لا تنقطع بعد أن تغادر.', fr: 'Clinique Nour : une demi-heure qui vous écoute, un diagnostic dans vos mots, un suivi qui continue après votre départ.' },
    ctaBook: { ar: 'احجز موعد', fr: 'Prendre rendez-vous' },
    ctaServices: { ar: 'اكتشف الخدمات', fr: 'Découvrir les services' },
    cKicker: { ar: 'فلسفتنا', fr: 'Notre philosophie' },
    cTitle: { ar: 'الهدوء <em>جزء من العلاج</em>', fr: 'Le calme <em>fait partie du soin</em>' },
    cBody1: { ar: 'صمّمنا العيادة لتخفض التوتر قبل أن يبدأ الفحص: إضاءة خافتة، مواعيد متباعدة بلا ازدحام، وطبيب لا ينظر إلى الساعة.', fr: 'La clinique est pensée pour apaiser avant l’examen : lumière douce, rendez-vous espacés sans foule, médecin qui ne regarde pas sa montre.' },
    cBody2: { ar: 'كل زيارة تنتهي بورقة مكتوبة: ماذا وجدنا، ماذا نفعل، ومتى نلتقي مجدداً. لا شيء يُترَك للتخمين.', fr: 'Chaque visite se termine par une feuille écrite : ce qu’on a trouvé, ce qu’on fait, quand on se revoit. Rien n’est laissé au hasard.' },
    capExam: { ar: 'غرفة الفحص — إضاءة هادئة ووقت كافٍ لكل مريض', fr: 'Salle d’examen — lumière douce et temps pour chacun' },
    sKicker: { ar: 'الخدمات', fr: 'Services' },
    sTitle: { ar: 'كل ما تحتاجه <em>تحت سقف واحد</em>', fr: 'Tout ce qu’il faut <em>sous un même toit</em>' },
    sv0: { ar: 'استشارة عامة', fr: 'Consultation générale' },
    sv1: { ar: 'فحص شامل + تخطيط', fr: 'Bilan complet + ECG' },
    sv2: { ar: 'تحاليل مخبرية', fr: 'Analyses laboratoire' },
    sv3: { ar: 'طب الأطفال', fr: 'Pédiatrie' },
    sv4: { ar: 'تطعيم ووقاية', fr: 'Vaccination' },
    sv5: { ar: 'حصة متابعة', fr: 'Séance de suivi' },
    sNote: { ar: 'أسعار وخدمات تجريبية — تُضبط حسب العيادة الحقيقية.', fr: 'Services et tarifs fictifs — ajustés selon la vraie clinique.' },
    wKicker: { ar: 'لماذا النور', fr: 'Pourquoi Nour' },
    wTitle: { ar: 'ثلاثة وعود، <em>مكتوبة</em>', fr: 'Trois promesses, <em>écrites</em>' },
    w0t: { ar: 'نُنصت أولاً', fr: 'On écoute d’abord' },
    w0b: { ar: 'أول عشر دقائق لك وحدك: تحكي ونحن نسمع. لا مقاطعة، لا استعجال.', fr: 'Les dix premières minutes sont à vous : vous parlez, on écoute. Ni interruption ni précipitation.' },
    w1t: { ar: 'نشرح بكلماتك', fr: 'On explique dans vos mots' },
    w1b: { ar: 'التشخيص بلغة تفهمها، وخطة مكتوبة تأخذها معك إلى البيت.', fr: 'Diagnostic compréhensible et plan écrit à emporter à la maison.' },
    w2t: { ar: 'نتابع بعد الباب', fr: 'On suit après la porte' },
    w2b: { ar: 'رسالة واتساب خلال 48 ساعة وتذكير بالمراجعة. الملف واحد لا يتشتت.', fr: 'Message WhatsApp sous 48 h et rappel du contrôle. Un dossier unique.' },
    tsTag: { ar: 'شهادة تجريبية — تُستبدل بشهادة حقيقية', fr: 'Témoignage d’exemple — à remplacer' },
    tsBody: { ar: '"أول مرة يشرح لي طبيب تحاليلي سطراً بسطر. خرجت فاهمة مرضي قبل ما نخرج بالدواء."', fr: '« Pour la première fois, un médecin m’a expliqué mes analyses ligne par ligne. J’ai compris avant même l’ordonnance. »' },
    tsWho: { ar: 'مريضة من سطيف', fr: 'Patiente de Sétif' },
    bkKicker: { ar: 'احجز', fr: 'Réserver' },
    bkTitle: { ar: 'موعدك <em>بهدوء</em>', fr: 'Votre rendez-vous <em>en douceur</em>' },
    bkName: { ar: 'الاسم الكامل', fr: 'Nom complet' },
    bkNamePh: { ar: 'مثال: أمين بن علي', fr: 'Ex : Amine Ben Ali' },
    bkPhone: { ar: 'رقم الهاتف', fr: 'Téléphone' },
    bkReason: { ar: 'سبب الزيارة', fr: 'Motif de visite' },
    rs0: { ar: 'استشارة عامة', fr: 'Consultation générale' },
    rs1: { ar: 'فحص شامل', fr: 'Bilan complet' },
    rs2: { ar: 'متابعة', fr: 'Suivi' },
    rs3: { ar: 'أخرى', fr: 'Autre' },
    bkDay: { ar: 'اختر اليوم', fr: 'Choisissez le jour' },
    bkTime: { ar: 'اختر الفترة', fr: 'Choisissez le créneau' },
    bkOrCall: { ar: 'أو اتصل مباشرة:', fr: 'Ou appelez directement :' },
    foot: { ar: 'عيادة النور — مشروع تجريبي · صُنع بواسطة Ibdaa Creations', fr: 'Clinique Nour — maquette de démonstration · par Ibdaa Creations' },
    altHero: { ar: 'قاعة استقبال عيادة هادئة — صورة توضيحية', fr: 'Accueil apaisé — photo d’illustration' },
    altExam: { ar: 'غرفة فحص طبي — صورة توضيحية', fr: 'Salle d’examen — photo d’illustration' },
    days: { ar: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'], fr: ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi'] },
    times: { ar: ['صباحاً · 8–11', 'منتصف النهار · 11–14', 'مساءً · 14–17'], fr: ['Matin · 8–11', 'Midi · 11–14', 'Après-midi · 14–17'] },
    errNeed: { ar: 'يرجى إدخال الاسم ورقم هاتف صحيح (05/06/07 + 8 أرقام).', fr: 'Veuillez saisir nom et téléphone valides (05/06/07 + 8 chiffres).' },
    goPrefix: { ar: 'تأكيد', fr: 'Confirmer' },
    bookMsg: {
      ar: function (n, p, r, d, t) { return 'حجز موعد: ' + n + '، ' + p + '، ' + r + '، ' + d + ' ' + t; },
      fr: function (n, p, r, d, t) { return 'RDV : ' + n + ', ' + p + ', ' + r + ', ' + d + ' ' + t; }
    }
  };
  var lang = 'ar';
  try { lang = localStorage.getItem('nour-lang') || 'ar'; } catch (e) {}
  function cur(id) {
    var b = document.querySelector('#' + id + ' button.is-sel');
    return b ? b.dataset.i : 0;
  }
  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n'), v = STR[k] && STR[k][lang];
      if (v == null) return;
      if (k === 'bkNamePh') { el.placeholder = v; return; }
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) { el.setAttribute(attr, v); return; }
      el.innerHTML = v;
    });
    var di = cur('bookDays'), ti = cur('bookTimes');
    var db = document.getElementById('bookDays'), tb = document.getElementById('bookTimes');
    if (db) db.querySelectorAll('button').forEach(function (b, i) { b.textContent = STR.days[lang][i]; b.dataset.i = i; b.classList.toggle('is-sel', i == di); });
    if (tb) tb.querySelectorAll('button').forEach(function (b, i) { b.textContent = STR.times[lang][i]; b.dataset.i = i; b.classList.toggle('is-sel', i == ti); });
    var t = document.getElementById('langToggle');
    if (t) t.textContent = lang === 'ar' ? 'FR' : 'عربي';
    refreshBooking();
    try { localStorage.setItem('nour-lang', lang); } catch (e) {}
  }
  document.getElementById('langToggle').addEventListener('click', function () { lang = lang === 'ar' ? 'fr' : 'ar'; applyLang(); });

  var themeBtn = document.getElementById('themeToggle');
  var theme = 'dark';
  try { theme = localStorage.getItem('nour-theme') || 'dark'; } catch (e) {}
  function applyTheme() {
    if (theme === 'dark') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
    var icon = themeBtn && themeBtn.querySelector('i');
    if (icon) icon.className = 'ph-light ' + (theme === 'dark' ? 'ph-moon' : 'ph-sun');
    try { localStorage.setItem('nour-theme', theme); } catch (e) {}
  }
  if (themeBtn) themeBtn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });
  applyTheme();

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      document.querySelectorAll('#nav a').forEach(function (a) {
        a.classList.toggle('lit', a.getAttribute('href') === '#' + en.target.id);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['care', 'services', 'why', 'book'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  var heroBg = document.querySelector('.hero__bg');
  var heroInner = document.querySelector('.hero__inner');
  var heroScrim = document.querySelector('.hero__scrim');
  var progress = document.getElementById('progress');
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;
    var max = document.body.scrollHeight - vh;
    if (progress) progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(3) : 0);
    if (!reduce && y < vh * 1.2) {
      var p = Math.min(y / vh, 1);
      if (heroBg) heroBg.style.transform = 'translateY(' + (y * 0.28).toFixed(1) + 'px)';
      if (heroInner) {
        heroInner.style.transform = 'translateY(' + (-y * 0.32).toFixed(1) + 'px)';
        heroInner.style.opacity = (1 - p * 1.1).toFixed(2);
      }
      if (heroScrim) heroScrim.style.opacity = (0.55 + p * 0.45).toFixed(2);
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });

  var go = document.getElementById('bookGo');
  var goText = document.getElementById('bookGoText');
  var errBox = document.getElementById('bookErr');
  var nameI = document.getElementById('bkName');
  var phoneI = document.getElementById('bkPhone');
  var reasonI = document.getElementById('bkReason');
  function valid() {
    return nameI && nameI.value.trim().length >= 3 &&
           phoneI && /^0[567][0-9]{8}$/.test(phoneI.value.replace(/[\s-]/g, ''));
  }
  function refreshBooking() {
    var dayShort = STR.days[lang][cur('bookDays')];
    var timeFull = STR.times[lang][cur('bookTimes')];
    var timeShort = timeFull.split(' ·')[0];
    var r = reasonI ? reasonI.options[reasonI.selectedIndex].text : '';
    var n = nameI && nameI.value.trim() ? nameI.value.trim() : '…';
    var p = phoneI && phoneI.value.trim() ? phoneI.value.trim() : '…';
    var msg = STR.bookMsg[lang](n, p, r, dayShort, timeFull);
    if (go) go.href = 'https://wa.me/213000000000?text=' + encodeURIComponent(msg);
    if (goText) goText.textContent = STR.goPrefix[lang] + ': ' + dayShort + ' ' + timeShort;
  }
  function pills(id) {
    var box = document.getElementById(id);
    if (!box) return;
    box.querySelectorAll('button').forEach(function (b, i) {
      b.dataset.i = i;
      b.setAttribute('aria-pressed', b.classList.contains('is-sel') ? 'true' : 'false');
    });
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      box.querySelectorAll('button').forEach(function (x) { x.classList.remove('is-sel'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('is-sel');
      b.setAttribute('aria-pressed', 'true');
      if (errBox) errBox.hidden = true;
      refreshBooking();
    });
  }
  pills('bookDays');
  pills('bookTimes');
  ['bkName', 'bkPhone'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('input', function () { if (errBox) errBox.hidden = true; refreshBooking(); });
  });
  if (reasonI) reasonI.addEventListener('change', refreshBooking);
  if (go) go.addEventListener('click', function (e) {
    if (!valid()) {
      e.preventDefault();
      if (errBox) { errBox.textContent = STR.errNeed[lang]; errBox.hidden = false; }
      (nameI && nameI.value.trim().length < 3 ? nameI : phoneI).focus();
    }
  });

  applyLang();
  onScroll();
})();
