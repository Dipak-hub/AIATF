import React from "react";
import Link from "next/link";
import VideoModal from "../../components/ModalVideo";
import abimg from "/public/images/about.jpg";
import abimg2 from "/public/images/about/1.png";
import abimg3 from "/public/images/about/2.png";
import abimg4 from "/public/images/shape/shape2.png";
import Image from "next/image";

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12  grid col-12">
            <div className="video-area">
              <Image src={abimg} alt="" />
              <div className="entry-media video-holder video-btn2">
                <VideoModal />
              </div>
            </div>
          </div>
          <div className="col-lg-7 grid  col-md-12 col-12">
            <div className="about-text">
              <div className="section-title">
                <div className="thumb-text">
                  <span>ABOUT US</span>
                </div>
                <h2>
                  {" "}
                  Welcome to <span>AIATF</span> (Ashgree International Apparel
                  and Textile Fair) .
                </h2>
              </div>
              <p>
                where the world of fashion and textiles converges. We are
                committed to creating premier platforms that connect brands,
                retailers, wholesalers, agents, and distributors from around the
                globe. Our mission is to drive growth, innovation, and
                collaboration within the apparel and textile industry through
                top-tier B2B trade fairs in India’s most dynamic cities:
                Kolkata, New Delhi, and Mumbai.
              </p>
              <div className="ab-icon-area">
                <div className="about-icon-wrap">
                  <div className="about-icon-item">
                    <div className="ab-icon">
                      <Image draggable="false" src={abimg2} alt="" />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/cause-single/Financial-Help-for-Poor-Families"
                        >
                          Innovation.
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="about-icon-item">
                    <div className="ab-icon ab-icon2">
                      <Image draggable="false" src={abimg3} alt="" />
                    </div>
                    <div className="ab-text">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          href="/cause-single/Financial-Help-for-Poor-Families"
                        >
                          Network.
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
      <div className="ab-shape">
        <Image src={abimg4} alt="" />
      </div>
    </div>
  );
};

export default About2;
