import React from "react";
import Link from "next/link";
import featuresimg from "/public/images/features/img-1.png";
import featuresimg2 from "/public/images/features/img-2.png";
import featuresimg3 from "/public/images/features/img-3.png";
import featuresimg4 from "/public/images/features/img-4.png";
import Image from "next/image";

const Features = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="features-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="features-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>Vision & Mission</span>
                </div>
              </div>
              <h2>
                AIATF – Where the World of Apparel and Textiles Comes Together.
              </h2>
              <p>
                At AIATF, we believe in fostering a vibrant ecosystem where the
                global fashion and textile industry can thrive. Our goal is to
                provide a space where businesses can explore new opportunities,
                forge meaningful partnerships, and stay ahead of industry
                trends. Through our carefully curated fairs, we bring together
                key players from across the supply chain, creating a dynamic
                environment for business development and innovation.
              </p>
              <Link href="/" className="theme-btn">
                Register Now
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="features-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item">
                    <div className="features-icon">
                      <Image draggable="false" src={featuresimg} alt="" />
                    </div>
                    <div className="features-content">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/cause-single/Financial-Help-for-Poor-Families"
                        >
                          Fashion
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item-2">
                    <div className="features-icon">
                      <Image draggable="false" src={featuresimg2} alt="" />
                    </div>
                    <div className="features-content">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/cause-single/Financial-Help-for-Poor-Families"
                        >
                          Wholesale
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item-2 active">
                    <div className="features-icon">
                      <Image draggable="false" src={featuresimg3} alt="" />
                    </div>
                    <div className="features-content">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/cause-single/Financial-Help-for-Poor-Families"
                        >
                          Investor
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="features-item">
                    <div className="features-icon">
                      <Image draggable="false" src={featuresimg4} alt="" />
                    </div>
                    <div className="features-content">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/cause-single/Financial-Help-for-Poor-Families"
                        >
                          Confrence
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
