function Products(props) {
  return (
    <section className="flex-1 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {props.item.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-44 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-3xl flex items-center justify-center text-gray-500 group-hover:scale-105 transition">
              <img src={item.image} alt="" />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-center">محصول {item.title}</h3>

              <p className="text-gray-500 text-sm text-center">
                {item.price}
              </p>

              <button className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
                افزودن به سبد
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
