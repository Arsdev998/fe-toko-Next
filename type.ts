export interface Bannner {
    id:string;
    label:string;
    imageUrl:string
}


export interface Category {
    id:string;
    name:string;
    banner: Bannner;
    
}