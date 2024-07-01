import { CardData } from "../data/data";
let BtnQuickyView = document.querySelectorAll('.quickyViews') as NodeListOf<HTMLButtonElement>;
let QuickyView = document.getElementById(`QuickyView`) as HTMLDivElement;
let CloseViewModel = document.getElementById(`CloseViewModel`) as HTMLButtonElement;
let ModelDetails = document.querySelector(`.allModel`) as HTMLDivElement;
let overlayBG = document.querySelector("#overlayBG") as HTMLDivElement;

// import function 
import { addToCart } from "./Cart"




BtnQuickyView.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => {
        toggleQuickyView('open')

        let getId: any = btn?.parentElement?.parentElement?.getAttribute("data-id");

        if (getId) {
            ShowQuickyView(getId);

        } else {
            console.error("ID not found for the clicked button.");
        }

    })
})

export let toggleQuickyView = (action: 'open' | 'close') => {
    if (action === 'open') {
        QuickyView.style.removeProperty('display');
        CloseViewModel.setAttribute('aria-expanded', 'true');
        overlayBG.classList.add("active");
        setTimeout(() => {
            QuickyView.classList.add('open');
        }, 150);

    } else {
        QuickyView.classList.remove('open');
        CloseViewModel.setAttribute('aria-expanded', 'false');
        overlayBG.classList.remove("active");
        setTimeout(() => {
            QuickyView.style.display = 'none';
        }, 350);
    }
}



