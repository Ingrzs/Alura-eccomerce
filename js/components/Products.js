import {
  ProductsGadgets,
  ProductsConsolas,
  ProductsDiversos,
} from "../../Services/data.js";

import { CreateProduct } from "./Createproduct.js";

export const Gadgets = (v) => {
  ProductsGadgets.forEach((product) => {
    let Itemproduct = CreateProduct(product);
    v.appendChild(Itemproduct);
  });
};

export const Consolas = (v) => {
  ProductsConsolas.forEach((product) => {
    let Itemproduct = CreateProduct(product);
    v.appendChild(Itemproduct);
  });
};

export const Diversos = (v) => {
  ProductsDiversos.forEach((product) => {
    let Itemproduct = CreateProduct(product);
    v.appendChild(Itemproduct);
  });
};


export const Products = () => {
  let Gadgets = Object.entries(ProductsGadgets).map(([key, value]) => {
    return value;
  });

  let Consolas = Object.entries(ProductsConsolas).map(([key, value]) => {
    return value
  });

  let Diversos = Object.entries(ProductsDiversos).map(([key, value]) => {
    return value
  });

  const Products = Gadgets.concat(Consolas, Diversos);
  return Products;
};
