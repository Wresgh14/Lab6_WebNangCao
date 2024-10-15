import React from "react";
import prd1 from "../../assets/imgs/prd1.jpg";
import prd2 from "../../assets/imgs/prd2.jpg";
import prd3 from "../../assets/imgs/prd3.jpg";
import prd4 from "../../assets/imgs/prd4.jpg";
import { Link } from "react-router-dom";

export default function Products({ handleAddToCart }) {
  const product = [
    {
      id: 1,
      prdName: "Call of Duty: Black Ops 6",
      price: 1850000,
      prdImage: prd1,
      description: "Nhà sản xuất: Activision",
    },
    {
      id: 2,
      prdName: "Black Myth: Wukong",
      price: 1540000,
      prdImage: prd2,
      description: "Nhà sản xuất: Game Science",
    },
    {
      id: 3,
      prdName: "Elden Ring Collector's Edition",
      price: 8500000,
      prdImage: prd3,
      description: "Nhà sản xuất: Bandai Namco Games",
    },
    {
      id: 4,
      prdName: "Assassin's Creed Shadows",
      price: 1850000,
      prdImage: prd4,
      description: "Nhà sản xuất: Ubisoft",
    },
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-5">DANH SÁCH GAME</h2>
      <div className="grid grid-cols-4 gap-5">
        {product.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg">
            <img
              src={product.prdImage}
              alt={product.prdName}
              className="w-80 h-80 object-cover"
            />
            <h3 className="text-lg font-semibold text-black">
              {product.prdName}
            </h3>
            <p className="font-medium">{product.price} VNĐ</p>
            <Link
              to={`/detail/${product.id}`}
              state={{ product }}
              className="w-full block text-center bg-blue-500 hover:bg-gray-800 duration-700 rounded-lg mb-2 py-2 text-white"
            >
              Chi tiết sản phẩm
            </Link>
            <button
              className="w-full block bg-yellow-500 hover:bg-gray-800 duration-700 rounded-lg py-2 text-white"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
