
import {
  useEffect,
  useState,
  useContext,
} from "react";

import axios from "axios";

import ProductCard from "./components/ProductCard";

import {
  CartContext,
} from "host/CartContext";

function App() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  const { addToCart } =
    useContext(CartContext);

  function handleAddToCart(
    product
  ) {
    addToCart(product);
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response =
          await axios.get(
            "https://dummyjson.com/products"
          );

        setProducts(
          response.data.products
        );
      } catch (error) {
        console.log(error);

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main className="mt-24 p-10 bg-[#F5F5F5] min-h-screen">
        <p className="text-lg text-gray-500">
          Carregando produtos...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mt-24 p-10 bg-[#F5F5F5] min-h-screen">
        <p className="text-lg text-red-500">
          Erro ao carregar produtos.
        </p>
      </main>
    );
  }

  return (
    <main className="mt-24 p-10 bg-[#F5F5F5] min-h-screen relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={
              handleAddToCart
            }
          />
        ))}
      </div>
    </main>
  );
}

export default App;