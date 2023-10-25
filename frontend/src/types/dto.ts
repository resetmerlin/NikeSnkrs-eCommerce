export interface IProduct {
  product: {
    _id: string;
    user: string;

    name: string;
    brand: string;
    category: string;
    description: string;
    rating: number;
    numReviews: number;
    threeValue: number;
    price: number;

    countInStock: number;
    review: string;
    __v: number;
    createAt: string;
    updatedt: string;
  };
}
