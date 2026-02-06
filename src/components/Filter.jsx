import React from "react";

function Filter() {
  return (
    <div className="flex justify-evenly p-5">
      <div className="flex gap-3 justify-center items-center">
        <p>برندها</p>
        <select name="" id="">
          <option value="">همه</option>
          <option value="">apple</option>
          <option value="">samsung</option>
          <option value="">red-magic</option>
          <option value="">lg</option>
          <option value="">xiaomi</option>
          <option value="">nokia</option>
          <option value="">iphone</option>
        </select>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>مرتب سازی بر اساس</p>
        <div className="flex gap-5">
          <div className="flex gap-3">
            <label htmlFor="">محصولات جدیدتر</label>
            <input type="radio" name="" id="" />
          </div>
          <div className="flex gap-3">
            <label htmlFor="">محصولات قدیمی تر</label>
            <input type="radio" name="" id="" />
          </div>
        </div>
      </div>
      <div>تعداد محصولات : 6</div>
    </div>
  );
}

export default Filter;
