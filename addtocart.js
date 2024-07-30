function calculatecart(...num) {
    return num

}
let bill = (calculatecart(120, 456, 410, 120, 563));
function total(bill) {
    let sum = 0;
    for (i = 0; i < bill.length; i++) {
        sum = sum + bill[i]
    }
    return sum;
}
console.log(total(bill));