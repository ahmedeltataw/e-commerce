import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, a as renderComponent, e as createAstro, F as Fragment } from './astro/server-DrLcVlYe.js';
import 'kleur/colors';
import { H as HeroData, c as $$Image, d as $$Button, S as ServiceData, e as $$Icon, C as CardData, f as $$Card, g as $$MainHeadingBorder, D as DailyOffers, B as BrandData, h as BlogData, $ as $$Category, a as $$NewPro, b as $$Layout } from './NewPro-NBGl4VEH.js';
/* empty css                        */
import '@astrojs/internal-helpers/path';
import './astro/assets-service-H6psT1Eg.js';

const $$Astro$1 = createAstro();
const $$MySwiper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MySwiper;
  const { pagination, navigation, name } = Astro2.props;
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div${addAttribute(`swiper ${name}`, "class")}> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <!-- Slides --> ${renderSlot($$result, $$slots["default"])} </div> <!-- If we need pagination --> ${pagination && renderTemplate`<div class="swiper-pagination"></div>`} <!-- If we need navigation buttons --> ${navigation && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> ` })}`} </div>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/ui/MySwiper.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-1"> <div class="container-full"> ${renderComponent($$result, "MySwiper", $$MySwiper, { "pagination": false, "navigation": true, "name": "heroSwiper" }, { "default": ($$result2) => renderTemplate`${HeroData.map((item, index) => renderTemplate`<div class="swiper-slide relative"> ${renderComponent($$result2, "Image", $$Image, { "src": item.img, "alt": item.title, "quality": 70, "format": "webp", "class": `img-cover`, "loading": index === 0 ? "eager" : "lazy", "decoding": "async" })} <div class="swiper-box"> <p class="heroTitle fs-r-30 fw-700 pb-5">${item.title}</p> <h1 class="heroOffer py-2 px-6 round-6 fs-r-30 mb-6"> ${item.offer} </h1> <p class="heroDes fs-24 fw-700 mb-8">${item.des}</p> ${renderComponent($$result2, "Button", $$Button, { "type": "button", "aria": "shop now", "ClassName": "btn-run round-6 relative" }, { "default": ($$result3) => renderTemplate` <a href="#" class="py-5 px-12 fs-18 fw-700 relative">
تسوق الان
</a> ` })} </div> </div>`)}` })} </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/hero/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="service section-1"> <div class="container-full"> <div class="d-grid service-box"> ${ServiceData.map((item) => renderTemplate`<div class="box d-flex items-center round-6 relative"> <div class="icon-ser mb-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon })} </div> <div class="box-ser"> <p class="title fw-700 fs-18 pb-2">${item.title}</p> <p class="des fw-500">${item.des}</p> </div> <a${addAttribute(item.path, "href")}${addAttribute(item.title, "title")} class="absolute top-0 left-0"></a> </div>`)} </div> </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/Home/Services.astro", void 0);

const $$ViewModel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="Model quickyView" id="QuickyView" style="display:none"> <div class="ModelDetails relative"> ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": "CloseViewModel", "ariaEx": `false`, "controll": `quickyView`, "ClassName": "closeQuickyView", "id": "CloseViewModel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": `close`, "size": 20 })} ` })} <!--All  img --> <div class="allModel"></div> </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/ui/ViewModel.astro", void 0);

const $$ProCate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="proCate mt-12" data-cate="Electronics"> <div class="container-full"> <div class="row items-start gap-row-1"> <!-- offers --> <div class="col-4-lg col-4-md col-12-sm"> ${renderComponent($$result, "MainHeadingBorder", $$MainHeadingBorder, { "title": "\u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u064A\u0648\u0645\u064A\u0629", "filter": false })} <aside class="dailyOffers"> ${renderComponent($$result, "MySwiper", $$MySwiper, { "pagination": true, "navigation": false, "name": "daliysOffersSwiper" }, { "default": ($$result2) => renderTemplate`${DailyOffers.map((item) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result2, "Card", $$Card, { "id": item.id, "title": item.title, "img": item.img, "price": item.price, "sale": item.sale, "badge": item.badge, "badgeNum": item.badgeNum, "newPrice": item.newPrice })} </div>`)}` })} </aside> </div> <!-- product --> <div class="col-8-lg col-8-md col-12-sm CardColParent"> ${renderComponent($$result, "MainHeadingBorder", $$MainHeadingBorder, { "title": "\u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A", "filter": true })} <div class="d-grid proCard"> ${CardData.filter(
    (item) => item.cate === "\u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A"
  ).map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "id": item.id, "title": item.title, "img": item.img, "price": item.price, "sale": item.sale, "badge": item.badge, "badgeNum": item.badgeNum, "newPrice": item.newPrice, "filter": item.typePro })}`)} </div> </div> </div> </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/Home/ProCate.astro", void 0);

