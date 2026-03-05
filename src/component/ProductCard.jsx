import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-[var(--color-background)] rounded overflow-hidden shadow-[var(--color-shadow)] transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
          {product.name}
        </h3>
        <p className="text-[var(--color-primary)] mb-4">{product.price} DA</p>

        <div className="flex gap-2 mt-auto">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 text-center bg-[var(--color-mimo)] text-[var(--color-primary)] font-semibold py-2 rounded hover:bg-[var(--color-pipo)] transition-colors duration-300"
          >
            View Details
          </Link>
          <Link to={'/Checkout'}
            onClick={() => addToCart(product.id)}
            className="flex-1 text-center bg-[var(--color-kiko)] text-[var(--color-primary)] font-semibold py-2 rounded hover:bg-[var(--color-tito)] transition-colors duration-300"
          >
            Add to Cart
          </Link >
        </div>
      </div>
    </div>
  );
}
