// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];


// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode){
  let total = 0;
  for (let i = 0; i < products.length; i++){
    total += products[i].price * products[i].quantity;
  }
  if (promotionCode === "SALE20") {
    return total * 0.8;
  } else if (promotionCode === "SALE50") {
    return total = total * 0.5;
  } else {
    return total;
  }
}
let promotionCode = "SALE20";
console.log(calculateTotalPrice(products, promotionCode)); // 68

promotionCode = "SALE50";
console.log(calculateTotalPrice(products, promotionCode)); // 42.5

promotionCode = "";
console.log(calculateTotalPrice(products, promotionCode));