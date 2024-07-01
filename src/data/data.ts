import type { LinkType, DropDataType, HeroDataType, ServiceType, CategoryType, CardType , BlogType } from "../types/types";
export const NavData: LinkType[] = [


    {
        title: "الصفحة الرئيسية",
        path: '/'
    },
    {
        title: "الاقسام",
        path: '/'
    },
    {
        title: "من نحن",
        path: '/'
    },
    {
        title: "تواصل معانا",
        path: '/'
    },
    {
        title: "المقالات",
        path: '/'
    },

];
///dropLangue/////////////////////////////////////////////////////////
export const LangDropData: DropDataType[] = [
    {
        title: 'اللغة العربية',
        path: '/',
        icon: 'arrow-left'
    },
    {
        title: ' اللغة الانجليزية',
        path: '/',
        icon: 'arrow-left'
    },
]
///hero////////////////////////////////////////////////////////////////
import book from "@assets/images/banner/banner-1.png";
import house from "@assets/images/banner/banner-2.png";
import fashion from "@assets/images/banner/banner-3.png";
export const HeroData: HeroDataType[] = [
    {
        title: 'متجر الادوات المنزلية',
        offer: ' خصومات تصل لي 70%',
        des: 'مكان واحد لاحتياجات منزلك',
        img: house
    },
    {
        title: 'متجر الكتب',
        offer: ' خصم  حتي 70%',
        des: 'احدث الكتب والروايات',
        img: book
    },
    {
        title: 'متجر  مستحضرات التجميل',
        offer: ' خصومات تصل لي 70%',
        des: 'احدث صيحات الموضة',
        img: fashion
    },
]
///services/////////////////////////////////////////////////////////////
export const ServiceData: ServiceType[] = [
    {
        title: ' توصيل مجاني',
        des: ' للطلبات التي تزيد عن  100$',
        path: '/',
        icon: 'delivery'
    },
    {
        title: 'دعم فني للشكاوي',
        des: ' 24 ساعة',
        path: '/',
        icon: 'Support'
    },
    {
        title: ' سياسة استرجاع واضحة',
        des: ' إرجاع سهل ومجاني ',
        path: '/',
        icon: 'return'
    },
    {
        title: ' جودة المنتج',
        des: ' ضمان 100%  ',
        path: '/',
        icon: 'quality'
    },
    {
        title: 'استرداد الأموال ',
        des: ' للطلبات التي تزيد عن  100$',
        path: '/',
        icon: 'money'
    },
]
///cate////////////////////////////////////////////////////////////////
import E_img from "@assets/images/category/box-1.png";
import kitchen from "@assets/images/category/box-2.png";
import furniture from "@assets/images/category/box-3.png";
import supplies from "@assets/images/category/box-4.png";
import sports from "@assets/images/category/box-5.png";
export const CategoryData: CategoryType[] = [
    {
        title: 'الالكترونيات',
        path: "/",
        img: E_img,
    },
    {
        title: 'ادوات المطبخ ',
        path: "/",
        img: kitchen,
    },
    {
        title: ' الاثاث ',
        path: "/",
        img: furniture,
    },
    {
        title: '  العدد والأدوات ',
        path: "/",
        img: supplies,
    },
    {
        title: ' لوازم رياضية ',
        path: "/",
        img: sports,
    },
]
///products////////////////////////////////////////////////////////////////
import Watch from "@assets/images/products/pro12.jpg"
import Watch2 from "@assets/images/products/9.jpg"
import headphone from "@assets/images/products/pro7.jpg"
import screen from "@assets/images/products/pro5.jpg"
import Phone from "@assets/images/products/smartPhone.webp"
import PhoneHeader from "@assets/images/products/pro10.jpg"
import shoesBaby from "@assets/images/products/1.jpg"
import Jacket from "@assets/images/products/7.jpg"
import Jacket2 from "@assets/images/products/5.jpg"
import laptop from "@assets/images/products/laptop.webp"
import ClassicWatch from "@assets/images/products/ClassicWatch.webp"
import Backpack from "@assets/images/products/Backpack.webp"
import DiningTable from "@assets/images/products/DiningTable.webp"
import Wallet from "@assets/images/products/Wallet.webp"
import Shirt from "@assets/images/products/Shirt.webp"
import Sneakers from "@assets/images/products/Sneakers.webp"
import CutlerySet from "@assets/images/products/CutlerySet.webp"
import EveningDress from "@assets/images/products/EveningDress.webp"
import ElegantWatch from "@assets/images/products/ElegantWatch.webp"
import BeddingSet from "@assets/images/products/BeddingSet.webp"
import WoodenChair from "@assets/images/products/WoodenChair.webp"
import WomenWallet from "@assets/images/products/WomenWallet.webp"
import LeatherJacket from "@assets/images/products/LeatherJacket.webp"
import UniqueBlouse from "@assets/images/products/UniqueBlouse.jpg"
import MenLeatherShoes from "@assets/images/products/MenLeatherShoes.jpg"
import ClassicWatch2 from "@assets/images/products/ClassicWatch2.webp"
import LuxuryWatch from "@assets/images/products/LuxuryWatch.webp"
import WeddingDress from "@assets/images/products/WeddingDress.webp"
import LuxuryCoffeeSet from "@assets/images/products/LuxuryCoffeeSet.webp"
import ModernDesk from "@assets/images/products/ModernDesk.webp"
export const CardData: CardType[] = [
    {
        id: "1",
        title: "ساعة ذكية تى- الترا 2",
        img: Watch,
        price: "1000",
        badgeNum: "25",
        newPrice: "750",
        sale: false,
        badge: true,
        gallery: [
            { img: Watch },
            { img: Watch },
            { img: Watch },
            { img: Watch },
        ],
        countRate: "10",
        cate: "الالكترونيات",
        typePro: "topRated",
    },
    {
        id: "2",
        title: "سماعة بلوتوث 2pi",
        img: headphone,
        price: "2500",
        sale: false,
        badge: false,
        gallery: [
            { img: headphone},
            { img: headphone},
            { img: headphone},
            { img: headphone},
        ],
        countRate: "19",
        cate: "الالكترونيات",
        typePro: "newArrivals",
    },
    {
        id: "3",
        title: "أحذية قماش الطفل",
        img: shoesBaby,
        price: "500",
        sale: true,
        badge: false,
        gallery: [
            { img: shoesBaby },
            { img: shoesBaby },
            { img: shoesBaby },
            { img: shoesBaby },
        ],
        countRate: "41",
        cate: "ملابس اطفال",
        typePro: "buyMore",
    },
    {
        id: "4",
        title: "شاشة سامسونج 2K",
        img: screen,
        price: "5000",
        badgeNum: "10",
        newPrice: "4200",
        sale: false,
        badge: true,
        gallery: [
            { img: screen },
            { img: screen },
            { img: screen },
            { img: screen },
        ],
        countRate: "10",
        cate: "الالكترونيات",
        typePro: "topRated",
    },
    {
        id: "5",
        title: "سترة رجالي من الصوف بسحاب كامل",
        img: Jacket,
        price: "1500",
        gallery: [
            { img: Jacket},
            { img: Jacket},
            { img: Jacket},
            { img: Jacket},
        ],
        countRate: "10",
        cate: "ملابس رجالي",
        typePro: "buyMore",
    },
    {
        id: "6",
        title: "هاتف سامسونج A52s",
        img: Phone,
        price: "6000",
        gallery: [
            { img: Phone },
            { img: Phone },
            { img: Phone },
            { img: Phone },
        ],
        countRate: "5",
        cate: "الالكترونيات",
        typePro: "newArrivals",
    },
    {
        id: "7",
        title: "سماعة سلك 12c",
        img: PhoneHeader,
        price: "6000",
        sale: true,
        badge: false,
        gallery: [
            { img: PhoneHeader },
            { img: PhoneHeader },
            { img: PhoneHeader },
            { img: PhoneHeader },
        ],
        countRate: "18",
        cate: "الالكترونيات",
        typePro: "topRated",
    },
    {
        id: "8",
        title: "السترات الجلدية الشتوية للرجال",
        img: Jacket2,
        price: "3000",
        badgeNum: "50",
        newPrice: "1500",
        sale: false,
        badge: true,
        gallery: [
            { img: Jacket2 },
            { img: Jacket2 },
            { img: Jacket2 },
            { img: Jacket2 },
        ],
        countRate: "5",
        cate: "ملابس رجالي",
        typePro: "buyMore",
    },
    {
        id: "9",
        title: "ساعة الجيب الحقيبة الجلدية",
        img: Watch2,
        price: "3000",
        badgeNum: "50",
        newPrice: "1500",
        sale: false,
        badge: true,
        gallery: [
            { img: Watch2 },
            { img: Watch2 },
            { img: Watch2 },
            { img: Watch2 },
        ],
        countRate: "5",
        cate: "الالكترونيات",
        typePro: "newArrivals",
    },
    {
        id: "10",
        title: " لاب توب ",
        img: laptop,
        price: "1000",
        badgeNum: "25",
        newPrice: "750",
        sale: false,
        badge: true,
        gallery: [
            { img: laptop },
            { img: laptop },
            { img: laptop },
            { img: laptop },
        ],
        countRate: "5",
        cate: "الالكترونيات",
        typePro: "topRated",
    },
    {
        id: "11",
        title: "ساعة يد رجالية كلاسيكية",
        img: ClassicWatch,
        price: "800",
        sale: true,
        badge: false,
        gallery: [
            { img: ClassicWatch },
            { img: ClassicWatch },
            { img: ClassicWatch },
            { img: ClassicWatch },
        ],
        countRate: "15",
        cate: "الاكسسوارات",
        typePro: "topRated",
    },
    {
        id: "12",
        title: "حقيبة ظهر للمدرسة",
        img: Backpack,
        price: "400",
        sale: true,
        badge: false,
        gallery: [
            { img: Backpack },
            { img: Backpack },
            { img: Backpack },
            { img: Backpack },
        ],
        countRate: "8",
        cate: "الحقائب والشنط",
        typePro: "newArrivals",
    },
    {
        id: "13",
        title: "طاولة طعام خشبية",
        img: DiningTable,
        price: "1500",
        sale: false,
        badge: false,
        gallery: [
            { img: DiningTable },
            { img: DiningTable },
            { img: DiningTable },
            { img: DiningTable },
        ],
        countRate: "12",
        cate: "الأثاث",
        typePro: "buyMore",
    },
    {
        id: "14",
        title: "محفظة جلدية للرجال",
        img: Wallet,
        price: "250",
        badgeNum: "20",
        newPrice: "200",
        sale: false,
        badge: true,
        gallery: [
            { img: Wallet },
            { img: Wallet },
            { img: Wallet },
            { img: Wallet },
        ],
        countRate: "10",
        cate: "الاكسسوارات",
        typePro: "topRated",
    },
    {
        id: "15",
        title: "قميص قطني للرجال",
        img: Shirt,
        price: "120",
        sale: true,
        badge: false,
        gallery: [
            { img: Shirt },
            { img: Shirt },
            { img: Shirt },
            { img: Shirt },
        ],
        countRate: "25",
        cate: "ملابس رجالي",
        typePro: "newArrivals",
    },
    {
        id: "16",
        title: "حذاء رياضي للرجال",
        img: Sneakers,
        price: "350",
        sale: false,
        badge: false,
        gallery: [
            { img: Sneakers },
            { img: Sneakers },
            { img: Sneakers },
            { img: Sneakers },
        ],
        countRate: "18",
        cate: "أحذية رياضية",
        typePro: "topRated",
    },
    {
        id: "17",
        title: "مجموعة ملاعق وشوك للمطبخ",
        img: CutlerySet,
        price: "200",
        sale: false,
        badge: false,
        gallery: [
            { img: CutlerySet },
            { img: CutlerySet },
            { img: CutlerySet },
            { img: CutlerySet },
        ],
        countRate: "14",
        cate: "أدوات المطبخ",
        typePro: "newArrivals",
    },
    {
        id: "18",
        title: "فستان سهرة نسائي",
        img: EveningDress,
        price: "1200",
        sale: false,
        badge: false,
        gallery: [
            { img: EveningDress },
            { img: EveningDress },
            { img: EveningDress },
            { img: EveningDress },
        ],
        countRate: "7",
        cate: "ملابس نسائية",
        typePro: "buyMore",
    },
    {
        id: "19",
        title: "ساعة يد نسائية أنيقة",
        img: ElegantWatch,
        price: "900",
        sale: true,
        badge: false,
        gallery: [
            { img: ElegantWatch },
            { img: ElegantWatch },
            { img: ElegantWatch },
            { img: ElegantWatch },
        ],
        countRate: "11",
        cate: "الاكسسوارات",
        typePro: "topRated",
    },
    {
        id: "20",
        title: "طقم ملاءات سرير فاخرة",
        img: BeddingSet,
        price: "3000",
        sale: false,
        badge: false,
        gallery: [
            { img: BeddingSet },
            { img: BeddingSet },
            { img: BeddingSet },
            { img: BeddingSet },
        ],
        countRate: "9",
        cate: "المنزل والديكور",
        typePro: "newArrivals",
    },
    {
        id: "21",
        title: "كرسي طعام خشبي",
        img: WoodenChair,
        price: "180",
        sale: false,
        badge: false,
        gallery: [
            { img: WoodenChair },
            { img: WoodenChair },
            { img: WoodenChair },
            { img: WoodenChair },
        ],
        countRate: "20",
        cate: "أثاث المنزل",
        typePro: "buyMore",
    },
    {
        id: "22",
        title: "محفظة جلدية للسيدات",
        img: WomenWallet,
        price: "350",
        sale: true,
        badge: false,
        gallery: [
            { img: WomenWallet },
            { img: WomenWallet },
            { img: WomenWallet },
            { img: WomenWallet },
        ],
        countRate: "15",
        cate: "الاكسسوارات",
        typePro: "topRated",
    },
    {
        id: "23",
        title: "جاكيت جلد نسائي",
        img: LeatherJacket,
        price: "800",
        sale: false,
        badge: false,
        gallery: [
            { img: LeatherJacket },
            { img: LeatherJacket },
            { img: LeatherJacket },
            { img: LeatherJacket },
        ],
        countRate: "12",
        cate: "ملابس نسائية",
        typePro: "newArrivals",
    },
    {
        id: "24",
        title: "ساعة يد رجالية كلاسيكية",
        img: ClassicWatch2,
        price: "1200",
        sale: true,
        badge: false,
        gallery: [
            { img: ClassicWatch2 },
            { img: ClassicWatch2 },
            { img: ClassicWatch2 },
            { img: ClassicWatch2 },
        ],
        countRate: "9",
        cate: "الاكسسوارات",
        typePro: "topRated",
    },
    {
        id: "25",
        title: "بلوزة نسائية بتصميم فريد",
        img: UniqueBlouse,
        price: "400",
        sale: false,
        badge: false,
        gallery: [
            { img: UniqueBlouse },
            { img: UniqueBlouse },
            { img: UniqueBlouse },
            { img: UniqueBlouse },
        ],
        countRate: "18",
        cate: "ملابس نسائية",
        typePro: "buyMore",
    },
    {
        id: "26",
        title: "ساعة يد نسائية فاخرة",
        img: LuxuryWatch,
        price: "2500",
        sale: false,
        badge: true,
        gallery: [
            { img: LuxuryWatch },
            { img: LuxuryWatch },
            { img: LuxuryWatch },
            { img: LuxuryWatch },
        ],
        countRate: "10",
        newPrice:"1200",
        badgeNum:"20",
        cate: "الاكسسوارات",
        typePro: "topRated",
    },
    {
        id: "27",
        title: "حذاء جلدي للرجال",
        img: MenLeatherShoes,
        price: "600",
        sale: true,
        badge: false,
        gallery: [
            { img: MenLeatherShoes },
            { img: MenLeatherShoes },
            { img: MenLeatherShoes },
            { img: MenLeatherShoes },
        ],
        countRate: "22",
        cate: "أحذية رجالية",
        typePro: "buyMore",
    },
    {
        id: "28",
        title: "فستان زفاف نسائي",
        img: WeddingDress,
        price: "5000",
        sale: false,
        badge: true,
        gallery: [
            { img: WeddingDress },
            { img: WeddingDress },
            { img: WeddingDress },
            { img: WeddingDress },
        ],
        countRate: "5",
        newPrice:"1800",
        badgeNum:"30",
        cate: "ملابس نسائية",
        typePro: "newArrivals",
    },
    {
        id: "29",
        title: "طقم قهوة فاخر",
        img: LuxuryCoffeeSet,
        price: "800",
        sale: false,
        badge: false,
        gallery: [
            { img: LuxuryCoffeeSet },
            { img: LuxuryCoffeeSet },
            { img: LuxuryCoffeeSet },
            { img: LuxuryCoffeeSet },
        ],
        countRate: "15",
        cate: "أدوات المطبخ",
        typePro: "topRated",
    },
    {
        id: "30",
        title: "مكتب خشبي مودرن",
        img: ModernDesk,
        price: "1500",
        sale: false,
        badge: false,
        gallery: [
            { img: ModernDesk },
            { img: ModernDesk },
            { img: ModernDesk },
            { img: ModernDesk },
        ],
        countRate: "10",
        cate: "الأثاث",
        typePro: "buyMore",
    },
]
export const DailyOffers:CardType[]=[
    {
        id: "2",
        title: "سماعة بلوتوث 2pi",
        img: headphone,
        price: "2500",
        sale: true,
        badge: false,
        gallery: [
            { img: headphone},
            { img: headphone},
            { img: headphone},
            { img: headphone},
        ],
        countRate: "19",
        cate: "الالكترونيات",
        typePro: "newArrivals",
    },
    {
        id: "4",
        title: "شاشة سامسونج 2K",
        img: screen,
        price: "5000",
        badgeNum: "10",
        newPrice: "4200",
        sale: false,
        badge: true,
        gallery: [
            { img: screen },
            { img: screen },
            { img: screen },
            { img: screen },
        ],
        countRate: "10",
        cate: "الالكترونيات",
        typePro: "topRated",
    },
]
///brand////////////////////////////////////////////////////////////////
import brand1 from "@assets/images/brand/b2.webp"
import brand2 from "@assets/images/brand/b3.png"
import brand3 from "@assets/images/brand/b4.png"
import brand4 from "@assets/images/brand/b5.png"
import brand5 from "@assets/images/brand/b6.webp"
export const BrandData:CategoryType[]=[
    {
        img:brand1,
        path:'#!',
        title:'brand-1',
    },
    {
        img:brand2,
        path:'#!',
        title:'brand-2',
    },
    {
        img:brand3,
        path:'#!',
        title:'brand-3',
    },
    {
        img:brand4,
        path:'#!',
        title:'brand-4',
    },
    {
        img:brand5,
        path:'#!',
        title:'brand-5',
    },
    {
        img:brand1,
        path:'#!',
        title:'brand-1',
    },
    {
        img:brand2,
        path:'#!',
        title:'brand-2',
    },
    {
        img:brand3,
        path:'#!',
        title:'brand-3',
    },
    {
        img:brand1,
        path:'#!',
        title:'brand-1',
    },


]
////blog////////////////////////////////////////////////////////////////
export const BlogData:BlogType[]=[
    {
        img: E_img,
        path:'#!',
        title:'اتجاهات الموضة على الرصيف: كيفية الفوز في معركة الالتقاط',
        date:'2022-01-01',
        name:'احمد التطاوي',
    },
    {
        img: E_img,
        path:'#!',
        title:'اتجاهات الموضة على الرصيف: كيفية الفوز في معركة الالتقاط',
        date:'2022-01-01',
        name:'احمد التطاوي',
    },
    {
        img: E_img,
        path:'#!',
        title:'اتجاهات الموضة على الرصيف: كيفية الفوز في معركة الالتقاط',
        date:'2022-01-01',
        name:'احمد التطاوي',
    },
    {
        img: E_img,
        path:'#!',
        title:'اتجاهات الموضة على الرصيف: كيفية الفوز في معركة الالتقاط',
        date:'2022-01-01',
        name:'احمد التطاوي',
    },
    {
        img: E_img,
        path:'#!',
        title:'اتجاهات الموضة على الرصيف: كيفية الفوز في معركة الالتقاط',
        date:'2022-01-01',
        name:'احمد التطاوي',
    },
  
]
///footer///////////////////////////////////////////////////////////////
//==POPULAR CATEGORIES====
export const  FooterCate_1Data:LinkType[]=[
    {
        title:'الالكترونيات',
        path:'#!',
    },
    {
        title:'مستحضرات التجميل',
        path:'#!',
    },
    {
        title:'الاثاث',
        path:'#!',
    },
    {
        title:' العدد والادوات',
        path:'#!',
    },
    {
        title:' العدد والادوات',
        path:'#!',
    },
]
//==PRODUCTS===
export const  FooterCate_2Data:LinkType[]=[
    {
        title:'منتجاتنا الجديدة',
        path:'#!',
    },
    {
        title:'افضل المبيعات',
        path:'#!',
    },
    {
        title:'العروض اليومية',
        path:'#!',
    },
    {
        title:'الاكثر طلبا',
        path:'#!',
    },
    {
        title:'العروض الاسبوعية',
        path:'#!',
    },
]
//==OUR COMPANY===
export const  FooterCate_3Data:LinkType[]=[
    {
        title:'توصيل',
        path:'#!',
    },
    {
        title:'إشعار قانوني',
        path:'#!',
    },
    {
        title:'الأحكام والشروط',
        path:'#!',
    },
    {
        title:'من نحن',
        path:'#!',
    },
    {
        title:'دفع امن',
        path:'#!',
    },
]
//==OUR SERVICES===
export const  FooterCate_4Data:LinkType[]=[
    {
        title:'اسعار مخفضة',
        path:'#!',
    },
    {
        title:'توصيل مجاني',
        path:'#!',
    },
    {
        title:'  سياسة استرجاع واضحة',
        path:'#!',
    },
    {
        title:'دعم فني',
        path:'#!',
    },
    {
        title:'جودة المنتج',
        path:'#!',
    },
]
