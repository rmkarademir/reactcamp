export const ADD_TO_CART = "ADD_TO_CART" //yazım hatasından kaçınmak için değişkenimizi tanımladık.
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    return{
        type : ADD_TO_CART, //yapılacak işlem,nesne
        payload : product // işlem esnasında gönderilecek değer, değişken, parametre
    }
}

export function removeToCart(product){
    return{
        type : REMOVE_FROM_CART,
        payload : product
    }
}