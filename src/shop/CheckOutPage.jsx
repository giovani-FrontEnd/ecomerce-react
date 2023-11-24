import React, { useState } from 'react'

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("vise");

    // handle Tap change 
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  return (
    <div className='modalCard'>
      <button variant="primary" className="py-2" onClick={handleShow}>Proced to Checkout</button>

      {show && (
        <div
        onHide={handleClose}
        className='modal fade'
      >
        <div className="modal-dialog">
            <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
            <div className="modal-content">
                <div className='modal-body'>
                    <div className="tabs mt-5">
                        <ul>
                            <li><a href="#vise">a</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default CheckOutPage
