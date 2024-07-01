import Swiper from 'swiper/bundle';
new Swiper(".heroSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Swiper(".daliysOffersSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
new Swiper(".BrandSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
   
  },
  breakpoints: {
    580:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  },
});
// make filter Product
// ====buttons=======
let btnFilterNoCate = document.querySelectorAll(".newPro .filter li") as NodeListOf<HTMLLIElement>
let btnFilterCate_Electronics = document.querySelectorAll("[data-cate='Electronics'] .filter li") as NodeListOf<HTMLLIElement>
let btnFilterCate_Accessories = document.querySelectorAll("[data-cate='Accessories'] .filter li") as NodeListOf<HTMLLIElement>
// console.log(btnFilterCate_Electronics)
//====products=======
let AllProducts = document.querySelectorAll(".newPro .card") as NodeListOf<HTMLDivElement>
let AllProductsInCateSection_Electronics = document.querySelectorAll("[data-cate='Electronics'] .proCard .card") as NodeListOf<HTMLDivElement>
let AllProductsInCateSection_Accessories = document.querySelectorAll("[data-cate='Accessories'] .proCard .card") as NodeListOf<HTMLDivElement>
// convert products to arrays of products
let ProductArray = Array.from(AllProducts)
let ProductsArray_Electronics = Array.from(AllProductsInCateSection_Electronics)
let ProductsArray_Accessories = Array.from(AllProductsInCateSection_Accessories)
// console.log(ProductsArray_Electronics)


