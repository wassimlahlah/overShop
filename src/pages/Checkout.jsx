import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Checkout() {
  const {
    getCartItemWithProduct,
    getTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const cartItem = getCartItemWithProduct() || [];
  const total = getTotal() || 0;

  function placeOrder() {
    alert("Successful order!");
    clearCart();
  }

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6 bg-[var(--color-background)] text-[var(--color-primary)] min-h-screen">
      {/* واجهة يسار: Order Summary */}
      <div className="w-full lg:w-2/3 rounded-lg p-4 shadow-[var(--color-shadow)]">
        <h2 className="font-bold text-xl mb-4">Order Summary</h2>

        {cartItem.length === 0 && <p>Your cart is empty.</p>}

        {cartItem.map((item) => (
          <div
            key={item.id}
            className="mb-4 rounded overflow-hidden flex  gap-4"
          >
            {item.product && (
              <>
                <img
                  className="object-cover h-20 w-15"
                  src={item.product.image}
                  alt={item.product.name}
                />

                <div className="w-full">
                  <div className="flex justify-between items-center m-1 ">
                    <h3 className="text-xs sm:text-md md:text-lg font-bold">
                      {item.product.name}
                    </h3>
                    <button
                      className="px-1 py-0.5 text-sm md:px-2 md:py-1 md:text-base text-[var(--color-mimo)] hover:text-[var(--color-pipo)] transition duration-200"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </div>

                  <div className="flex justify-between items-center m-2">
                    <div className="flex items-center gap-2">
                      <button
                        className="px-1 py-0.5 text-xs sm:text-md md:text-lg rounded-lg bg-[var(--color-background)] border border-black hover:bg-[var(--color-mimo)] transition duration-200"
                        onClick={() =>
                          item.quantity > 1 &&
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>

                      <span className="font-bold ">{item.quantity}</span>

                      <button
                        className="px-1 py-0.5 text-xs sm:text-md md:text-lg rounded-lg bg-[var(--color-background)] border border-black hover:bg-[var(--color-mimo)] transition duration-200"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="font-bold text-xs sm:text-md md:text-lg text-green-400">
                      {(item.product.price * item.quantity).toFixed(2)} DA
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* واجهة يمين: Total Section */}
      <div className="w-full lg:w-2/5 px-4 py-4 rounded-lg shadow-[var(--color-shadow)]">
        {" "}
        <h2 className="font-bold text-lg md:text-xl mb-4">Total</h2>
        <div className="py-2 flex justify-between">
          <p className="font-bold text-xs sm:text-md  md:text-lg">Subtotal:</p>
          <p className="font-bold text-xs sm:text-md  md:text-lg text-green-500">
            {total.toFixed(2)} DA
          </p>
        </div>
        <div className="py-2 flex justify-between">
          <p className="font-bold text-xs sm:text-md md:text-lg">Total:</p>
          <p className="font-bold text-xs sm:text-md md:text-lg text-blue-500">
            {total.toFixed(2)} DA
          </p>
        </div>
        <button
          className="mt-4 w-full text-xs sm:text-md md:text-lg py-1 font-bold rounded-lg text-[var(--color-primary)] bg-[var(--color-kiko)] hover:bg-[var(--color-tito)]"
          onClick={placeOrder}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
