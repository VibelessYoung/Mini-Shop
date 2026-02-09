function ShoppingCart(props) {
  console.log(props);
  return (
    <aside className="w-full md:w-80 p-6 top-24">
      <div className="bg-white rounded-3xl shadow-xl p-5 space-y-4">
        <h2 className="font-bold text-green-700 text-center">
          🛒 3 آیتم در سبد خرید
        </h2>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex justify-between items-center bg-gray-100 rounded-xl p-3 hover:bg-gray-200 transition"
          >
            <div className="flex flex-col text-sm">
              <span>1 عدد</span>
              <span className="font-bold">200 تومان</span>
              <button className="text-red-500 text-xs hover:underline">
                حذف
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-lg" />
              <p className="font-semibold">موبایل</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default ShoppingCart;
