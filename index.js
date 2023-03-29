const initialCapacities = {
  EUR: 50000,
  USD: 43000,
};

const totals = [
  {
    total: {
      amount: {
        asset: { currency: "GBP", type: "Cash" },
        quantity: 100000,
      },
    },
  },
  {
    total: {
      amount: {
        asset: { currency: "EUR", type: "Cash" },
        quantity: -200000,
      },
    },
  },
];

const finalResult = totals.reduce((current, item) => {
    if (current.hasOwnProperty(item.total.amount.asset.currency)) {
        current[item.total.amount.asset.currency] += item.total.amount.quantity;
    }

    return current;
}, initialCapacities);

console.log(finalResult);

// {
//   EUR: -150000,
//   USD: 43000
// }
