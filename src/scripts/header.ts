import { animationSlide } from "./global"
import {toggleQuickyView} from "./quickyView"
//
let Header = document.querySelector("header") as HTMLDivElement;
// toggle mobile nav
let openNavMenu = document.querySelector("#openMobileMenu") as HTMLButtonElement;
let closeNavMenu = document.querySelector("#closeMenu") as HTMLButtonElement;
let mobileMenu = document.querySelector("#Mobile") as HTMLUListElement;
let overlayBG = document.querySelector("#overlayBG") as HTMLDivElement;
//search
let navSearchForm = document.getElementById("navSearchForm") as HTMLFormElement;
let openMobileSearch = document.getElementById("openMobileSearch") as HTMLButtonElement;
let closeSearchMenu = document.getElementById("closeSearchMenu") as HTMLButtonElement;
//dropdown
// drop-1
let LangDrop = document.getElementById("LangDrop") as HTMLUListElement;
let dropItems = document.querySelectorAll("#LangDrop .dropItem") as NodeListOf<HTMLUListElement>
let dropBtn = document.querySelector(".dropBtn") as HTMLButtonElement;
let dropBtnSvg = document.querySelector(".dropBtn svg") as HTMLOrSVGImageElement;
//cart
let openCart = document.getElementById("openCart") as HTMLButtonElement;
let closeCart = document.getElementById("closeCart") as HTMLButtonElement;
let CartShop = document.getElementById("CartShop") as HTMLDivElement;