const $$Astro = createAstro();
const $$SectionBreak = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionBreak;
  const { img, alt, href, titleImg, flex } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="container-full"> <div class="break d-flex items-center gap-4"> ${flex ? renderTemplate`<div class="break d-flex items-center gap-4 MobileBreak"> <a class="imgBreak MobileBreak" href="#!" title="شاشة lg"> ${renderComponent($$result, "Image", $$Image, { "src": img.img4, "alt": alt, "class": `img-cover`, "format": "webp", "quality": 100 })} </a> <a class="imgBreak MobileBreak" href="#!" title="مصباح كهربائي"> ${renderComponent($$result, "Image", $$Image, { "src": img.img5, "alt": alt, "class": `img-cover`, "format": "webp", "quality": 100 })} </a> </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a class="imgBreak"${addAttribute(href, "href")}${addAttribute(titleImg, "title")}> ${renderComponent($$result2, "Image", $$Image, { "src": img.img1, "alt": alt, "class": `img-cover`, "format": "webp", "quality": 100 })} </a> <a class="imgBreak MobileBreak"${addAttribute(href, "href")}${addAttribute(titleImg, "title")}> ${renderComponent($$result2, "Image", $$Image, { "src": img.img2, "alt": alt, "class": `img-cover`, "format": "webp", "quality": 100 })} </a> <a class="imgBreak MobileBreak"${addAttribute(href, "href")}${addAttribute(titleImg, "title")}> ${renderComponent($$result2, "Image", $$Image, { "src": img.img3, "alt": alt, "class": `img-cover`, "format": "webp", "quality": 100 })} </a> ` })}`} </div> </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/ui/SectionBreak.astro", void 0);

const $$ProCateNoOffer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-cate="Accessories"> <div class="container-full"> ${renderComponent($$result, "MainHeadingBorder", $$MainHeadingBorder, { "title": " \u0627\u0644\u0627\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A ", "filter": true })} <div class="d-grid proCard"> ${CardData.filter(
    (item) => item.cate === "\u0627\u0644\u0627\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A"
  ).slice(0, 5).map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "id": item.id, "title": item.title, "img": item.img, "price": item.price, "sale": item.sale, "badge": item.badge, "badgeNum": item.badgeNum, "newPrice": item.newPrice, "filter": item.typePro })}`)} </div> </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/Home/ProCateNoOffer.astro", void 0);

const $$Brand = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="brand"> <div class="container-full"> ${renderComponent($$result, "MySwiper", $$MySwiper, { "pagination": false, "navigation": true, "name": "BrandSwiper" }, { "default": ($$result2) => renderTemplate`${BrandData.map((item) => renderTemplate`<div class="swiper-slide"> <a${addAttribute(item.path, "href")}${addAttribute(item.title, "title")}> ${renderComponent($$result2, "Image", $$Image, { "src": item.img, "alt": item.title, "quality": 70, "format": "webp" })} </a> </div>`)}` })} </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/Home/Brand.astro", void 0);

const $$BlogSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="Blog"> <div class="container-full"> ${renderComponent($$result, "MainHeadingBorder", $$MainHeadingBorder, { "title": "\u0627\u062D\u062F\u062B \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A", "filter": false })} <div class="d-grid BlogContainer"> ${BlogData.map((blog) => renderTemplate`<article class="BlogBox"> <figure class="relative round-6"> ${renderComponent($$result, "Image", $$Image, { "src": blog.img, "alt": blog.title, "quality": 70, "format": "webp", "class": `round-6` })} <a${addAttribute(blog.path, "href")}${addAttribute(blog.title, "title")} class="absolute top-0 left-0"></a> </figure> <div class="blogMeta d-flex items-center justify-between px-3  py-4 "> <p class="author d-flex items-center fs-14 gap-2 fw-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": `user` })} ${blog.name} </p> <p class="dateBlog d-flex items-center fs-14 gap-2 fw-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": `Time` })} <span>${blog.date}</span> </p> </div> <h3 class="px-5 fs-18 fw-700 "> <a href="">${blog.title}</a> </h3> </article>`)} </div> </div> </section>`;
}, "D:/project/version/2/Astro/e-commerce/src/components/Home/BlogSection.astro", void 0);

const Img1 = new Proxy({"src":"/assets/images/banner-1-BLrrA72a.jpg","width":486,"height":220,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-1.jpg");
							return target[name];
						}
					});

const Img2 = new Proxy({"src":"/assets/images/banner-2-Dvd6VEMV.jpg","width":486,"height":220,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-2.jpg");
							return target[name];
						}
					});

const Img3 = new Proxy({"src":"/assets/images/banner-6-CgSK0bhX.jpg","width":486,"height":220,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-6.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-6.jpg");
							return target[name];
						}
					});

const Img4 = new Proxy({"src":"/assets/images/banner-sm-1-nBpHis45.jpg","width":300,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-sm-1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-sm-1.jpg");
							return target[name];
						}
					});

const Img8 = new Proxy({"src":"/assets/images/banner-4-CX7mV_rL.jpg","width":740,"height":220,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-4.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-4.jpg");
							return target[name];
						}
					});

const Img7 = new Proxy({"src":"/assets/images/banner-5-r2vnAvZs.jpg","width":740,"height":220,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-5.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro/e-commerce/src/assets/images/banner/break/banner-5.jpg");
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ryn E-commerce | \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629", "des": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Category", $$Category, {})} ${renderComponent($$result2, "NewPro", $$NewPro, {})} ${renderComponent($$result2, "ViewModel", $$ViewModel, {})} ${renderComponent($$result2, "SectionBreak", $$SectionBreak, { "img": { img1: Img1, img2: Img2, img3: Img3 }, "alt": "break", "href": "#!", "titleImg": "\u0627\u0634\u062A\u0631\u064A \u0627\u0644\u0627\u0646", "flex": false })} ${renderComponent($$result2, "ProCate", $$ProCate, {})} ${renderComponent($$result2, "SectionBreak", $$SectionBreak, { "img": { img1: Img4, img2: Img8, img3: Img7, img4: Img7, img5: Img8 }, "alt": "break", "href": "#!", "titleImg": "\u0627\u0634\u062A\u0631\u064A \u0627\u0644\u0627\u0646", "flex": true })} ${renderComponent($$result2, "ProCateNoOffre", $$ProCateNoOffer, {})} ${renderComponent($$result2, "Brand", $$Brand, {})} ${renderComponent($$result2, "BlogSection", $$BlogSection, {})} ` })} `;
}, "D:/project/version/2/Astro/e-commerce/src/pages/index.astro", void 0);

const $$file = "D:/project/version/2/Astro/e-commerce/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
