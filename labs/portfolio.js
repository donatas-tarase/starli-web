const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {nav.classList.remove('open'); menu.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown', event => {if(event.key === 'Escape' && nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 const filter = button.dataset.filter;
 document.querySelector('#projects').classList.toggle('is-filtered', filter !== 'all');
 let count = 0;
 document.querySelectorAll('[data-category]').forEach(project => {project.hidden = filter !== 'all' && project.dataset.category !== filter; if(!project.hidden) count++;});
 document.querySelector('#work-count').textContent = String(count).padStart(2,'0');
}));
