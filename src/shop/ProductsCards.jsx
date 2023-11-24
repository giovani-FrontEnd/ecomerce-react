import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye , FaHeart, FaShoppingCart } from "react-icons/fa";
import Ratting from '../components/Ratting';

const ProductsCards = ({GridList, products}) => {

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
        {
            products.map((product, i) => (
                <div key={i} className='col-lg-4 col-md-6 col-12'>
                    <div className="product-item">
                        {/* product images  */}
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} />
                            </div>

                            {/* product action links  */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`}><FaEye /></Link>
                                <a href="#">
                                    <FaHeart />
                                </a>
                                <Link to='/cart-page'><FaShoppingCart /></Link>
                            </div>
                        </div>

                        {/* product content  */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>
                            <p className='productRating'>
                                <Ratting />
                            </p>
                            <h6>{product.price}</h6>
                        </div>
                    </div>

                    {/* list style  */}
                    <div className="product-list-item">
                        {/* product images  */}
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} />
                            </div>

                            {/* product action links  */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`}><FaEye /></Link>
                                <a href="#">
                                    <FaHeart />
                                </a>
                                <Link to='/cart-page'><FaShoppingCart /></Link>
                            </div>
                        </div>

                        {/* product content  */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>
                            <p className='productRating'>
                                <Ratting />
                            </p>
                            <h6>{product.price}</h6>
                        </div>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}

export default ProductsCards
