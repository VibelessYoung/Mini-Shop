function Filter() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">برند</label>
          <select className="rounded-xl border-none bg-gray-100 focus:ring-2 focus:ring-violet-500 transition">
            <option>همه</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
            <option>LG</option>
            <option>Nokia</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-gray-700">مرتب‌سازی</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="sort" className="accent-violet-600" />
              جدیدترین
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="sort" className="accent-violet-600" />
              قدیمی‌ترین
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center text-lg font-bold text-violet-700">
          تعداد محصول : 6
        </div>
      </div>
    </section>
  );
}

export default Filter;