// toggle responsive header
let toggleMobileMenu = (action: 'close' | 'open') => {
    if (action === 'open') {
        openNavMenu.setAttribute("aria-expanded", 'true')
        closeNavMenu.setAttribute("aria-expanded", 'true')
        mobileMenu.classList.remove("NormalNavMenu");
        mobileMenu.classList.add("ResponsiveMobileMenu");
        overlayBG.classList.add("active");
        mobileMenu.style.removeProperty('display')


        setTimeout(() => {
            mobileMenu.classList.add("open");
            LinkEffect('open')
        }, 10)
    } else {

        mobileMenu.classList.remove("open");
        // overlayBG.classList.remove("active");
        checkOverlayStatus();
        openNavMenu.setAttribute("aria-expanded", 'false')
        closeNavMenu.setAttribute("aria-expanded", 'false')
        LinkEffect('close')
        setTimeout(() => {
            mobileMenu.classList.remove("ResponsiveMobileMenu");
            mobileMenu.classList.add("NormalNavMenu");

        }, 400)
        setTimeout(() => {

            if (mobileMenu.classList.contains("NormalNavMenu")) {
                mobileMenu.style.removeProperty('display')

            } else {
                mobileMenu.style.display = "none";

            }

        }, 500)
    }
}
let LinkEffect = (action: 'close' | 'open') => {
    let menuItems = document.querySelectorAll<HTMLAnchorElement>('#Mobile .navLink')
    var delay = 0;
    menuItems.forEach((item: HTMLAnchorElement, index: number) => {

        if (action === 'open') {
            setTimeout(() => {
                item.classList.add("show")
            }, index * 50 + delay)
            delay += 100;
        } else {
            item.classList.remove("show")
            delay = 0
        }
    })
}
//toggle responsive search
let toggleMobileSearch = (action: 'close' | 'open') => {
    if (action === 'open') {
        closeSearchMenu.style.removeProperty("display")
        openMobileSearch.style.display = "none"
        openMobileSearch.classList.remove("showIcon")
        navSearchForm.classList.remove("normalSearch");
        navSearchForm.classList.add("mobileSearch");
        openMobileSearch.setAttribute("aria-expanded", 'true')
        closeSearchMenu.setAttribute("aria-expanded", 'true')
        if (navSearchForm.classList.contains('mobileSearch')) {
            navSearchForm.style.top = `${Header.offsetHeight}px`
        }
        setTimeout(() => {
            openMobileSearch.classList.add("hideIcon")
            closeSearchMenu.classList.add("showIcon")
            navSearchForm.classList.add("open");
        }, 5)



    } else {
        openMobileSearch.style.removeProperty("display");
        closeSearchMenu.style.display = "none";
        closeSearchMenu.classList.remove("showIcon");
        navSearchForm.classList.remove("open");
        openMobileSearch.setAttribute("aria-expanded", 'false')
        closeSearchMenu.setAttribute("aria-expanded", 'false')
        setTimeout(() => {
            closeSearchMenu.classList.add("hideIcon");
            openMobileSearch.classList.add("showIcon")

            // 
        }, 5)
        setTimeout(() => {

            navSearchForm.classList.remove("mobileSearch");
            navSearchForm.classList.add("normalSearch");
            if (navSearchForm.classList.contains('normalSearch')) {
                navSearchForm.style.removeProperty('top')
            }

        }, 300)

    }
}
//dropdownMenu
let openDropDownMenu = (selectDropDown: HTMLUListElement, totalHeight: NodeListOf<HTMLUListElement>, svg: HTMLOrSVGImageElement) => {
    selectDropDown.style.removeProperty("display");
    let time: any = selectDropDown.getAttribute('data-effect')
    selectDropDown.style.transitionDuration = `${time}ms`;
    selectDropDown.classList.add("open")
    svg.classList.add("open")
    animationSlide("down", totalHeight, selectDropDown);
    setTimeout(() => {
        selectDropDown.style.overflow = "visible"
    }, parseInt(time));
}
let closeDropDownMenu = (selectDropDown: HTMLUListElement, totalHeight: NodeListOf<HTMLUListElement>, svg: HTMLOrSVGImageElement) => {
    let time: any = selectDropDown.getAttribute('data-effect')
    selectDropDown.classList.remove("open")
    svg.classList.remove("open")

    animationSlide("up", totalHeight, selectDropDown)
    selectDropDown.style.removeProperty("transition-duration");
    selectDropDown.style.removeProperty("overflow");
    setTimeout(() => {
        selectDropDown.style.display = "none";
    }, 100 + parseInt(time))
}
let toggleDropDownMenu = (selectDropDown: HTMLUListElement, totalHeight: NodeListOf<HTMLUListElement>, svg: HTMLOrSVGImageElement) => {
    if (selectDropDown.classList.contains("open")) {
        closeDropDownMenu(selectDropDown, totalHeight, svg)
    } else {
        openDropDownMenu(selectDropDown, totalHeight, svg)
    }
}
// cart
let toggleCart = (action: 'open' | 'close') => {
    if (action === 'open') {
        CartShop.style.removeProperty('display')
        setTimeout(() => {
            openCart.setAttribute("aria-expanded", 'true')
        closeCart.setAttribute("aria-expanded", 'true')
        CartShop.classList.add("open");
        overlayBG.classList.add("active");
        } , 100)
        
        

    } else{
        openCart.setAttribute("aria-expanded", 'false')
        closeCart.setAttribute("aria-expanded", 'false')
        CartShop.classList.remove("open");
        checkOverlayStatus();
        setTimeout(() => {
            CartShop.style.display = "none"
        } , 280)
        
    }
}
//checkOverlayStatus
const checkOverlayStatus = () => {
    if (!CartShop.classList.contains("open") && !mobileMenu.classList.contains("open")) {
        overlayBG.classList.remove("active");
    }
};
//addEventListener
openNavMenu !== null ? openNavMenu.addEventListener("click", () => toggleMobileMenu('open')) : '';
closeNavMenu !== null ? closeNavMenu.addEventListener("click", () => toggleMobileMenu('close')) : '';
openMobileSearch !== null ? openMobileSearch.addEventListener("click", () => toggleMobileSearch('open')) : '';
closeSearchMenu !== null ? closeSearchMenu.addEventListener("click", () => toggleMobileSearch('close')) : '';
dropBtn !== null ? dropBtn.addEventListener("click", () => toggleDropDownMenu(LangDrop, dropItems, dropBtnSvg)) : '';
openCart !== null ? openCart.addEventListener("click", () => toggleCart('open')) : '';
closeCart !== null ? closeCart.addEventListener("click", () => toggleCart('close')) : '';
window.addEventListener("click", (e:Event | any) =>{
    
   
    if (!navSearchForm.contains(e.target) && !openMobileSearch.contains(e.target)) {
        toggleMobileSearch(`close`);
    }
    if (!LangDrop.contains(e.target) && !dropBtn.contains(e.target)) {
        closeDropDownMenu(LangDrop, dropItems, dropBtnSvg);
    }
 
    if(overlayBG.contains(e.target)) {
        toggleCart(`close`);
        toggleMobileMenu(`close`);
        toggleQuickyView('close')
    }

})
// 
