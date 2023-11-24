import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const title = "More Then 60,000 Customers";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const LocationSprade = () => {
  return <div className="clients-section style-2 padding-tb">
    <div className="container">
        <motion.div viewport={{ once: true }} initial={{y: "100%"}} whileInView={{y: "0"}} transition={{duration: 0.5}} className="section-header text-center">
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
        </motion.div>

        {/* main content  */}
        <div className="section-wrapper">
            <div className="clients">
                {
                    clientsList.map((val, i) => (
                        <div key={i} className="client-list">
                            <Link to='/sign-up' className="client-content">
                                <span>{val.text}</span>
                            </Link>
                            <div className="client-thumb">
                                <img src={val.imgUrl} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  </div>;
};

export default LocationSprade;
