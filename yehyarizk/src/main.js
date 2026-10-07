const services = [
  ['01', 'Digital Marketing', 'Strategic marketing plans designed to grow your brand and reach the right audience.', '↗'],
  ['02', 'Social Media Management', 'Professional management, content planning, engagement, and page growth across social platforms.', '◎'],
  ['03', 'Content Creation', 'Creative content, copywriting, reels, and campaigns that attract and engage your audience.', '✦'],
  ['04', 'Graphic Design', 'High-quality social media, advertising, and promotional designs aligned with your brand identity.', '▧'],
  ['05', 'Media Buying & Paid Ads', 'Performance-driven Meta advertising focused on leads, sales, conversions, and measurable results.', '◒'],
  ['06', 'Branding & Visual Identity', 'Building a strong and consistent brand identity that makes your business recognizable.', '⌘'],
  ['07', 'Lead Generation', 'Targeted campaigns and funnels designed to generate qualified leads and potential customers.', '⌁'],
  ['08', 'Marketing Analytics', 'Performance tracking, reporting, and continuous optimization to improve your marketing ROI.', '◌']
];

const campaigns = [
  { name: 'english 20/6', status: 'Off', objective: 'Engagement', conversations: 4200, displayConversations: '4.2K', cost: 6.83, spend: 28930, displaySpend: 'EGP 28.93K' },
  { name: 'saden', status: 'Active', objective: 'Sales', conversations: 280, displayConversations: '280', cost: 3.70, spend: 1040, displaySpend: 'EGP 1.04K' },
  { name: 'lolo sales new', status: 'Off', objective: 'Sales', conversations: 844, displayConversations: '844', cost: 5.01, spend: 4230, displaySpend: 'EGP 4.23K' },
  { name: '3 post', status: 'Active', objective: 'Sales', conversations: 634, displayConversations: '634', cost: 10.82, spend: 6860, displaySpend: 'EGP 6.86K', note: '2 days left' },
  { name: 'ragab store 2 - Copy', status: 'Off', objective: 'Engagement', conversations: 249, displayConversations: '249', cost: 6.19, spend: 1540, displaySpend: 'EGP 1.54K' },
  { name: 'iphone', status: 'Off', objective: 'Engagement', conversations: 325, displayConversations: '325', cost: 8.29, spend: 2690, displaySpend: 'EGP 2.69K' },
  { name: 'lana mist 2 - Copy', status: 'Off', objective: 'Sales', conversations: 239, displayConversations: '239', cost: 4.35, spend: 1040, displaySpend: 'EGP 1.04K' },
  { name: 'hayat', status: 'Off', objective: 'Sales', conversations: 196, displayConversations: '196', cost: 8.05, spend: 1580, displaySpend: 'EGP 1.58K' },
  { name: 'silver campaign', status: 'Off', objective: 'Sales', conversations: 356, displayConversations: '356', cost: 6.80, spend: 2420, displaySpend: 'EGP 2.42K' },
  { name: 'allithy barber - Copy', status: 'Off', objective: 'Engagement', conversations: 465, displayConversations: '465', cost: 7.45, spend: 3470, displaySpend: 'EGP 3.47K' },
  { name: 'abood', status: 'Off', objective: 'Sales', conversations: 153, displayConversations: '153', cost: 9.06, spend: 1390, displaySpend: 'EGP 1.39K' },
  { name: 'saden', status: 'Off', objective: 'Sales', conversations: 484, displayConversations: '484', cost: 6.64, spend: 3220, displaySpend: 'EGP 3.22K', note: 'second source card' }
];

const testimonials = [
  ['Mariam', '“Working with Yehya made our advertising feel much less random. We finally had a clear plan for what to test next.”'],
  ['Omar', '“The biggest difference was the communication. I always knew what was running, why it was running, and what we were learning.”'],
  ['Nada', '“Yehya understands that good creative and good numbers have to work together. That balance really helped our brand.”'],
  ['Karim', '“Our conversations became more focused and our marketing decisions became easier. The process feels very organized.”'],
  ['Salma', '“I appreciate the honesty. We look at what is actually happening, not just the numbers that sound good.”'],
  ['Ahmed', '“There is real attention to detail in every campaign. It feels like a partner is watching the account with us.”']
];

