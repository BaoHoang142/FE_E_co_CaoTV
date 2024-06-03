import React from "react";
import "./FormSearch.scss";
import logo from "../../../public/assets/imgs/logo/mercado-suppermarket-store-logo-1633487728.jpg";
export default function FormSearch() {
  return (
    <>
      <div className="formSearch__container">
        <div className="formSearch--left">
          <img src={logo} alt="" />
        </div>
        <div className="formSearch__middle">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Tìm kiếm ngay" />
          <button>Tìm kiếm</button>
        </div>
        <div className="formSearch__right">
          <div className="formSearch--right__account">
            <div className="formSearch--right__account__img">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="formSearch--right__account__text">
              <p className="text__account">Tài khoản</p>
              <p className="text__signin">Đăng nhập</p>
            </div>
          </div>
          <div className="formSearch--right__cart">
            <div className="formSearch--right__account__img">
              <span className="material-symbols-outlined">shopping_cart</span>
              <div className="formSearch--right__account__img__number">
                0
              </div>
            </div>
            <div className="formSearch--right__account__text">
              <p className="text__account">Giỏ hàng</p>
              <p className="text__signin">$0.01</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