let FilterFunction =(SelectProductArraySection:any[] , Buttons:NodeListOf<HTMLLIElement> , container:HTMLDivElement | any)=>{
  Buttons.forEach((btn: HTMLLIElement) => {
    
    btn.addEventListener("click", () =>{
      let d = btn.getAttribute("data-filter")
      
      
      let filter ;
      if (d === "All") {
        filter = [...SelectProductArraySection]; // Select all items if filter is 'all'
        
      } else {
        filter = [...SelectProductArraySection].filter((item) => item.dataset.filter === d);
       
      }
      let containerProducts = document.querySelectorAll(`${container} .proCard .card`) as NodeListOf<HTMLDivElement>;
      let PositionMassage = document.querySelector(`${container} .proCard`) as HTMLDivElement;
      let NoProduct = document.createElement("div");
      NoProduct.className = 'noProduct';
      NoProduct.innerHTML= `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g fill="#F44336"><path d="M8.25 16a.751.751 0 0 1-.656-.386L6.5 13.645v1.605a.75.75 0 0 1-1.5 0v-4.5a.751.751 0 0 1 1.406-.365l1.094 1.97V10.75a.75.75 0 0 1 1.5 0v4.5a.751.751 0 0 1-.562.727zM12.25 16h-.5c-.965 0-1.75-.785-1.75-1.75v-2.5c0-.965.785-1.75 1.75-1.75h.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75zm-.5-4.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM17 16a.75.75 0 0 1-.75-.75v-4.5c0-.414 1.5-.414 1.5 0v4.5A.75.75 0 0 1 17 16z" fill="#F44336" opacity="1" data-original="#f44336"></path><path d="M18.25 11.5h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5zM22.25 24h-1.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75h1.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75zm-.75-1.5h.75a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-.75zM.75 24a.75.75 0 0 1-.75-.75v-3.5C0 18.785.785 18 1.75 18h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-.75.75z" fill="#F44336" opacity="1" data-original="#f44336"></path><path d="M3.25 22H.75c-.414 0-.414-1.5 0-1.5h2.5a.75.75 0 0 1 0 1.5zM18.25 24a.751.751 0 0 1-.656-.386l-1.094-1.97v1.605a.75.75 0 0 1-1.5.001v-4.5a.751.751 0 0 1 1.406-.365l1.094 1.97V18.75a.75.75 0 0 1 1.5 0v4.5a.751.751 0 0 1-.562.727zM7.25 24h-.5C5.785 24 5 23.215 5 22.25v-2.5c0-.965.785-1.75 1.75-1.75h.5c.965 0 1.75.785 1.75 1.75v2.5C9 23.215 8.215 24 7.25 24zm-.5-4.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM12.25 24h-.5c-.965 0-1.75-.785-1.75-1.75v-3.5a.75.75 0 0 1 1.5 0v3.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5c0 .965-.785 1.75-1.75 1.75z" fill="#F44336" opacity="1" data-original="#f44336"></path></g><path fill="#607D8B" d="M24 3v13.45a3.67 3.67 0 0 0-1.75-.45H22V5H2v11h-.25c-.64 0-1.23.17-1.75.45V3c0-1.65 1.35-3 3-3h18c1.65 0 3 1.35 3 3z" opacity="1" data-original="#607d8b"></path><path fill="#FFFFFF" d="M22 5v11h-1.25c-.44 0-.84.11-1.21.29.13-.32.21-.67.21-1.04v-2.83c.47-.42.75-1.01.75-1.67 0-1.24-1.01-2.25-2.25-2.25h-.56c-.22-.04-.44-.06-.69-.06s-.47.02-.68.06h-.57c-.42 0-.82.13-1.17.34A3.67 3.67 0 0 0 12.25 8h-.5c-.69 0-1.33.2-1.89.53A2.724 2.724 0 0 0 7 8.3c-.41-.21-.88-.33-1.35-.3l-1.15.3C3.59 8.76 3 9.7 3 10.75v4.5c0 .26.05.51.12.75H2V5z" opacity="1" data-original="#ffffff"></path><path fill="#D43A2F" d="M8.25 10a.75.75 0 0 0-.75.75v1.605l-1.094-1.97a.756.756 0 0 0-.844-.362.751.751 0 0 0-.562.727v4.5a.75.75 0 0 0 1.5 0v-1.605l1.094 1.97A.752.752 0 0 0 8.25 16l.188-.023A.751.751 0 0 0 9 15.25v-4.5a.75.75 0 0 0-.75-.75zM12 10h-.25c-.965 0-1.75.785-1.75 1.75v2.5c0 .965.785 1.75 1.75 1.75H12v-1.5h-.25a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25H12zM3.25 18h-1.5C.785 18 0 18.785 0 19.75v3.5a.75.75 0 0 0 1.5 0V22H.75c-.414 0-.414-1.5 0-1.5h.75v-.75a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5z" opacity="1" data-original="#d43a2f"></path><path fill="#D43A2F" d="M3.25 20.5H.75c-.414 0-.414 1.5 0 1.5h2.5a.75.75 0 0 0 0-1.5zM6.75 22.5a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25zm.5-4.5h-.5C5.785 18 5 18.785 5 19.75v2.5c0 .965.785 1.75 1.75 1.75h.5C8.215 24 9 23.215 9 22.25v-2.5C9 18.785 8.215 18 7.25 18zM10.75 18a.75.75 0 0 0-.75.75v3.5c0 .965.785 1.75 1.75 1.75H12v-1.5h-.25a.25.25 0 0 1-.25-.25v-3.5a.75.75 0 0 0-.75-.75z" opacity="1" data-original="#d43a2f"></path><path fill="#546D79" d="M12 0H3C1.35 0 0 1.35 0 3v13.45A3.67 3.67 0 0 1 1.75 16H2V5h10z" opacity="1" data-original="#546d79"></path><path fill="#DEDEDE" d="M12 5H2v11h1.12c-.07-.24-.12-.49-.12-.75v-4.5c0-1.05.59-1.99 1.5-2.45L5.65 8a2.34 2.34 0 0 1 .145-.005c.421 0 .837.116 1.205.305a2.724 2.724 0 0 1 2.86.23c.56-.33 1.2-.53 1.89-.53H12z" opacity="1" data-original="#dedede"></path></g></svg>
      <p> لا يوجد منتجات متاحه الان </p>
      `
      
      // p.textContent = "No products found";
      if(filter.length === 0){
        console.log("no");
       
        if(!PositionMassage.querySelector('.noProduct')){
          PositionMassage.appendChild(NoProduct);
        }
        
        
      } else{
        let RemoveMassage = PositionMassage.querySelector('.noProduct');
        if(RemoveMassage){
          RemoveMassage.remove()
        }
      }
      containerProducts.forEach((item: HTMLDivElement) => {
        item.style.display = "none";
        item.classList.add("hideFilter");
        item.classList.remove("showFilter");
       
      });
      filter.forEach((item: HTMLDivElement) => {
        item.style.display = "block";
        setTimeout(() => {
          item.classList.add("showFilter");
          item.classList.remove("hideFilter");
        }, 200)
  
      });
      
    
      
      document.querySelector(`${container} .active`)?.classList.remove("active")
      btn.classList.add("active");
  
    })
  
  })
}


FilterFunction(ProductArray , btnFilterNoCate , '.newPro' )
FilterFunction(ProductsArray_Electronics , btnFilterCate_Electronics , "[data-cate='Electronics']" )
FilterFunction(ProductsArray_Accessories , btnFilterCate_Accessories , "[data-cate='Accessories']" )


// convert  date blog 
let GetDate = document.querySelectorAll(".blogMeta .dateBlog span") as NodeListOf<HTMLSpanElement>;
let ConvertDate = (dateEl:HTMLSpanElement | any)=>{
   const options:any = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    let dateFormat = new Date(dateEl.textContent || '').toLocaleDateString(undefined,options)
    return dateFormat
}
GetDate.forEach((date:HTMLSpanElement)=>{
  date.textContent = ConvertDate(date)
 
})