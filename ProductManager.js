const fs = require('fs');


class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  saveProducts() {
    const data = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(this.path, data);
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(product);
    this.saveProducts();
  }

  getProductById(idProduct) {
    const productIndex = this.products.findIndex(product => product.id === idProduct);

    if (productIndex === -1) {
      console.log("Not found");
      return;
    }

    const product = this.products[productIndex];
    console.log(`Product: ${product.title}`);
  }

  updateProduct(idProduct, updatedFields) {
    const productIndex = this.products.findIndex(product => product.id === idProduct);

    if (productIndex === -1) {
      console.log("Not found");
      return;
    }

    const product = this.products[productIndex];
    this.products[productIndex] = { ...product, ...updatedFields };
    this.saveProducts();
  }

  deleteProduct(idProduct) {
    const productIndex = this.products.findIndex(product => product.id === idProduct);

    if (productIndex === -1) {
      console.log("Not found");
      return;
    }

    this.products.splice(productIndex, 1);
    this.saveProducts();
  }
}

module.exports = ProductManager;