const fmt = new Intl.NumberFormat('en-US');
const totals = campaigns.reduce((acc, campaign) => ({ conversations: acc.conversations + campaign.conversations, spend: acc.spend + campaign.spend }), { conversations: 0, spend: 0 });
const weightedCost = totals.spend / totals.conversations;
const maxConversations = Math.max(...campaigns.map((campaign) => campaign.conversations));

const serviceGrid = document.querySelector('#service-grid');
serviceGrid.innerHTML = services.map(([number, title, description, icon]) => `
  <article class="service-card reveal">
    <div class="service-top"><span class="service-number">${number}</span><span class="service-icon" aria-hidden="true">${icon}</span></div>
    <h3>${title}</h3><p>${description}</p><span class="service-arrow" aria-hidden="true">↗</span>
  </article>`).join('');

const kpis = [
  ['Messaging conversations', totals.conversations, fmt.format(totals.conversations), 'verified aggregate'],
  ['Total spend shown', totals.spend, `EGP ${fmt.format(totals.spend)}`, 'derived from source cards'],
  ['Weighted average cost', weightedCost, `EGP ${weightedCost.toFixed(2)}`, 'per conversation started']
];
document.querySelector('#kpi-row').innerHTML = kpis.map(([label, value, display, note]) => `<div class="kpi-card reveal"><span class="card-kicker">${label}</span><strong data-counter="${value}">${display}</strong><small>${note}</small></div>`).join('');

document.querySelector('#bar-chart').innerHTML = campaigns.map((campaign, index) => `<div class="bar-row"><span class="bar-label">${campaign.name}${campaign.note ? ` <small>${campaign.note}</small>` : ''}</span><div class="bar-track"><span class="bar-fill" data-bar-width="${(campaign.conversations / maxConversations) * 100}" style="--bar-width: 0%"></span></div><strong>${campaign.displayConversations}</strong></div>`).join('');

document.querySelector('#campaign-grid').innerHTML = campaigns.map((campaign, index) => `<article class="campaign-card reveal" style="--campaign-delay: ${index * 25}ms"><div class="campaign-head"><div><h3>${campaign.name}</h3><span class="campaign-objective"><i class="${campaign.status === 'Active' ? 'is-active' : ''}"></i>${campaign.status} · ${campaign.objective}</span></div><span class="campaign-index">${String(index + 1).padStart(2, '0')}</span></div><div class="campaign-metrics"><div><strong>${campaign.displayConversations}</strong><span>Messaging conversations started</span></div><div><strong>EGP ${campaign.cost.toFixed(2)}</strong><span>Cost per messaging conversation started</span></div><div><strong>${campaign.displaySpend}</strong><span>Spent</span></div></div></article>`).join('');

document.querySelector('#testimonial-grid').innerHTML = testimonials.map(([name, quote], index) => `<article class="testimonial-card reveal" style="--testimonial-delay: ${index * 40}ms"><div class="quote-mark">“</div><p>${quote}</p><div class="testimonial-author"><span>${name[0]}</span><strong>${name}</strong><small>Client partner</small></div></article>`).join('');

document.querySelector('#current-year').textContent = new Date().getFullYear();
document.body.classList.add('motion-ready');

const header = document.querySelector('#site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}));
window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 18), { passive: true });

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animateCounter = (element) => {
  const target = Number(element.dataset.counter);
  if (reduceMotion) return;
  const duration = 1300;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = fmt.format(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const revealItems = document.querySelectorAll('.reveal');
const revealEntry = (entry, observer) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('is-visible');
  if (entry.target.matches('.kpi-card')) {
    const counter = entry.target.querySelector('[data-counter]');
    if (counter && !counter.dataset.played) { counter.dataset.played = 'true'; animateCounter(counter); }
  }
  observer?.unobserve(entry.target);
};
const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => entries.forEach((entry) => revealEntry(entry, observer)), { threshold: 0.12 }) : null;
if (revealObserver) revealItems.forEach((item) => revealObserver.observe(item));
else revealItems.forEach((item) => item.classList.add('is-visible'));
const barObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.setProperty('--bar-width', `${entry.target.dataset.barWidth}%`);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.25 });
document.querySelectorAll('.bar-fill').forEach((bar) => barObserver.observe(bar));
