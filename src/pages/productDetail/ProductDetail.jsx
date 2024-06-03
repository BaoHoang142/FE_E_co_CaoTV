import React, { useState } from "react";
import "./ProductDetail.scss";
import arrivals from "../../../public/assets/imgs/categories/products.png";
import computer from "../../../public/assets/imgs/categories/computer.png";
import photography from "../../../public/assets/imgs/categories/smartphone.png";
import mobile from "../../../public/assets/imgs/categories/products.png";
import tables from "../../../public/assets/imgs/categories/graphic-tablet.png";
import television from "../../../public/assets/imgs/categories/television.png";
import entertaiment from "../../../public/assets/imgs/categories/gamepad.png";
import watch from "../../../public/assets/imgs/categories/smartwatch.png";
import audio from "../../../public/assets/imgs/categories/speaker.png";
import lighting from "../../../public/assets/imgs/categories/desk-lamp.png";
import drones from "../../../public/assets/imgs/categories/drone.png";
import product1 from "../../../public/assets/imgs/product/brown-bear-printed-sweater.jpg";
import product2 from "../../../public/assets/imgs/product/hummingbird-printed-t-shirt.jpg";
import security1 from "../../../public/assets/imgs/security/carrier.svg";
import security2 from "../../../public/assets/imgs/security/hotline.svg";
import security3 from "../../../public/assets/imgs/security/security.svg";
import productDetail1 from "../../../public/assets/imgs/productDetail/market_detail_1.jpg";
import productDetail2 from "../../../public/assets/imgs/productDetail/market_detail_2.png";
import productDetail3 from "../../../public/assets/imgs/productDetail/market_detail_3.png";
import productDetail4 from "../../../public/assets/imgs/productDetail/market_detail_4.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const dataCategory = [
    {
      id: 1,
      img: arrivals,
      title: "Arrivals",
    },
    {
      id: 2,
      img: computer,
      title: "Computer",
    },
    {
      id: 3,
      img: photography,
      title: "Photography",
    },
    {
      id: 4,
      img: mobile,
      title: "Mobile",
    },
    {
      id: 5,
      img: tables,
      title: "Tables",
    },
    {
      id: 6,
      img: television,
      title: "Television",
    },
    {
      id: 7,
      img: entertaiment,
      title: "Entertaiment",
    },
    {
      id: 8,
      img: watch,
      title: "Smart Watch",
    },
    {
      id: 8,
      img: lighting,
      title: "Lighting",
    },
    {
      id: 9,
      img: drones,
      title: "Drones",
    },
  ];
  const images = [
    {
      id: 1,
      img: product1,
    },
    {
      id: 2,
      img: product2,
    },
    {
      id: 3,
      img: product1,
    },
    {
      id: 4,
      img: product1,
    },
  ];
  const dataSize = [
    {
      id: 1,
      title: "S",
    },
    {
      id: 2,
      title: "M",
    },
    {
      id: 3,
      title: "L",
    },
    {
      id: 4,
      title: "XL",
    },
  ];
  const dataColor = [
    {
      id: 1,
      title: "Red",
    },
    {
      id: 2,
      title: "Black",
    },
    {
      id: 3,
      title: "Blue",
    },
    {
      id: 4,
      title: "Green",
    },
  ];
  const security = [
    {
      id: 1,
      title: "Security policy(edit with the Customer Reassurance module)",
      img: security3,
    },
    {
      id: 2,
      title: "Security policy(edit with the Customer Reassurance module)",
      img: security1,
    },
    {
      id: 3,
      title: "Security policy(edit with the Customer Reassurance module)",
      img: security2,
    },
  ];
  const dataNavDescription = [
    {
      id: 1,
      title: "Description",
    },
    {
      id: 2,
      title: "Products Details",
    },
    {
      id: 3,
      title: "Reviews",
    },
  ];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="productDetail__container">
        <div className="productDetail__nav">
          <div className="productDetail__nav__category">
            <span className="material-symbols-outlined">menu</span>
            <p className="productDetail__nav__category__text">All Categories</p>
            <div className="productDetail__nav__category__hover">
              <ul>
                {dataCategory.map((item) => (
                  <li key={item.id}>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="productDetail__nav__item">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Blog</li>
              <li>Page</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="productDetail__nav__content">
            <span className="material-symbols-outlined">
              confirmation_number
            </span>
            <p>Get 30% Off On Selected Items</p>
          </div>
        </div>
        <div className="productDetail__body">
          <div className="productDetail__body__linkto">
            <p>Home</p>
            <span class="material-symbols-outlined">chevron_right</span>
            <p>Computers & Laptops</p>
            <span class="material-symbols-outlined">chevron_right</span>
            <p>Desktops</p>
            <span class="material-symbols-outlined">chevron_right</span>
            <p>Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone</p>
          </div>
          <div className="productDetail__body__main">
            <div className="productDetail__body__main--left">
              <div className="productDetail__body__main--left__imgTop">
                <Swiper
                  style={{
                    background: "white",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {images.map((image) => (
                    <SwiperSlide key={image.id} className="mySwiper__Slide">
                      <img src={image.img} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="productDetail__body__main--left__imgBot">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {images.map((image) => (
                    <SwiperSlide key={image.id}>
                      <img src={image.img} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="productDetail__body__main--middle">
              <div className="productDetail__body__main--middle--top">
                <p className="productDetail__body__main--middle--top__name">
                  Samsung Galaxy S21 Dual-SIM 128GB 5G Smartphone
                </p>
                <p className="productDetail__body__main--middle--top__price">
                  $23.90
                </p>
                <div className="productDetail__body__main--middle--top__brand flex">
                  <p>
                    <strong>Brand:</strong>
                  </p>
                  <p>Sdutio design</p>
                </div>
                <div className="productDetail__body__main--middle--top__reference flex">
                  <p>
                    <strong>Reference:</strong>
                  </p>
                  <p>demo_1</p>
                </div>
                <div className="productDetail__body__main--middle--top__stock flex">
                  <p>
                    <strong>In stock:</strong>
                  </p>
                  <p>280 Items</p>
                </div>
                <p className="productDetail__body__main--middle--top__description">
                  Optimized video, optimized sensitivity, optimized speed, the
                  Sony Alpha a7S III raises the bar for what a full-frame
                  mirrorless camera is capable of. A revised 12.1MP Exmor R BSI
                  CMOS sensor and updated BIONZ XR image processor offer faster
                  performance
                </p>
                <div className="productDetail__body__main--middle--top__size">
                  <p>Size:</p>
                  {dataSize.map((item) => (
                    <div
                      className="productDetail__body__main--middle--top__size--item"
                      key={item.id}
                    >
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
                <div className="productDetail__body__main--middle--top__color">
                  <p>Color:</p>
                  {dataColor.map((item) => (
                    <div
                      className="productDetail__body__main--middle--top__color--item"
                      key={item.id}
                      style={{ backgroundColor: `${item.title}` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="productDetail__body__main--middle--middle">
                <div className="productDetail__body__main--middle--middle__quantity">
                  <span className="material-symbols-outlined incre">add</span>
                  <div className="productDetail__body__main--middle--middle__quantity--number">
                    <span className="number">1</span>
                    <div className="productDetail__body__main--middle--middle__quantity--iconup">
                      <span className="material-symbols-outlined incre">
                        arrow_drop_up
                      </span>
                      <span className="material-symbols-outlined decre">
                        arrow_drop_down
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined decre">
                    check_indeterminate_small
                  </span>
                </div>
                <div className="productDetail__body__main--middle--middle__addToCart">
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                  <p>Add to cart</p>
                </div>
                <div className="productDetail__body__main--middle--middle__wishList">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div className="productDetail__body__main--middle--bottom">
                <div className="productDetail__body__main--middle--bottom__share flex">
                  <span className="material-symbols-outlined">share</span>
                  <p>Share this</p>
                </div>
                <div className="productDetail__body__main--middle--bottom__print flex">
                  <span className="material-symbols-outlined">print</span>
                  <p>Print</p>
                </div>
                <div className="productDetail__body__main--middle--bottom__categories flex">
                  <span className="material-symbols-outlined">edit</span>
                  <p>Categories: Shop, Computer& Laptop, Desktop</p>
                </div>
                <div className="productDetail__body__main--middle--bottom__tag flex">
                  <span className="material-symbols-outlined">bookmark</span>
                  <p>Tags</p>
                </div>
              </div>
            </div>
            <div className="productDetail__body__main--right">
              {security.map((item) => (
                <div
                  className="productDetail__body__main--right__item"
                  key={item.id}
                >
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`productDetail__body__description ${
              isExpanded ? "expanded" : "collapsed"
            }`}
          >
            <div className="productDetail__body__description__nav">
              {dataNavDescription.map((item) => (
                <div
                  className="productDetail__body__description__nav--item"
                  key={item.id}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="productDetail__body__description__content">
              <p className="productDetail__body__description__content__text">
                Designed by Hans J. Wegner in 1949 as one of the first models
                created especially for Carl Hansen & Son, and produced since
                1950. The last of a series of chairs wegner designed based on
                inspiration from antique Chinese armchairs. The gently rounded
                top together with the back and seat offers a variety of
                comfortable seating positions,ideal for both long visits to the
                dining table and relaxed lounging. The standard passage, used
                since the 1500s. A light chair, easy to move around the dining
                table and about the room. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <div className="productDetail__body__description__content__img">
                <img src={productDetail1} alt="" />
                <p className="productDetail__body__description__content__img__h3">
                  <strong>
                    Get 30% Daily Cash <br /> Back with Membership Card.
                  </strong>
                </p>
                <p className="productDetail__body__description__content__img__text">
                  A new collection of lounge furniture, occasional tables and a
                  stool by Edward Barber & Jay Osgerby offers a relaxed,
                  contemporary attitude toward interior design. The lounge
                  furniture includes four individualized sized sofas, and three
                  complementary ottomans. Available in a range of upholstery
                  fabrics and leathers, the lounge furniture is distinguished by
                  stitched seams that reinforce its architectural profile,
                  softened by the curvature of cushions on each face.
                </p>
                <div className="productDetail__body__description__content__img__img">
                  <img src={productDetail2} alt="" />
                  <img src={productDetail2} alt="" />
                </div>
                <img src={productDetail3} alt="" />
                <img
                  className="productDetail__body__description__content__img__imgLine"
                  src={productDetail4}
                  alt=""
                />
                <p className="productDetail__body__description__content__text">
                  Designed by Puik in 1949 as one of the first models created
                  especially for Carl Hansen & Son, and produced since 1950. The
                  last of a series of chairs wegner designed based on
                  inspiration from antique chinese armchairs. The gently rounded
                  top together with the back and seat offers a variety of
                  comfortable seating positions,ideal for both long visits to
                  the dining table and relaxed lounging. A light chair easy to
                  move around the dining table and about the room. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla. Section 1.10.32 of "de Finibus Bonorum
                  et Malorum", written by Cicero in 45 BC. Sound of Marshall,
                  unplugs the chords, and takes the show on the road. Weighing
                  in under 7 pounds, the Kilburn is a lightweight piece of
                  vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
            </div>
          </div>
          <div
            className="productDetail__body__btnShow"
            onClick={toggleDescription}
          >
            <p>{isExpanded ? "Show Less" : "Show More"}</p>
            {isExpanded ? (
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            ) : (
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            )}
          </div>
          <div className="productDetail__body__contact">
            <p className="productDetail__body__contact--left">
              Sign up to Newsletter
            </p>
            <p className="productDetail__body__contact--middle">
              {" "}
              get updates by subscribe our weekly newsletter
            </p>
            <div className="productDetail__body__contact--right">
              <input type="text" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
