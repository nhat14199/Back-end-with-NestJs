export class Product {
  id: number;
  productName: string;
  price: string;
  categoryId: string;

  constructor({ id, productName, price, categoryId }) {
    if (id !== null) this.id;
    if (productName !== null) this.productName;
    if (price !== null) this.price;
    if (categoryId != null) {
      this.categoryId;
    }
  }
}
