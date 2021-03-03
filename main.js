// Ambil element
const cart = document.getElementById("cart");

// ES5
// function addProduct(name, category) {
//   return {
//     name: name,
//     category: category,
//   };
// }

// let getProduct = addProduct("iPhone 12", "Gadget")

// console.log(getProduct)

// ES6
function addProduct(productName, category) {
  return {
    productName,
    category,
  };
}

let getProduct = addProduct("iPhone 12", "Gadget");

console.log(getProduct);

cart.innerHTML = `Product 1 : ${getProduct.productName}` 
