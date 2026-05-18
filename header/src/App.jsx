import {
  useState,
  useContext,
} from "react";

import {
  ShoppingBasket,
  Trash2,
  X,
} from "lucide-react";

import {
  CartContext,
} from "host/CartContext";

import logo from "./assets/logo2.png";

function App() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [
    successMessage,
    setSuccessMessage,
  ] = useState(false);

  const {
    cart,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  function handleCheckout() {
    clearCart();

    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);

      setIsOpen(false);
    }, 2000);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#00b307] px-10 py-4 flex justify-between items-center z-50 shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="VR Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        <button
          onClick={() =>
            setIsOpen(true)
          }
          className="bg-white text-[#00b307] px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
        >
          <ShoppingBasket size={20} />

          Compras ({cart.length})
        </button>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-screen p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold">
                Carrinho
              </h2>

              <button
                onClick={() =>
                  setIsOpen(false)
                }
              >
                <X size={32} />
              </button>
            </div>

            {cart.length === 0 &&
            !successMessage ? (
              <p className="text-gray-500">
                Seu carrinho está vazio.
              </p>
            ) : (
              <>
                {cart.length > 0 && (
                  <>
                    <div className="flex flex-col gap-4">
                      {cart.map(
                        (
                          product,
                          index
                        ) => (
                          <div
                            key={index}
                            className="border border-[#00b307] rounded-2xl p-4 flex justify-between items-center"
                          >
                            <div>
                              <h3 className="font-bold text-xl">
                                {
                                  product.title
                                }
                              </h3>

                              <p className="text-gray-500">
                                Quantidade:{" "}
                                {
                                  product.quantity
                                }
                              </p>

                              <button
                                onClick={() =>
                                  removeFromCart(
                                    product.id
                                  )
                                }
                                className="flex items-center gap-2 mt-2 text-black hover:text-red-500 transition"
                              >
                                <Trash2
                                  size={18}
                                />

                                Remover
                              </button>
                            </div>

                            <span className="font-bold text-2xl">
                              R${" "}
                              {
                                product.price
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="mt-6 flex justify-between items-center border-t pt-4">
                      <span className="text-2xl font-bold">
                        Total:
                      </span>

                      <span className="text-3xl font-bold text-[#00b307]">
                        R${" "}
                        {total.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={
                        clearCart
                      }
                      className="w-full mt-6 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
                    >
                      Esvaziar carrinho
                    </button>

                    <button
                      onClick={
                        handleCheckout
                      }
                      className="w-full mt-4 bg-[#00b307] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                    >
                      Finalizar compra
                    </button>
                  </>
                )}

                {successMessage && (
                  <div className="mt-4 bg-green-100 text-green-700 p-4 rounded-xl text-center font-semibold">
                    Compra finalizada com sucesso!
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;