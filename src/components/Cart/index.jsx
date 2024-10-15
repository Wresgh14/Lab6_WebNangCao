import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cartItems }) {
  const navigate = useNavigate();
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Giỏ hàng của bạn</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="border border-gray-300 rounded-lg divide-y divide-gray-200">
            {cartItems.map((product) => {
              return (
                <li key={product.id} className="flex justify-between p-4">
                  <span>{product.prdName}</span>
                  <span className="text-green-500">{product.price} VNĐ</span>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="text-xl">Giỏ hàng của bạn đang trống!</div>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="py-2 text-white bg-green-500 mt-2 px-4 rounded-lg"
          >
            Tiếp tục mua sắm
          </button>
        </>
      )}
    </section>
  );
}
