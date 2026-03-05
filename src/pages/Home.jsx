import ProductCard from "../component/ProductCard";
import { getProducts } from "../data/products";

export default function Home() {
  const products = getProducts();
  return (
    <div className="bg-[var(--color-background)] h-full p-4">
      <div className="text-center">
        <h1 className="text-[var(--color-primary)] sm:text-5xl text-2xl font-bold">
          Welcome to Over<span className="text-[var(--color-mimo)]">Shop</span>
        </h1>
        <p className="text-[var(--color-primary)] mt-4 sm:text-3xl text-xl font-bold">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-[var(--color-primary)] font-bold text-2xl">
          Our Products
        </h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
