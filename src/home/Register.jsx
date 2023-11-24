import React from 'react'
import {motion} from 'framer-motion';

const subTitle = 'Save the day';
const title = (
    <h2 className='title'>Join on day long free workshop for <b>advance <span>mastering</span></b> on sales</h2>
)
const desc = 'Limited time offer! Hurry Up';

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
        <div className="container">
            <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                <motion.div viewport={{ once: true }} initial={{x: "-100%", opacity: 0}} whileInView={{x: "0", opacity: 1}} transition={{duration: 0.8}} className="col">
                    <div className="section-header">
                        <span className='subtitle'>{subTitle}</span>
                        {title}
                        <p>{desc }</p>
                    </div>
                </motion.div>

                <div className="col">
                    <motion.div viewport={{ once: true }} initial={{x: "100%", opacity: 0}} whileInView={{x: "0", opacity: 1}} transition={{duration: 0.8}} className="section-wrapper">
                        <h4>Register Now</h4>
                        <form className='register-form'>
                            <input type="text" name='name' placeholder='Username' className='reg-input' />
                            <input type="email" name='email' placeholder='Email' className='reg-input' />
                            <input type="number" name='number' placeholder='Phone' className='reg-input' />
                            <button type='submit' className="lab-btn">Register Now</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
