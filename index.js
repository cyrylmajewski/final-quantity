// Expected result:
//
// {
//   EUR: -150000,
//   USD: 43000
// }

const initialCapacities = {
  EUR: 50000,
  USD: 43000
};

const arr = [{
  total: {
    amount: {
      asset: {currency: 'GBP', type: 'Cash'},
      quantity: 100000,
    },
  },
}, {
  total: {
    amount: {
      asset: { currency: 'EUR', type: 'Cash' },
      quantity: -200000,
    },
  },
}]