import { ProductManager } from "./productManager";


async function testing() {
    const productManagerInstance = new ProductManager(filePath);
  
    console.log("getProducts inicial:", await productManagerInstance.getProducts());
  
    await productManagerInstance.addProduct({
      title: "Dark Side of The Moon",
      description: "Pink Floyd",
      price: 9000,
      thumbnail: "ruta/dsotm.jpg",
      code: "A001",
      stock: 7,
      id: null 
    });
  
    await productManagerInstance.addProduct({
      title: "Definitely Maybe",
      description: "Oasis",
      price: 10000,
      thumbnail: "ruta/dm.jpg",
      code: "A003",
      stock: 11,
      id: null 
    });
  
    await productManagerInstance.addProduct({
      title: "Be here now",
      description: "Oasis",
      price: 7500,
      thumbnail: "ruta/bhn.jpg",
      code: "A004",
      stock: 1,
      id: null 
    });
  
    await productManagerInstance.addProduct({
      title: "AM",
      description: "Arctic Monkeys",
      price: 8000,
      thumbnail: "ruta/am.jpg",
      code: "A005",
      stock: 2,
      id: null 
    });
  
    await productManagerInstance.addProduct({
      title: "Some Girls",
      description: "The Rolling Stones",
      price: 11000,
      thumbnail: "ruta/SG.jpg",
      code: "A006",
      stock: 2,
      id: null 
    });
  
    await productManagerInstance.addProduct({
      title: "The Car",
      description: "Arctic Monkeys",
      price: 12000,
      thumbnail: "ruta/tcam.jpg",
      code: "A007",
      stock: 9,
      id: null 
    });
  
    await productManagerInstance.addProduct({
      title: "Hot Fuss",
      description: "The Killers",
      price: 15000,
      thumbnail: "ruta/.jpg",
      code: "A008",
      stock: 8,
      id: null
    });
  
    await productManagerInstance.addProduct({
      title: "The New Abnormal",
      description: "The Strokes",
      price: 10000,
      thumbnail: "ruta/tna.jpg",
      code: "A009",
      stock: 6,
      id: null
    });

    console.log("getProducts después de agregar los productos:", await productManagerInstance.getProducts());
  
    const nonExistentProduct = await productManagerInstance.getProductById(15);
    console.log("Producto no encontrado");
  
    const initialProducts = await productManagerInstance.getProducts();
    console.log("Listado de productos iniciales:", initialProducts);
  
    const newProduct = {
      title: "Abbey Road",
      description: "The Beatles",
      price: 9999,
      thumbnail: "ruta/artb.jpg",
      code: "A010",
      stock: 2,
    };
    await productManagerInstance.addProduct(newProduct);
  
    const productsAfterAdd = await productManagerInstance.getProducts();
    console.log("Listado de productos tras agregar un producto nuevo:", productsAfterAdd);
  
    const productId = 5;
    const productById = await productManagerInstance.getProductById(productId);
    console.log(`Usted buscó el producto cuyo ID es: ${productId}`);
    console.log("Producto encontrado:", productById);
  
    const productIdToUpdate = 3; 
    await productManagerInstance.updateProduct(productIdToUpdate, "Producto ACTUALIZADO");
  
    const productsAfterUpdate = await productManagerInstance.getProducts();
    console.log("Listado de productos tras de actualizar un producto:", productsAfterUpdate);
  
    const productIdToDelete = 1; 
    await productManagerInstance.deleteProduct(productIdToDelete);
  
    const productsAfterDelete = await productManagerInstance.getProducts();
    console.log("Listado de productos tras eliminar un producto:", productsAfterDelete);
  }
  
  testing();
  
