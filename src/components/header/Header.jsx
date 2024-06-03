import React from "react";
import "./Header.scss";
import american from '../../../public/assets/imgs/logo/1.jpg'
export default function Header() {
  return (
    <>
      <div className="header__container">
        <div className="header__container--left div-flex">
          <div className="header__phone div-flex div-border">
            <span className="material-symbols-outlined">call</span>
            <p>+84 123 456 789</p>
          </div>
          <div className="header__email div-flex">
            <span className="material-symbols-outlined">mail</span>
            <p>3vHkS@example.com</p>
          </div>
        </div>
        <div className="header__container--right div-flex">
          <div className="header__location div-flex div-border">
            <span className="material-symbols-outlined">map</span>
            <p>Ha Noi</p>
          </div>
          <div className="header__deliver div-flex div-border">
            <span className="material-symbols-outlined">local_shipping</span>
            <p>Track Your Order</p>
          </div>
          <div className="header__compare div-flex div-border">
            <span className="material-symbols-outlined">compare_arrows</span>
            <p>My Compare</p>
          </div>
          <div className="header__wishList div-flex div-border">
            <span className="material-symbols-outlined">favorite</span>
            <p>My WishList</p>
          </div>
          <div className="header__language div-flex div-border">
            <div className="header__language--img">
              <img src={american} alt="" />
            </div>
            <p>English</p>
            <span className="material-symbols-outlined ">arrow_drop_down</span>
          </div>
          <div className="header__money div-flex">
            <span className="material-symbols-outlined">payments</span>
            <p>USD</p>
            <span className="material-symbols-outlined">attach_money</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
      </div>
    </>
  );
}
