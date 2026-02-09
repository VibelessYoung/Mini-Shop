function Filter(props) {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">برند</label>
          <select
            value={props.brand}
            onChange={props.filterProducts}
            className="rounded-xl border-none bg-gray-100 focus:ring-2 focus:ring-violet-500 transition"
          >
            <option value="">همه</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="xiaomi">Xiaomi</option>
            <option value="lg">LG</option>
            <option value="nokia">Nokia</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-gray-700">مرتب‌سازی</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="asc"
                name="sort"
                className="accent-violet-600"
                onChange={props.sortProducts}
              />
              جدیدترین
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="desc"
                name="sort"
                className="accent-violet-600"
                onChange={props.sortProducts}
              />
              قدیمی‌ترین
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center text-lg font-bold text-violet-700">
          تعداد محصول : {props.count}
        </div>
      </div>
    </section>
  );
}

export default Filter;
