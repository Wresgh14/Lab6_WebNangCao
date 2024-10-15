import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ cartItems }) {
  const navigate = useNavigate();
  return (
    <section className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-2xl font-bold text-gray-800"
      >
        Console Gamers
      </button>
      <Link
        to="/cart"
        className="text-lg text-yellow-600 hover:text-yellow-800"
      >
        Giỏ hàng {cartItems.length}
      </Link>
    </section>
  );
}
