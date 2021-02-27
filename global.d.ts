type ProductProps = {
  name: string;
  price: number;
  quantity?: number;
  available?: number;
};

type Cart = {
  [productName: string]: {
    price: number;
    quantity: number;
    available?: number;
  };
};
type VoucherTypes = "percentual" | "fixed" | "shipping";
type VoucherHashTable = {
  [voucherCode: string]: {
    type: VoucherTypes;
    amount: number;
    minValue?: number;
  };
};

type Voucher = {
  id: number;
  code: string;
  type: VoucherTypes;
  amount: number;
  minValue?: number;
};
