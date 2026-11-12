/* Native controls for the locally hosted product pages. No checkout or review submission occurs here. */
(()=>{
 document.querySelectorAll('.market-gallery').forEach(gallery=>{
  const slides=[...gallery.querySelectorAll('.market-slide')];
  const dots=[...gallery.querySelectorAll('[data-slide]')];
  let current=0;
  const show=index=>{
   current=(index+slides.length)%slides.length;
   slides.forEach((slide,i)=>slide.hidden=i!==current);
   dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===current)));
  };
  gallery.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>show(current+Number(button.dataset.direction))));
  dots.forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.slide))));
  gallery.addEventListener('keydown',event=>{
   if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
    event.preventDefault();show(current+(event.key==='ArrowRight'?1:-1));
   }
  });
 });
 document.querySelectorAll('.market-pricing').forEach(section=>{
  section.querySelectorAll('[data-billing]').forEach(button=>button.addEventListener('click',()=>{
   const period=button.dataset.billing;
   section.querySelectorAll('[data-billing]').forEach(option=>option.setAttribute('aria-pressed',String(option===button)));
   section.querySelectorAll('.plan-price').forEach(price=>{
    const [whole,cents]=price.dataset[period].split('.');
    price.querySelector('.price-whole').textContent=whole;
    price.querySelector('.price-cents').textContent=cents;
   });
   const note=section.querySelector('.billing-note');note.textContent=note.dataset[period];
  }));
 });
})();
