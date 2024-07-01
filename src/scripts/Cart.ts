import { CardData } from "../data/data";
let addCart = document.querySelectorAll(".addCart") as NodeListOf<HTMLButtonElement>
let CartShop = document.querySelector(".AllCarts") as HTMLDivElement
let cartCount = document.querySelector('#openCart span') as HTMLSpanElement;
let massageEmpty = document.querySelector(".massageEmpty") as HTMLDivElement
let SuccessMessage = document.querySelector(".SuccessMessage") as HTMLParagraphElement
let ErrorMessage = document.querySelector(".ErrorMessage") as HTMLParagraphElement

let cart: any[] = []


let showMessage = (el: HTMLParagraphElement) => {
  el.style.removeProperty('display');
  setTimeout(() => {
    el.classList.add("open")
  }, 200);
  setTimeout(() => {
    el.classList.remove("open")
  }, 2000);
  setTimeout(() => {
    el.style.display = "none";
  }, 2400);
}


export let addToCart = (id: string , quantity: number = 1) => {
  let CartPotions = cart.find((item: any) => item.id === id);

  if (!CartPotions) {
    cart.push({
      id: id,
      count: quantity
    });
  } else {
    CartPotions.count += quantity;
  }

  addCartHtml();
  MemoryCart();
  showMessage(SuccessMessage);
}
let RemoveCart = (id: string) => {
  let GetCart = cart.filter((value: any) => value.id !== id)
  addCartHtml();
  localStorage.setItem('cart', JSON.stringify(GetCart));
  GetMemoryData();
  showMessage(ErrorMessage);
  if (cart.length === 0) {
    cartCount.innerText = `0`
  }

}
let Quantiy = (id: string, type: string) => {
  let CartPotions = cart.findIndex((item: any) => item.id === id);

  if (CartPotions >= 0) {
    if (type === 'plus') {
      cart[CartPotions].count += 1;
    }
    if (type === 'mins') {
      cart[CartPotions].count -= 1;

    }
    if (cart[CartPotions].count === 0) {
      cart.splice(CartPotions, 1);
      showMessage(ErrorMessage)
      if (cart.length === 0) {
        cartCount.innerText = `0`
      }
    }


  }



  addCartHtml();
  MemoryCart();

}
CartShop.addEventListener('click', (e: Event) => {
  let targetBtn: any = e.target
 
  if (targetBtn?.classList.contains('plus') || targetBtn?.classList.contains('mins')) {
    let correctCartId = targetBtn.parentElement.parentElement.parentElement.dataset.id
    let type = 'mins';
    if (targetBtn?.classList.contains('plus')) {
      type = 'plus';
    }
    Quantiy(correctCartId, type);
  }
})
let addCartHtml = () => {

  if (cart.length === 0) {
    massageEmpty.classList.add("open")
  } else {
    massageEmpty.classList.remove("open")
  }

  CartShop.innerHTML = "";
  let totalCount = 0;
  cart.forEach((item: any) => {

    totalCount = totalCount + item.count;


    let newItem: any = document.createElement("div") as HTMLDivElement;
    newItem.classList.add('cartBox', "d-grid", 'items-center', 'text-center', 'relative', 'py-3', 'px-2', 'round-8', 'mb-3');
    newItem.setAttribute('data-id', item.id);
    newItem.dataset.id == item.id;
    let allDataPro = CardData.findIndex((value: any) => value.id === item.id);

    let data = CardData[allDataPro];

    newItem.innerHTML = `
       <div class="cartmg round-6" > <img src="${data.img.src}" data-image-component="true" alt="s" class="round-6" width="800" height="700" loading="lazy" decoding="async" > </div>
       <h3 class="fw-700" >   ${data.title}   </h3>
       <div class="quanity d-flex items-center mx-auto" "><div class="d-flex items-center QuanityButtons"><button class="btn btn-quanity  plus" type="button" aria-label="plus"> + </button> <button class="btn btn-quanity  mins" type="button" aria-label="mins" > - </button> </div> <input type="text" class=" text-center" value="${item.count}">   </div>
       <p class="price fw-700 fs-24"  >${data.newPrice ? `${data.newPrice * item.count} ` : `${data.price * item.count}`}<small class="fs-12 fw-700" >ر.س</small></p>
       <button class="btn delete absolute top-0 left-0" type="button" aria-label="delete product"  >  <svg width="1em" height="1em" viewBox="0 0 20 20" class=" ml-3" data-icon="delete">  <symbol id="ai:local:delete" ><path fill="none" d="M0 0h20v20H0z"></path><path fill="currentColor" d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path></symbol><use xlink:href="#ai:local:delete"></use>  </svg>  </button>
       <p>
       `
    newItem.querySelector('.delete')?.addEventListener('click', () => {
      RemoveCart(item.id);
    });




    CartShop.appendChild(newItem);


    cartCount.innerText = `${totalCount}`

  })

}
let MemoryCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart))
}
let GetMemoryData = () => {
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart') as string);

    addCartHtml()
  }
}



addCart.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener('click', () => {
    
   
    let getId: any = btn?.parentElement?.parentElement;
    let CardID = getId.getAttribute("data-id");
      
      addToCart(CardID , 1)

  })
  GetMemoryData()
})