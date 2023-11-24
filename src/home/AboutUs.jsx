import React, { useEffect, useRef, useState } from "react";
import { FaUser, FaUserGraduate  } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: <FaUser />,
    count: "12600",
    text: "Marchant Enrolled",
  },
  {
    iconName: <FaUserGraduate />,
    count: "30",
    text: "Certified Courses",
  },
  {
    iconName: <IoIosNotifications />,
    count: "100",
    text: "Rewards and GitCards",
  },
];

const AboutUs = () => {
    const [countup, setCountUp] = useState(false);
    const section = useRef(null);

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > section.current.offsetTop - 400) {
                setCountUp(true)
            } else {
                setCountUp(false)
            }
        }
    }, [])

  return <div ref={section} className="instructor-section style-2 padding-tb section-bg-ash">
    <div className="container">
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div className="col">
                    {
                        countList.map((val, i) => (
                            <div key={i} className="count-item">
                                <div className="count-inner">
                                    <div className="count-icon">
                                        {/* <iconName /> */}
                                    </div>
                                    <motion.div viewport={{ once: true }} initial={{x: "-100%"}} whileInView={{x: "0"}} transition={{duration: 0.5}} className="count-content">
                                        <h2>
                                            <span className="count">{countup && <CountUp end={val.count} />}</span>
                                            <span>+</span>
                                        </h2>
                                        <p>{val.text}</p>
                                    </motion.div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="col">
                    <motion.div viewport={{ once: true }} initial={{x: "100%"}} whileInView={{x: "0"}} transition={{duration: 0.5}} className="instructor-content">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                        <Link to='/sign-up' className="lab-btn">{btnText}</Link>
                    </motion.div>
                </div>

                <div className="col">
                    <div className="instructor-thumb">
                        <img src='/src/assets/images/instructor/01.png' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};

export default AboutUs;
