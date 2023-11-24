import React, { useState } from 'react'
import { FaUser, FaGlobeAmericas } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import ProductData from '../products.json';
import {Link} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import SelectedCategory from '../components/SelectedCategory';
import {motion} from 'framer-motion';

const title = (
    <h2>search your one from <span>Thousand</span> of products</h2>
)

const desc = "we have the largest collection of products"


const bannerList = [
    {
    iconName: <FaUser />,
    text: "1.5 Million Customers",
    },
    {
    iconName: <IoIosNotifications />,
    text: "More then 2000 Marchent",
    },
    {
    iconName: <FaGlobeAmericas />,
    text: "Buy Anything Online",
    },
    ];


const Banner = () => {
    const  [searchInput, setSearchInput] = useState("")
    const  [filteredProducts, setFilteredProducts] = useState(ProductData) 

    // search functionality 
    const handleSearch = (e) => {
      const searchTerm = e.target.value
      setSearchInput(searchTerm);

      // filterung products based on search 
      const filtered = ProductData.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredProducts(filtered)
    }

  return (
    <div className='banner-section style-4'>
      <div className="container">
        <motion.div initial={{y: "100%"}} animate={{y: "0"}} transition={{duration: 0.5}} className='banner-content'>
            {title}
            <form>
              <SelectedCategory select='all' />
                <input type="text" name='search' id='search' placeholder='Search your product'
                  value={searchInput} onChange={(e) => handleSearch(e)}
                />
                <button type='submit'>
                  <FaSearch />
                </button>
            </form>
            <p>{desc}</p>
            <ul className='lab-ul'>
              {
                searchInput && filteredProducts.map((product, i) => {
                  return <li key={i}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                })
              }
            </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
