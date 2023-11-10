export const getProductById =(productId) =>{
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    }) 
}