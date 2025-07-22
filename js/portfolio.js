/* header */
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

/* banner */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
            el.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});
document.querySelectorAll('.textArea').forEach((el) => observer.observe(el));

/* 다크모드 아이콘 컬러 전환 */
const toggleBtn = document.getElementById('toggleTheme');
const themeIcon = document.getElementById('themeIcon');
const icoHtml = document.getElementById('icoHtml');
const icoCss = document.getElementById('icoCss');
const icoJavascript = document.getElementById('icoJavascript');
const icoReact = document.getElementById('icoReact');
const icoFigma = document.getElementById('icoFigma');
const icoPhotoshop = document.getElementById('icoPhotoshop');
const icoIllustrator = document.getElementById('icoIllustrator');
const icoIndesign = document.getElementById('icoIndesign');
const icoPremierePro = document.getElementById('icoPremierePro');
const icoMenu = document.getElementById('icoMenu')

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  themeIcon.src = isDark ? 'img/ico_light.png' : 'img/ico_dark.png';
  icoHtml.src = isDark ? 'img/ico_html_d.png' : 'img/ico_html.png';
  icoCss.src = isDark ? 'img/ico_css_d.png' : 'img/ico_css.png';
  icoJavascript.src = isDark ? 'img/ico_javascript_d.png' : 'img/ico_javascript.svg';
  icoReact.src = isDark ? 'img/ico_react_d.png' : 'img/ico_react.png';
  icoFigma.src = isDark ? 'img/ico_figma_d.png' : 'img/ico_figma.png';
  icoPhotoshop.src = isDark ? 'img/ico_photoshop_d.png' : 'img/ico_photoshop.png';
  icoIllustrator.src = isDark ? 'img/ico_illustrator_d.png' : 'img/ico_illustrator.png';
  icoIndesign.src = isDark ? 'img/ico_indesign_d.png' : 'img/ico_indesign.png';
  icoPremierePro.src = isDark ? 'img/ico_premiere_pro_d.png' : 'img/ico_premiere_pro.png';
  icoMenu.src = isDark ? 'img/ico_menu_d.png' : 'img/ico_menu.png';
});

/* nav_mobile */
$('.mobile img').on('click', function() {
    $('.mobile .nav').toggleClass('on');
});

$('.mobile .nav li a').on('click', function(e) {
    $('.mobile .nav li a').removeClass('active');
    $(this).addClass('active');
});