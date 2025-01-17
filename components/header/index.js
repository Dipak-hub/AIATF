import React from "react";
import Logo from "/public/images/logo/logo.png";
import Link from "next/link";
import HeaderTopbar from "../HeaderTopbar";
import MobileMenu from "../../components/MobileMenu";
import min1 from "/public/images/shop/mini/img-1.jpg";
import min2 from "/public/images/shop/mini/img-2.jpg";
import Image from "next/image";

const Header = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="middle-header">
      <HeaderTopbar tpClass={props.tpClass} />
      <div className="header-style-3">
        <div className="container">
          <div className="header-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                <div className="logo">
                  <Link href="/home" title="">
                    <Image src={Logo} alt="" />
                    AIATF
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 d-lg-block d-none">
                <nav>
                  <ul>
                    <li>
                      <Link className="active" href="/home" title="">
                        Home
                      </Link>
                      {/* <ul>
                                        <li><Link className="active" href="/home">Home style 1</Link></li>
                                        <li><Link href="/home2">Home style 2</Link></li>
                                    </ul> */}
                    </li>
                    <li>
                      <Link href="/about" title="">
                        About
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/case" title="">
                        Causes
                      </Link>
                      <ul>
                        <li>
                          <Link href="/case" title="">
                            Causes
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cause-single/Financial-Help-for-Poor-Families"
                            title=""
                          >
                            Causes Single
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/event" title="">
                        Event
                      </Link>
                      <ul>
                        <li>
                          <Link href="/event" title="">
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link href="/event-details" title="">
                            Event Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <Link href="/home" title="">
                        Pages
                      </Link>
                      <ul>
                        <li>
                          <Link href="/about" title="">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href="/donate" title="">
                            Donate
                          </Link>
                        </li>
                        <li>
                          <Link href="/volunteer" title="">
                            Volunteer
                          </Link>
                        </li>
                        <li>
                          <Link href="/404" title="">
                            Error 404
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link href="/blog">Blog</Link>
                      <ul>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/blog-left">Blog Left sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-fullwidth">Blog full width</Link>
                        </li>
                        <li>
                          <i className="fa fa-angle-right"></i>
                          <Link
                            href="/blog-single/Best-and-less-published-their-supplier-lists."
                            title=""
                          >
                            Blog Details
                          </Link>
                          <ul>
                            <li>
                              <Link
                                href="/blog-single/Best-and-less-published-their-supplier-lists."
                                title=""
                              >
                                Blog single
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/blog-details-left/Best-and-less-published-their-supplier-lists."
                                title=""
                              >
                                Blog single Left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/blog-details-fullwidth/Best-and-less-published-their-supplier-lists."
                                title=""
                              >
                                Blog single full width
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link href="/contact" title="">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                {/* <div className="contact">
                  <div className="cart-search-contact">
                    <div className="header-search-form-wrapper">
                      <button className="search-toggle-btn">
                        <i className="fi flaticon-magnifying-glass"></i>
                      </button>
                      <div className="header-search-form">
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="ti-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div> */}
                {/* <div className="mini-cart">
                      <button className="cart-toggle-btn">
                        {" "}
                        <i className="fi flaticon-shopping-bag"></i>{" "}
                        <span className="cart-count">02</span>
                      </button>
                      <div className="mini-cart-content">
                        <div className="mini-cart-items">
                          <div className="mini-cart-item clearfix">
                            <div className="mini-cart-item-image">
                              <Link href="/home">
                                <Image src={min1} alt="" />
                              </Link>
                            </div>
                            <div className="mini-cart-item-des">
                              <Link href="/home">Hoodi with zipper</Link>
                              <span className="mini-cart-item-price">
                                $20.15
                              </span>
                              <span className="mini-cart-item-quantity">
                                x 1
                              </span>
                            </div>
                          </div>
                          <div className="mini-cart-item clearfix">
                            <div className="mini-cart-item-image">
                              <Link href="/home">
                                <Image src={min2} alt="" />
                              </Link>
                            </div>
                            <div className="mini-cart-item-des">
                              <Link href="/home">Ninja T-shirt</Link>
                              <span className="mini-cart-item-price">
                                $13.25
                              </span>
                              <span className="mini-cart-item-quantity">
                                x 2
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mini-cart-action clearfix">
                          <span className="mini-checkout-price">$215.14</span>
                          <Link
                            href="/home"
                            className="view-cart-btn theme-btn"
                          >
                            View Cart{" "}
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div> */}
                {/* </div>
                </div> */}
              </div>
              <div className="col-md-2 col-sm-2 col-2">
                <MobileMenu />
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
