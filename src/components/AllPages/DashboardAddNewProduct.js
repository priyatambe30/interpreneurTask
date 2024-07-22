import React, { useState } from 'react'
import "./DashboardAddNewProduct.css"

const DashboardAddNewProduct = () => {

  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [descriptions, setDescriptions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      productName,
      brand,
      price,
      isNegotiable,
      descriptions
    });
  };


  return (
    <>
    <div className='addnewproduct'>

    
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Add a New Product</h3>

      <div className='cameraimg' >
        <img src='./images/camera1.png'></img>
      </div>


      <div className="All-form-group">
      <div className="form-group">
        <div><label htmlFor="productName">Product Name</label></div>
        <div>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Mackbook Pro 2021 14''"
        />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input className='form-group-input'
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Apple"
        />
      </div>


      <div className="flex">
      <div className="form-group1 gap-4">
        <label htmlFor="price">Price</label>
        <input className='form-group-input'
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="$1200"
        />
        </div>
        <div className="negotiable-checkbox ">
          <input className='form-group-input'
            type="checkbox"
            id="isNegotiable"
            checked={isNegotiable}
            onChange={(e) => setIsNegotiable(e.target.checked)}
          />
          <label className="text-[11px] " htmlFor="isNegotiable">Negotiable</label>
        </div>
      
      </div>

      <div className="form-group mt-4">
        <label  htmlFor="descriptions">Descriptions</label><br/>
        <textarea className='desc-textarea text-[10px]'
          id="descriptions"
          value={descriptions}
          onChange={(e) => setDescriptions(e.target.value)}
          placeholder="This the New creation Of apple  This the New creation Of apple This the New creation Of
apple This the New creation Of apple."
        />
      </div>

      </div>

      <div>
      <button type="submit" className="save-button"><img src='./images/Download (3).png'></img>
        <span role="img" aria-label="save"></span> Save Product
       
      </button>
      </div>
    </form>
    </div>
    
    
    
    </>
  )
}

export default DashboardAddNewProduct