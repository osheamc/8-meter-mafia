/* ================================
   8 METER MAFIA — MAIN JAVASCRIPT
   ================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Nav --- */
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  const mobileBackdrop = document.getElementById('mobileBackdrop');

  const openMobileNav = () => mobileNav?.classList.add('open');
  const closeMobileNav = () => mobileNav?.classList.remove('open');

  hamburger?.addEventListener('click', openMobileNav);
  mobileClose?.addEventListener('click', closeMobileNav);
  mobileBackdrop?.addEventListener('click', closeMobileNav);

  /* --- Cart Drawer --- */
  const cartBtns    = document.querySelectorAll('[data-cart-open]');
  const cartDrawer  = document.getElementById('cartDrawer');
  const cartClose   = document.getElementById('cartClose');
  const cartBackdrop = document.getElementById('cartBackdrop');

  const openCart  = () => cartDrawer?.classList.add('open');
  const closeCart = () => cartDrawer?.classList.remove('open');

  cartBtns.forEach(b => b.addEventListener('click', openCart));
  cartClose?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);

  /* --- Add to Cart (demo) --- */
  const quickAddBtns = document.querySelectorAll('.product-quick');
  const cartCount    = document.querySelector('.cart-count');
  let count = 0;

  quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      count++;
      if (cartCount) cartCount.textContent = count;
      btn.textContent = '✓ Added!';
      btn.style.background = '#059669';
      setTimeout(() => {
        btn.textContent = 'Quick Add';
        btn.style.background = '';
      }, 1500);
    });
  });

  /* --- Email Signup --- */
  const signupForm = document.getElementById('signupForm');
  signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = signupForm.querySelector('input');
    const btn   = signupForm.querySelector('button');
    if (!input?.value.trim()) return;
    btn.textContent = '✓ You\'re In!';
    btn.style.background = '#059669';
    input.value = '';
    input.placeholder = 'Check your email for your 15% off!';
    setTimeout(() => {
      btn.textContent = 'Join Now';
      btn.style.background = '';
    }, 4000);
  });

  /* --- Sticky header shadow on scroll --- */
  const header = document.querySelector('.site-header');
  const observer = new IntersectionObserver(
    ([entry]) => header?.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0 }
  );
  const sentinel = document.querySelector('.hero');
  if (sentinel) observer.observe(sentinel);

  /* --- Product card click (demo) --- */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('product-quick')) return;
      // In a real site this would navigate to product page
    });
  });

  /* --- Smooth reveal on scroll (Intersection Observer) --- */
  const revealEls = document.querySelectorAll('.cat-card, .product-card, .review-card');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.style.transform?.includes('translateY') ? 'translateY(0)' : '';
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    revealObs.observe(el);
  });

  /* --- Color swatch switching (demo) --- */
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const siblings = dot.parentElement?.querySelectorAll('.dot');
      siblings?.forEach(d => d.style.borderColor = '');
      dot.style.borderColor = '#6d28d9';
    });
  });

});
