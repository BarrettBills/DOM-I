const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const cta = document.querySelector('h1');
cta.textContent = siteContent['cta']['h1'];
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const contactSection = document.querySelector('.contact');
const contactHeading = contactSection.querySelector('h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];
const addressHeading = contactSection.querySelector('p:nth-of-type(1)');
addressHeading.textContent = siteContent['contact']['address'];
const phoneHeading = contactSection.querySelector('p:nth-of-type(2)');
phoneHeading.textContent = siteContent['contact']['phone'];
const emailHeading = contactSection.querySelector('p:nth-of-type(3)');
emailHeading.textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright'];
footer.classList.add('bold');

const logoIMG = document.querySelector('#logo-img');
logoIMG.src = siteContent['images']['logo-img'];
const ctaIMG = document.querySelector('#cta-img');
ctaIMG.src = siteContent['images']['cta-img'];
const accentIMG = document.querySelector('#middle-img');
accentIMG.src = siteContent['images']['accent-img'];

const topContent = document.querySelector('.top-content');
const h4Tops = topContent.querySelectorAll('h4');
h4Tops[0].textContent = siteContent['main-content']['features-h4'];
h4Tops[1].textContent = siteContent['main-content']['about-h4'];
const paraTops = topContent.querySelectorAll('p');
paraTops[0].textContent = siteContent['main-content']['features-content'];
paraTops[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelector('.bottom-content');
const h4Bottoms = bottomContent.querySelectorAll('h4');
h4Bottoms[0].textContent = siteContent['main-content']['services-h4'];
h4Bottoms[1].textContent = siteContent['main-content']['product-h4'];
h4Bottoms[2].textContent = siteContent['main-content']['vision-h4'];
const paraBottoms = bottomContent.querySelectorAll('p');
paraBottoms[0].textContent = siteContent['main-content']['services-content'];
paraBottoms[1].textContent = siteContent['main-content']['product-content'];
paraBottoms[2].textContent = siteContent['main-content']['vision-content'];

const links = document.querySelectorAll('nav a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

// const navLinks = document.querySelectorAll('header nav a')
// const navLinkTexts = Object.values(siteContent.nav);
// navLinkTexts.forEach((link, idx) => {
//   link.textContent = navLinkTexts[idx]
//   link.classList.add('italic')
// })

links.forEach(link => {
  link.classList.add('italic');
})