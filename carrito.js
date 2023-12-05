/**
 * ACTIVIDAD OPCIONAL 1:
 * 1- definir un arreglo de productos (inicialmente vacío)
 * 2- definir una función que agregue un objeto al array de productos
 *  (será un producto con los campos id, nombre y precio)
 * 3- definir una función que busque un producto (pasando el id del producto)
 * 4- definir una función que actualice un producto (pasando el id del producto)
 * 5- definir una función que quite un producto (pasando el id del producto)
 */

class Producto{
    static carrito = []
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        Producto.carrito
    }
    static addCarrito(product){
        Producto.carrito.push(product)
        return Producto.carrito
    }
    static getProduct(idProduct){
        Producto.carrito.forEach(objeto =>{
            if(objeto.id == idProduct){
                console.log(objeto)
            }
        })
    }
    static updateProduct(idProduct,precio){
        Producto.carrito.forEach(objeto =>{
            if(objeto.id == idProduct){
                let indice = Producto.carrito.indexOf(objeto)
                Producto.carrito[indice].precio = precio
                return Producto.carrito
            }
        })
    }
    static deleteProduct(idProduct){
        Producto.carrito.forEach((objeto)=>{
             if(objeto.id == idProduct){
                 let indice = Producto.carrito.indexOf(objeto)
                 Producto.carrito.splice(indice,1)
             }
         })
         return Producto.carrito
     }

}

const producto1 = new Producto(1,"mate",10)
const producto2 = new Producto(2,"termo",50)
const producto3 = new Producto(3,"bombilla",20)

Producto.addCarrito(producto1)
Producto.addCarrito(producto2)
Producto.addCarrito(producto3)

console.log(Producto.carrito)

Producto.getProduct(2)

Producto.updateProduct(3,120)

console.log(Producto.carrito)

Producto.deleteProduct(1)

console.log(Producto.carrito)

