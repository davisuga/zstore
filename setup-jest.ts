/* global jest */
const asyncError = async () => ({
  status: 500,
  message: "Internal Server Error ",
});
const asyncProducts = async () => ({
  products: [
    { id: 1, name: "Banana", price: 10.0, available: 10 },
    { id: 2, name: "Apple", price: 20.0, available: 15 },
    { id: 3, name: "Orange", price: 30.0, available: 8 },
    { id: 4, name: "Mango", price: 15.0, available: 20 },
  ],
});
const asyncVouchers = async () => ({
  vouchers: [
    { id: 1, code: "#30OFF", type: "percentual", amount: 30.0 },
    { id: 2, code: "#100DOLLARS", type: "fixed", amount: 100.0 },
    { id: 3, code: "#SHIPIT", type: "shipping", amount: 0, minValue: 300.5 },
  ],
});

const createApiMock = () => ({
  error: asyncError,
  products: asyncProducts,
  vouchers: asyncVouchers,
});
//@ts-ignore
global.makeApi = jest.fn(createApiMock);
export {};
