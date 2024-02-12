const ProductManager = require('./ProductManager.js');


const gestionadorProductos = new ProductManager('products.json');

// Agregar un producto
gestionadorProductos.addProduct('Cuadro perritos', 'blanco y negro', 3500, 'sin imagen', 'ad143', 20);
gestionadorProductos.addProduct('Florero 3d', 'plateado', 1500, 'sin imagen', 'ad144', 10);
gestionadorProductos.addProduct('Maceta floreada', 'colores', 1100, 'sin imagen', 'ad145', 40);
gestionadorProductos.addProduct('Portallaves', 'pallets', 3800, 'sin imagen', 'ad146', 12);
gestionadorProductos.addProduct('Difusor', 'vidrio', 2750, 'sin imagen', 'ad147', 10);
gestionadorProductos.addProduct('Adorno gatito', 'dorado', 1230, 'sin imagen', 'ad148', 30);

// Obtener todos los productos
const allProducts = gestionadorProductos.getProducts();
console.log(allProducts);

// Obtener un producto por su id
gestionadorProductos.getProductById(1);
gestionadorProductos.getProductById(2);
gestionadorProductos.getProductById(3);
gestionadorProductos.getProductById(4);
