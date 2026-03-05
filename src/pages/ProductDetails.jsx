import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { CartContext } from "../Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    const foundProduct = getProductById(Number(id));
    if (!foundProduct) {
      navigate("/");
      return;
    }
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex m-4 p-6 bg-[var(--color-background)] rounded-lg shadow-[var(--color-shadow)] gap-6">
      {/* صورة المنتج */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg object-cover md:h-80 h-40 w-full md:w-auto shadow-lg"
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-4">
            {product.name}
          </h2>
          <p className="text-md md:text-xl font-semibold text-[var(--color-mimo)] mb-4">
            {product.price} DA
          </p>
          <p className="text-[var(--color-primary)] text-sm md:text-xl mb-6">
            {product.description}
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex sm:flex-col-2 gap-4">
          <Link to={'/Checkout'}
            onClick={() => addToCart(product.id)}
            className="text-center text-xs sm:text-md bg-[var(--color-kiko)] text-[var(--color-primary)] font-semibold p-2 sm:p-3 rounded-lg hover:bg-[var(--color-tito)] transition-colors duration-300 shadow-md"
          >
            Add to Cart
          </Link>

          <button
            onClick={() => window.history.back()}
            className="text-center text-xs sm:text-md bg-[var(--color-mimo)] text-[var(--color-primary)] font-semibold p-2 sm:p-3 rounded-lg hover:bg-[var(--color-pipo)] transition-colors duration-300 shadow-md"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
