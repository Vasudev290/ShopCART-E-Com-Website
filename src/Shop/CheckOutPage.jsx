import React,{ useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import "../Components/modal.css"

const CheckOutPage = () => {
  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState("visa")

  //handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const handleShow= () => setShow(true)
  const handleClose= () => setShow(false)

  
  const from = location.state?.from?.pathname || "/";
  const handleOrderConfirm= () => {
    alert("Your Order is placed successfully")
    localStorage.removeItem("cart");

  }


  return (
    <div className='modalCard'>
    <Button variant='primary' className='py-2' onClick={handleShow}> Proceed to Checkout</Button>

    <Modal
    show={show}
    onHide={handleClose}
    animation={false}
    className='modal fade'
    centered
    >
      <div className='modal-dialog'>
        <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
        <div className="modal-content">
            <div className="modal-body">
                <div className="tabs mt-3">
                  <ul className='nav nav-tabs' id='myTab' role='tablist'>
                    <li className='nav-item' role='presentation'>
                      <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} 

                      id='visa-tab'
                      data-toggle="tab"
                      role='tab'
                      aria-controls='visa'
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5QLt83wRsUdvg4zCmo2jwHWclgY9xAHdHQ&s" 
                      width="80" alt="" />
                      </a>
                      </li>
                      <li className='nav-item' role='presentation'>
                      <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`} 
                      id='paypal-tab'
                      data-toggle= "tab"
                      role='tab'
                      aria-controls='paypal'
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjHVQbSNU0dwOGF5iuSO2xNAVfJXaZ8TlRg&s" 
                      width="80" alt="" />
                      </a>
                      </li>
                  </ul>

                  {/* Content */}
                  <div className="tab-content" id='mytabContent'>
                    {/* Visa Content */}
                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active": ""}`}
                    id='visa'
                    role='tabpanel'
                    aria-labelledby='visa-tab'
                    >
                      {/* visa tab content */}
                      <div className="mt-4 mx-4">
                          <div className="text-center">
                            <h5>Credit card</h5>
                          </div>
                          <div className="form mt-3">
                            <div className="inputbox">
                              <input type="text" name='name' id='name' className='form-control' required />
                              <span>Cardholder Name</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name='number' min="1" max="999" id='number' 
                              className='form-control' required />
                              <span>Card Number </span> <i className='fa fa-eye'></i>
                            </div>
                            <div className='d-flex flex-row'>
                            <div className="inputbox">
                              <input type="text" name='number' min="1" max="999" id='number' 
                              className='form-control' required />
                              <span>Expiration Date</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name='number' min="1" max="999" id='number' 
                              className='form-control' required />
                              <span>CVV</span>
                            </div>
                            </div>
                            <div className="px-5 pay">
                               <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order</button>
                            </div>
                          </div>
                      </div>

                    </div>

                    {/* Paypal Content */}
                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active": ""}`}

                    id='paypal'
                    role='tabpanel'
                    aria-labelledby='paypal-tab'
                    >
                       <div className="mt-4 mx-4">
                          <div className="text-center">
                            <h5>Paypal Account Info</h5>
                          </div>
                          <div className="form mt-3">
                            <div className="inputbox">
                              <input type="text" name='name' id='name' className='form-control' required />
                              <span>Enter Your Email</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name='number' min="1" max="999" id='number' 
                              className='form-control' required />
                              <span>Your Name</span> 
                            </div>
                            
                            <div className='d-flex flex-row'>
                            <div className="inputbox">
                              <input type="text" name='number' min="1" max="999" id='number' 
                              className='form-control' required />
                              <span>Extra Info</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name='number' min="1" max="999" id='number' 
                              className='form-control' required />
                              <span></span>
                            </div>
                            </div>
                            
                            <div className="px-5 pay">
                               <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                            </div>
                          </div>
                      </div>

                    </div>
                  </div>

                  {/* payment desclaimer */}
                  <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer:</em>In no event shall payment or partial payment by owner for any material or service</p>
                </div>
            </div>
        </div>
      </div>

    </Modal>
    </div>
  )
}

export default CheckOutPage