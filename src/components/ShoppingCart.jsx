function ShoppingCart(props) {
  const { cartItems, removeProducts } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemPrice;
  return (
    <aside className="w-full md:w-80 p-6 top-24">
      <div className="bg-white rounded-3xl shadow-xl p-5 space-y-4">
        <h2 className="font-bold text-green-700 text-center">
          🛒 {cartItems.length} آیتم در سبد خرید
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-100 rounded-xl p-3 hover:bg-gray-200 transition"
          >
            <div className="flex flex-col text-sm">
              <span>{item.qty} تعداد</span>
              <span className="font-bold">{item.price} تومان</span>
              <button
                onClick={() => removeProducts(item)}
                className="text-red-500 text-xs hover:underline"
              >
                حذف
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-lg" />
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
        <div className="text-center"> جمع کل : {totalPrice}</div>
      </div>
    </aside>
  );
}

export default ShoppingCart;
