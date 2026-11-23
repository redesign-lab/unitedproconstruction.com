const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';navigation.classList.toggle('open',!open);toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open menu':'Close menu');});
navigation.addEventListener('click',event=>{if(event.target.closest('a')) closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
window.addEventListener('resize',()=>{if(window.innerWidth>800) closeMenu();});
