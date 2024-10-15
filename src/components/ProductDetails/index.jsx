import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetails({ handleAddToCart }) {
  const location = useLocation();
  const { product } = location.state || {};
  console.log("product: ", product);
  return (
    <section className="p-6 max-w-3xl mx-auto border border-gray-200 rounded-lg shadow-lg bg-white mt-10">
      <h2 className="text-3xl font-bold text-black mb-5">{product.prdName}</h2>
      <div className="flex gap-10 mt-5">
        <img
          src={product.prdImage}
          alt={product.prdName}
          className="w-80 h-80 shadow-md hover:shadow-yellow-500 duration-700 object-cover"
        />
        <div className="">
          <p className="text-xl font-semibold ">Giá: {product.price} VNĐ</p>
          <p className="text-lg text-gray-600 mt-2">
            Mô tả: {product.description}
          </p>
          <div className="text-end mt-20">
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
              className="bg-yellow-600 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-700"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
