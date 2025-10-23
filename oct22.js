import { it } from "node:test";

const inventoryData = [
  {
    sku: "A101",
    name: "Premium Coffee",
    pricing: { unit_price: 15.0, discount: 0 },
    stock_level: 105,
    tags: ["food", "hot"],
  },
  {
    sku: "B202",
    name: "Espresso Mug",
    pricing: { unit_price: 8.5, discount: 0.1 },
    stock_level: 8,
    tags: ["kitchen", "low_stock"],
  },
  {
    sku: "C303",
    name: "Tea Sampler",
    pricing: { unit_price: 22.0, discount: 0 },
    stock_level: 25,
    tags: ["food"],
  },
  {
    sku: "D404",
    name: "Milk Frother",
    pricing: { unit_price: 45.0, discount: 0.2 },
    stock_level: 15,
    tags: ["kitchen", "low_stock"],
  },
  {
    sku: "E505",
    name: "Sugar Packets",
    pricing: { unit_price: 5.0, discount: 0 },
    stock_level: 250,
    tags: ["food"],
  },
];

// const filterData = inventoryData.filter(item => item.stock_level < 105 );
// const filterByTag = inventoryData.filter(item => !item.tags.includes('low_stock'));
// const finalPriceSet = filterByTag.map(item=>{
//     let finalPrice = item.pricing.unit_price * (1 - item.pricing.discount);
//     return `${item.sku},${item.name},${finalPrice}`
// })
// console.log(filterData).

// console.log(filterByTag)
// console.log(finalPriceSet);

//

const filterData = inventoryData
  .filter((item) => !item.tags.includes("low_stock"))
  .filter((item) => item.stock_level < 150)
  .map((item) => ({
    sku: item.sku,
    name: item.name,
    finalPrice: (item.pricing.unit_price * (1 - item.pricing.discount)).toFixed(
      2
    ),
  }));
console.log(filterData);


const p = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Helloe Buddy")
    },2000)
})
const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Helloe Buddy")
    },3000)
})

const all = Promise.all([p,p1]);
all.then(result => console.log(result))