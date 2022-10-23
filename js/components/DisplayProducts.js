import { CreateProduct } from "./Createproduct.js";
import {
  ProductsGadgets,
  ProductsConsolas,
  ProductsDiversos,
} from "../../Services/data.js";

export const DisplayGadgets = (v) => {
  ProductsGadgets.forEach((product) => {
    let Itemproduct = CreateProduct(product);
    v.appendChild(Itemproduct);
  });
};

export const DisplayConsolas = (v) => {
  ProductsConsolas.forEach((product) => {
    let Itemproduct = CreateProduct(product);
    v.appendChild(Itemproduct);
  });
};

export const DisplayDiversos = (v) => {
  ProductsDiversos.forEach((product) => {
    let Itemproduct = CreateProduct(product);
    v.appendChild(Itemproduct);
  });
};
