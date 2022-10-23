import {
  ProductsGadgets,
  ProductsConsolas,
  ProductsDiversos,
} from "../../Services/data.js";

export const Products = () => {
  let Gadgets = Object.entries(ProductsGadgets).map(([key, value]) => {
    return value;
  });

  let Consolas = Object.entries(ProductsConsolas).map(([key, value]) => {
    return value;
  });

  let Diversos = Object.entries(ProductsDiversos).map(([key, value]) => {
    return value;
  });

  const Products = Gadgets.concat(Consolas, Diversos);
  return Products;
};
