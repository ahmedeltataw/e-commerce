export interface LinkType{
    title:string,
    path:string
}
interface ImageType {
    img: string | any,
}
export interface CardType extends ImageType{
    title:string,
    price: any|string | number,
    img: string | any,
    badgeNum?:string,
    newPrice?:any|string | number,
    sale?:boolean | string,
    badge?:boolean | string
    id:string ,
    gallery?:ImageType[],
    countRate?:number | string,
    cate?:string,
    typePro?: "buyMore" | "newArrivals" | "topRated",
}
export interface DropDataType extends LinkType{
    icon?:string,
}
export interface HeroDataType {
    title:string,
    offer:string,
    des:string,
    img: string | any,
}
export interface ServiceType extends DropDataType{
    des:string,
}
export interface CategoryType extends LinkType{
    img: string | any,
}
export interface BlogType extends LinkType{
    img: string | any,
    date: string,
    name: string,
}