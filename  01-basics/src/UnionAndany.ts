let subs: number | string = '1m';
console.log(subs);

let apiRequestStatus: 'pending' | 'success' | 'error' = 'success';
console.log(apiRequestStatus);

let airlineSeat: 'alise' | 'middle' | 'window' = 'middle';
airlineSeat = 'window';

// avoid any
let orders = ['28', '11', '22']
let currentOrder: string | undefined; // AVOIDING ANY BY ADDIN UNDEFINED here

for (let order of orders) {
    if (order === '11') {
    currentOrder=order
    }
    currentOrder = '11';
}

console.log(currentOrder);
