class Product {
  constructor({ title, description, price, thumbnail, code, stock }) {
    this.id = Product.id++;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

Product.id = 1;

class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  addProduct(product) {
    if (this.products.find((p) => p.code === product.code)) {
      throw new Error("El producto ya existe");
    }
    const newProduct = new Product(product);
    this.products.push(newProduct);
    return newProduct;
  }
}

// Crear instancia de ProductManager
const productManager = new ProductManager();

// Obtener productos (debe ser un arreglo vacío)
console.log("Productos:", productManager.getProducts());

// Agregar un nuevo producto
const newProduct = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};

const addedProduct = productManager.addProduct(newProduct);
console.log("Producto agregado:", addedProduct);

// Obtener productos (debe aparecer el producto recién agregado)
console.log("Productos:", productManager.getProducts());

// Agregar producto con código repetido (debe arrojar un error)
try {
  productManager.addProduct({
    title: "producto prueba2",
    description: "Este es un producto prueba2",
    price: 100,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
} catch (error) {
  console.error("Error al agregar producto:", error.message);
}

// Obtener producto por id existente
console.log("Producto obtenido:", productManager.getProductById(1));

// Obtener producto por id inexistente (debe arrojar un error)
try {
  productManager.getProductById(3);
} catch (error) {
  console.error("Error al obtener producto por id:", error.message);
}

// Agregar otro producto
const newProduct2 = {
  title: "producto prueba2",
  description: "Este es un producto prueba2",
  price: 100,
  thumbnail: "Sin imagen",
  code: "222",
  stock: 25,
};
const addedProduct2 = productManager.addProduct(newProduct2);

function createNewProduct(title, description, price, thumbnail, code, stock) {
  const newProduct = { title, description, price, thumbnail, code, stock };
  productManager.addProduct(newProduct);
}

createNewProduct(
  "Producto dinámico",
  "Descripción dinámica",
  150,
  "https://imagen.com",
  "abc456",
  10
);

createNewProduct(
  "Producto dinámico2",
  "Descripción dinámica2",
  150,
  "https://imagen.com",
  "123123",
  10
);

console.log(productManager.products);

try {
  productManager.addProduct({
    title: "producto prueba2",
    description: "Este es un producto prueba2",
    price: 100,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
} catch (error) {
  console.error("Error al agregar producto:", error.message);
}
