import {countBy,uniqBy} from "lodash";
import {API_URL, PRODUCTS} from '../utils/constants';

export function addProductCartApi(idProduct){
    const products=getCartApi();
    products.push(idProduct);

    localStorage.setItem(PRODUCTS, JSON.stringify(products));
}

export function getCartApi(){
    const products=localStorage.getItem(PRODUCTS);

    if(!products) return [];

    return JSON.parse(products);
}

export async function getProductsCartApi(){
    const idProducts=getCartApi();

    if(idProducts===0) return null;

    try {
        const products=[];

        for await(const idProduct of idProducts){
            const response=await fetch(`${API_URL}/products/${idProduct}`)
            const result=await response.json();
            products.push(result);
        }

        const productsCount=countBy(products,(product)=>{
            return product.name;
        });

    } catch (error) {
        
    }
}
