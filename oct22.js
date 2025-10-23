

const inventoryData = [
    { sku: 'A101', name: 'Premium Coffee', pricing: { unit_price: 15.00, discount: 0 }, stock_level: 105, tags: ['food', 'hot'] },
    { sku: 'B202', name: 'Espresso Mug', pricing: { unit_price: 8.50, discount: 0.1 }, stock_level: 8, tags: ['kitchen', 'low_stock'] },
    { sku: 'C303', name: 'Tea Sampler', pricing: { unit_price: 22.00, discount: 0 }, stock_level: 25, tags: ['food'] },
    { sku: 'D404', name: 'Milk Frother', pricing: { unit_price: 45.00, discount: 0.2 }, stock_level: 15, tags: ['kitchen', 'low_stock'] },
    { sku: 'E505', name: 'Sugar Packets', pricing: { unit_price: 5.00, discount: 0 }, stock_level: 250, tags: ['food'] }
];

const filterData = inventoryData.filter(item => item.stock_level < 105 );
const filterByTag = inventoryData.filter(item => !item.tags.includes('low_stock'));
const finalPriceSet = filterByTag.map(item=>{
    let finalPrice = item.pricing.unit_price * (1 - item.pricing.discount);
    return `${item.sku},${item.name},${finalPrice}`
})
// console.log(filterData)
// console.log(filterByTag)
console.log(finalPriceSet)