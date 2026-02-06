import React from "react";

function ShoppingCart() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-green-800">شما 3 آیتم در سبد خرید خود دارید</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p>1 خرید</p>
              <p>200 تومان</p>
            </div>
            <button>حذف از سبد</button>
          </div>
          <div className="flex gap-3">
            <img src="" alt="" />
            <p>موبایل</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p>1 خرید</p>
              <p>200 تومان</p>
            </div>
            <button>حذف از سبد</button>
          </div>
          <div className="flex gap-3">
            <img src="" alt="" />
            <p>موبایل</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p>1 خرید</p>
              <p>200 تومان</p>
            </div>
            <button>حذف از سبد</button>
          </div>
          <div className="flex gap-3">
            <img src="" alt="" />
            <p>موبایل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
