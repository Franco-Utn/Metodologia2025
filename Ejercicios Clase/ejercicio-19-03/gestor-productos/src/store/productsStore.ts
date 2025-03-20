//Importamos create de zustand para crear store
import { create } from "zustand";
import { IProduct } from "../types/products";

//definimos la interfaz del store de tareas
interface IProductStore {
  products: IProduct[]; //→ Es un array que almacena todas las tareas.
  activeProduct: IProduct | null; //→ Representa la tarea que está seleccionada actualmente. Puede ser null si no hay ninguna activa.
  //Acciones:
  setActiveProduct: (product: IProduct | null) => void; // → Es una función que recibe una tarea o null y la establece como activa.
  addProduct: (product: IProduct) => void; //→ Agrega un nuevo producto.
  clearActiveProduct: () => void; // → Limpia el producto activo.
  updateProduct: (product: IProduct) => void; // → Actualizar uno existente.
  removeProduct: (id: string | number) => void; // → Elimina un producto.
}

//creamos el store de tareas || create desde Zustand, que nos permite crear un estado global.
export const productStore = create<IProductStore>((set) => ({
  //Estado inicial del store
  products: [],
  activeProduct: null,

  //Acciones
  setActiveProduct: (activeProductIn) =>
    set(() => ({ activeProduct: activeProductIn })), //Recibe una tarea (ITarea | null). || Llama a set(() => ({ tareaActiva: tareaActivaIn })), lo que: Actualiza la variable tareaActiva.

  addProduct: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })), //Recibe una tarea (ITarea). || Llama a set((state) => ({ tareas: [...state.tareas, nuevaTarea] })), lo que: Actualiza la variable tareas.
  clearActiveProduct: () => set(() => ({ activeProduct: null })), //No necesitamos state, porque directamente le asignamos el valor nulo

  updateProduct: (updatedProduct) =>
    set((state) => {
      const productArray = state.products.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, ...updatedProduct }
          : product
      );
      return { products: productArray };
    }),
  removeProduct: (idProduct) =>
    set((state) => {
      const productArray = state.products.filter(
        (product) => product.id !== idProduct
      );
      return { products: productArray };
    }),
}));
