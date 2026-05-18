import { useState } from "react";
import { ShoppingBasket } from "lucide-react";

function ProductCard({
  product,
  addToCart,
}) {
  const [showMessage, setShowMessage] =
    useState(false);

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-[#E4E8ED] transition-all duration-300 hover:shadow-xl">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-cover rounded-xl"
      />

      <h2 className="font-bold text-xl mt-4">
        {product.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between mt-6">
        <span className="font-bold text-2xl">
          R$ {product.price}
        </span>

        <button
          onClick={() => {
            addToCart(product);

            setShowMessage(true);

            setTimeout(() => {
              setShowMessage(false);
            }, 2000);
          }}
          className="bg-[#00AA13] text-white px-5 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 hover:opacity-90"
        >
          <div className="flex items-center gap-2">
            <ShoppingBasket size={18} />

            <span>Comprar</span>
          </div>
        </button>
      </div>

      {showMessage && (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-[#00AA13] shadow-lg rounded-xl min-w-[260px] px-6 py-3 z-20">

          <p className="text-[#00AA13] text-sm font-semibold">
            Produto adicionado ao carrinho!
          </p>

        </div>
      )}
    </div>
  );
}

export default ProductCard;