let ShowQuickyView = (id: string) => {


    ModelDetails.innerHTML = ``;
    let GetCardData = CardData.findIndex((value: any) => value.id === id);
    let data = CardData[GetCardData];

    let count = 1;
    let NewModel: any = document.createElement("div") as HTMLDivElement;
    NewModel.setAttribute("data-id", id);
    NewModel.classList.add("d-grid", "ShowModel")
    NewModel.innerHTML = `
    <div class="imgContainer">
    <div class="mainImg round-4">
        <img src=${data.img.src} data-image-component="true" alt="7" class="round-4" width="800" height="700"
            loading="lazy" decoding="async">
    </div> <!-- gallery -->
    <div class="gallery d-grid">
        ${data.gallery?.map((item: any, index: number) =>
        `
        <button class="btn subImg " type="button" aria-label="img-gallery">
            <img src=${item.img.src} class="${index === 0 ? 'active' : ''}" data-image-component="true" alt="7" width="800" height="700" loading="lazy"
                decoding="async">
        </button>
        `
    ).join('')}
        
    </div>
</div>
<!-- proDeteles -->
<div class="proDetails">
    <div class="detailPro"> <!-- title -->
        <h3 class="fs-24 fw-900 mb-5">  ${data.title} </h3> <!-- rate -->
        <div class="viewRate d-flex items-center mb-5">
            <div class="rate d-flex items-center justify-center py-2"> <svg width="24" height="24" viewBox="0 0 24 24"
                    data-icon="rate">
                    <symbol id="ai:local:rate">
                        <path fill="currentColor"
                            d="m5.825 21 2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4 2.325 7.6L12 16.3z"></path>
                    </symbol>
                    <use xlink:href="#ai:local:rate"></use>
                </svg> <svg width="24" height="24" viewBox="0 0 24 24" data-icon="rate">
                    <use xlink:href="#ai:local:rate"></use>
                </svg> <svg width="24" height="24" viewBox="0 0 24 24" data-icon="rate">
                    <use xlink:href="#ai:local:rate"></use>
                </svg> <svg width="24" height="24" viewBox="0 0 24 24" data-icon="rate">
                    <use xlink:href="#ai:local:rate"></use>
                </svg> <svg width="24" height="24" viewBox="0 0 24 24" data-icon="rate">
                    <use xlink:href="#ai:local:rate"></use>
                </svg> </div>
            <p class="rateCount fs-500">(${data.countRate} تقيمات)</p>
        </div> <!-- price -->
        ${data.badge ? `
            <p class="price fs-28 fw-700 pb-5 d-flex items-center" >
            <del class=" d-flex items-center fs-24">
              ${data.price}<small class="fs-18">ر.س</small>
            </del>
            ${data.newPrice}
            <small class="fs-16">ر.س</small>
          </p>
            `
            :
            `
             <p class="price fs-28 fw-900 pb-5" >
             ${data.price}
             <small class="fs-16">ر.س</small>
           </p>
            `
        } <!--  -->
        <hr data-astro-source-loc="67:18"> <!-- dl -->
        <dl class="py-8" data-astro-source-loc="69:34">
            <dt class="proInfo" data-astro-source-loc="70:39">قسم:</dt>
            <dd class="proValue" data-astro-source-loc="71:40">الالكترونيات</dd>
            <dt class="proInfo" data-astro-source-loc="72:39">اللون:</dt>
            <dd class="proValue" data-astro-source-loc="73:40">دهبي</dd>
            <dt class="proInfo" data-astro-source-loc="74:39">اسم العلامة التجارية:</dt>
            <dd class="proValue" data-astro-source-loc="75:40">Qonioi</dd>
            <dt class="proInfo" data-astro-source-loc="76:39">اسم الموديل :</dt>
            <dd class="proValue" data-astro-source-loc="77:40">lightning deals of today</dd>
            <dt class="proInfo" data-astro-source-loc="78:39">شكل السلعة :</dt>
            <dd class="proValue" data-astro-source-loc="79:40">round</dd>
        </dl>
    </div> <!-- * -->
    <hr data-astro-source-loc="83:16"> <!-- Quantity -->
    <div class="d-flex items-center gap-10 py-5" data-astro-source-loc="85:60"> <span class="fw-500"
            data-astro-source-loc="86:38">الكمية:</span>
        <div class="quanity"
            data-astro-source-file="D:/project/version/2/Astro/e-commerce/src/components/ui/Quanity.astro"
            data-astro-source-loc="4:24">
            <div class="d-flex items-center QuanityButtons"
                data-astro-source-file="D:/project/version/2/Astro/e-commerce/src/components/ui/Quanity.astro"
                data-astro-source-loc="5:53"> <!-- plus --> <button class="btn btn-quanity plus" type="button"
                    aria-label="plus"
                    data-astro-source-file="D:/project/version/2/Astro/e-commerce/src/components/ui/Button.astro"
                    data-astro-source-loc="22:2"> + </button> <!-- mins --> <button class="btn btn-quanity mins"
                    type="button" aria-label="mins"
                    data-astro-source-file="D:/project/version/2/Astro/e-commerce/src/components/ui/Button.astro"
                    data-astro-source-loc="22:2"> - </button> </div> <!-- input --> <input type="text"
                class=" text-center" value=${count}
                data-astro-source-file="D:/project/version/2/Astro/e-commerce/src/components/ui/Quanity.astro"
                data-astro-source-loc="12:6">
        </div>
    </div> <!-- button to add cart -->
    <div class="d-flex items-center justify-center mt-12" data-astro-source-loc="90:69"> <button
            class="btn addCart btn-run relative round-4  " type="button" aria-label="add to cart"
            data-astro-source-file="D:/project/version/2/Astro/e-commerce/src/components/ui/Button.astro"
            data-astro-source-loc="22:2"> <span class="relative px-14 py-6  d-inline-block fw-700"
                data-astro-source-loc="96:74"> اضف للسلة</span> </button> </div>
</div>
    `
    ModelDetails.appendChild(NewModel);


    NewModel.querySelector('.plus')?.addEventListener('click', () => {

        count++;
        NewModel.querySelector('input').value = count.toString();


    });
    NewModel.querySelector('.mins')?.addEventListener('click', () => {
        if (count > 1) {
            count--;
        }

        NewModel.querySelector('input').value = count.toString();
    });
    NewModel.querySelector('.addCart')?.addEventListener('click', () => {
        let getId: any = NewModel.getAttribute("data-id");
        addToCart(getId, count);
    });
    // toggle active img gallery
    let galleryButtons = NewModel.querySelectorAll('.gallery .subImg img') as NodeListOf<HTMLImageElement>;
    console.log(galleryButtons)
    galleryButtons.forEach((btn: HTMLImageElement) => {
        btn.addEventListener('click', () => {

            let mainImg = NewModel.querySelector('.mainImg img') as HTMLImageElement;
            
            
            document.querySelector(".active")?.classList.remove("active");
            btn.classList.add("active");
            mainImg.style.opacity= "0"
            setTimeout(()=>{
                mainImg.style.opacity= "1"
                mainImg.src = btn.src;
            },200)

        })
    })
}

CloseViewModel.addEventListener('click', () => {
    toggleQuickyView('close')
})





