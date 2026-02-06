import React from "react";

function Products() {
  const products = Array.from({ length: 9 });

  return (
    <div className="p-4">
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >
        {products.map((_, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition
              p-4
              flex
              flex-col
            "
          >
            <div
              className="
              bg-gray-200
              h-40
              rounded-xl
              flex
              items-center
              justify-center
              text-gray-400
            "
            >
              Image
            </div>

            <h3 className="mt-3 text-lg font-semibold text-center">محصول {index + 1}</h3>

            <p className="text-sm text-gray-500 m-3 text-center">
              توضیح کوتاه محصول اینجا قرار می‌گیره
            </p>

            <button
              className="
              mt-auto
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-2
              rounded-xl
              transition
            "
            >
              افزودن به سبد
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
