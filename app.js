const ProductManager = require('./ProductManager.js');


const gestionadorProductos = new ProductManager('products.json');

// Agregar un producto
gestionadorProductos.addProduct('Cuadro perritos', 'blanco y negro', 1000, 'sin imagen', 'ad143', 20);
gestionadorProductos.addProduct('Florero 3d', 'plateado', 750, 'sin imagen', 'ad144', 10);
gestionadorProductos.addProduct('Maceta floreada', 'colores', 550, 'sin imagen', 'ad145', 40);
gestionadorProductos.addProduct('Portallaves', 'pallets', 1200, 'sin imagen', 'ad146', 12);
gestionadorProductos.addProduct('Difusor', 'vidrio', 2000, 'sin imagen', 'ad147', 10);
gestionadorProductos.addProduct('Adorno gatito', 'dorado', 600, 'sin imagen', 'ad148', 30);

// Obtener todos los productos
const allProducts = gestionadorProductos.getProducts();
console.log(allProducts);

// Obtener un producto por su id
gestionadorProductos.getProductById(1);
gestionadorProductos.getProductById(2);
gestionadorProductos.getProductById(3);
gestionadorProductos.getProductById(4);
