import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF , FaTwitter, FaLinkedin, FaInstagram , FaPinterest  } from "react-icons/fa";
import { Link } from "react-router-dom";

const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: <FaMapMarkerAlt />,
    text: "New York, USA.",
  },
  {
    iconName: <FaPhoneAlt />,
    text: "+880 123 456 789",
  },
  {
    iconName: <FaEnvelope />,
    text: "info@shopcart.com",
  },
];

const socialList = [
  {
    iconName: <FaFacebookF />,
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: <FaTwitter />,
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: <FaLinkedin />,
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: <FaInstagram />,
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: <FaPinterest />,
    siteLink: "#",
    className: "pinterest",
  },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
  },
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Gallery",
    link: "#",
  },
  {
    text: "Forums",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Terms of Use",
    link: "#",
  },
];

const tweetList = [
  {
    iconName: <FaTwitter />,
    desc: (
      <p>
        Aminur islam <a href="#">@ShopCart Greetings! #HTML_Template</a> Grab
        your item, 50% Big Sale Offer !!
      </p>
    ),
  },
  {
    iconName: <FaTwitter />,
    desc: (
      <p>
        Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your
        item, 50% Big Sale Offer !!
      </p>
    ),
  },
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#",
  },
  {
    text: "Staff",
    link: "#",
  },
  {
    text: "Students",
    link: "#",
  },
  {
    text: "Alumni",
    link: "#",
  },
];

const Footer = () => {
  return <footer className="style-2">
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <ul className="lab-ul office-address">
                                        {
                                            addressList.map((val, i) => (
                                                <li key={i}>
                                                    {val.iconName}{val.text}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {
                                            socialList.map((val, i) => (
                                                <li key={i}>
                                                    <a href="#" className={val.className}>{val.iconName} {val.text}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{ItemTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul office-address">
                                        {
                                            ItemList.map((val, i) => (
                                                <li key={i}>
                                                    <a href="#">{val.text}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{quickTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul office-address">
                                        {
                                            quickList.map((val, i) => (
                                                <li key={i}>
                                                    <a href="#">{val.text}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{tweetTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul office-address">
                                        {
                                            tweetList.map((val, i) => (
                                                <li key={i}>
                                                    {val.iconName}
                                                    {val.desc}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* footer bottom   */}
    <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2023 <Link to='/'>Shop Cart</Link> Designed by <a href="/" target="_blank">XYZ</a></p>
                <div className="footer-bottom-list">
                    {
                        footerbottomList.map((val, i) => (
                            <a href="#" key={i}>{val.text}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  </footer>
};

export default Footer;
