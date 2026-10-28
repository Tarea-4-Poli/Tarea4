/**
 * Representa un producto de la tienda.
 */
class Producto {
  /**
   * Crea un producto con su nombre, precio y cantidad.
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio por unidad.
   * @param {number} cantidad - Unidades del producto.
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  /**
   * Calcula el precio total del producto.
   * @returns {number} Precio multiplicado por la cantidad.
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Representa el carrito de la compra.
 */
class Carrito {
  /**
   * Crea un carrito vacío.
   */
  constructor() {
    this.productos = [];
  }

  /**
   * Añade un producto al carrito.
   * @param {Producto} producto - El producto que se quiere añadir.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el precio total de todos los productos del carrito.
   * @returns {number} Suma de los totales de cada producto.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Vacía el carrito eliminando todos los productos.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
