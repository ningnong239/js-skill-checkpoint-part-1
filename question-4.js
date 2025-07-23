// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let low = inventory[0];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < low.quantity) {
    low = inventory[i];
  }
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${low.name} ซึ่งมี ${low.quantity} ชิ้น`);