import React, { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../utils/constants";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(PRODUCTS_URL);
    const { products } = await response.json();
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col w-[80%] mt-8 m-auto">
      <span className="font-bold text-3xl">Top Products</span>
      <div className="no-scrollbar flex gap-8 overflow-x-scroll mt-8">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="max-w-70 min-w-70 h-80 flex flex-col items-center justify-center whitespace-nowrap cursor-pointer"
            >
              <img
                src={product.thumbnail}
                alt="product image"
                className="w-full h-full object-cover"
              />
              <span>{product.title}</span>
              <span className="font-medium">${product.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProducts;
