
import React from 'react'
import "./InvoiceCreateNew.css"
import Menubar2 from './Menubar2'

const InvoiceCreateNew = () => {

  const products = [
    { name: 'ipod 2021', rate: 1000, qty: 10, amount: 10000 },
    { name: 'Apple Macbook', rate: 1500, qty: 10, amount: 150000 },
    { name: 'i phone 12', rate: 885, qty: 10, amount: 8850 },
  ];


  const invoiceData = {
    recipient: {
      name: "John Smith",
      address: "4204 Liberty Avenue, 4248 Tustin, CA",
      vat: "12345678",
      email: "company.mail@gmail.com",
      phone: "+386 714 905 8385"
    },
    invoice: {
      number: "001/2021",
      date: "January 1, 2021"
    },
    tasks: [
      { description: "Website redesign", hours: 60, rate: 15, amount: 900 },
      { description: "Newsletter template design", hours: 20, rate: 12, amount: 240 }
    ],
    subtotal: 1140,
    discount: 57,
    total: 1083
  };


  return (
    <>
    <div className=''>
      <div><Menubar2/></div>
      <div className='InvoiceCreateNew-container'>

      <div className='InvoiceCreateNew-combine-container flex gap-4'>
         {/* left container */}
        <div className='InvoiceCreateNew-Left-container'>
        <div className="invoice-form">
        <p className='createnewinvoice font-bold'>Create New Invoice</p>

        <div className='camera'>
          <img className='camera1' src='./images/camera1.png'>
          </img>
        </div>

        <div className='main-form-group'>
        <div className="form-group">
          <div className="form-control">
            <label className='font-bold'>Invoice Id</label>
            <input type="text"   placeholder='#876370' />
          </div>
          <div className="form-control">
            <label className='font-bold'>Date</label>
            <input type="date"  placeholder='2021-12-01'/>
          </div>
        </div>
        <div className="form-control">
          <label className='font-bold'>Name</label>
          <input type="text" value="" placeholder='Alison G.' />
        </div>
        <div className="form-group">
          <div className="form-control">
            <label className='font-bold'>Email</label>
            <input type="email" value="" placeholder='Example@gmail.com' />
          </div>
          <div className="form-control">
            <label className='font-bold'>Address</label>
            <input className='font-thin' type="text" placeholder='Street' value=""  />
            <img className='locationImage w-3 h-3' src='./images/location icon.png'></img>
          </div>
        </div>
        </div>
        <div className='flex'>
        <h2 className='font-bold'>Product Description</h2>
        <button className="add-product-btn">+</button>
        </div>
        <table>
          <thead>
            <tr className='font-bold text-[12px] '>
              <th>Product Name</th>
              <th>Rate</th>
              <th>QTY</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-[10px]'>
            {products.map((product, index) => (
              <tr key={index}>
                <td className='text-blue-500'>{product.name}</td>
                <td>${product.rate}</td>
                <td>{product.qty} Pcs</td>
                <td style={{ color: 'green' }}>${product.amount}</td>
                <td>
                  <button className="delete-btn"><img className='dltbtn1 w-3 h-3' src='./images/Delete2.png'></img></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="form-group buttons">
          <button className="send-invoice-btn">Send Invoice</button>
          <button className="create-invoice-btn">Create Invoice</button>
        </div>
      </div>
 
        </div>




        {/* right container */}
        <div className='InvoiceCreateNew-Right-container'>
        <div className="invoice-preview">
        <header>
        <div className='flex'>
        <h1 className='font-bold'>Preview</h1>
        <img className=' downloadbtn w-4 h-4 gap-4' src='./images/Download (2).png'></img>
        <img className='printbtn w-4 h-4 gap-4' src='./images/Group.png'></img>
        </div>
          <div className='invoicemainheader flex bg-slate-100'>
          <div className="header-left">
           
           <div className="company-logo"><img src='./images/logo (2).png'></img>           
           </div>
         </div>
         <div className="header-right">
           <div>
             <span>your.mail@gmail.com</span>
           </div>
           <div>
             <span>+386 897 211 315</span>
           </div>
         </div>
          </div>
        </header>
        <main>
          <div className='mainbody1 flex text-[8px] gap-48'>
          <section className="recipient">
            <h2 className='text-[8px] font-bold'>RECIPIENT</h2>
            <p>{invoiceData.recipient.name}</p>
            <p>{invoiceData.recipient.address}</p>
            <p>VAT No.: {invoiceData.recipient.vat}</p>
            <p>Email: {invoiceData.recipient.email}</p>
            <p>Phone: {invoiceData.recipient.phone}</p>
            {/* <p>company.mail@gmail.com</p>
            <p>+386 714 505 8385</p> */}
          </section>
          <section className="invoice-details text-right">
            <h2 className='text-[12px] font-bold'>Invoice</h2>
            <p className='text-[8px] font-bold'>Invoice No.:<br/> {invoiceData.invoice.number}</p>
            <p className='text-[8px] font-bold'>Invoice Date:<br/> {invoiceData.invoice.date}</p>
            
          </section>
          </div>
          <section className="task-list text-right">
            <table>
              <thead className='text-right'>
                <tr className='text-[10px] font-bold text-right'>
                  <th>Task Description</th>
                  <th>Hours</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className='text-[10px] text-right'>
                {invoiceData.tasks.map((task, index) => (
                  <tr key={index}>
                    <td>{task.description}</td>
                    <td>{task.hours}</td>
                    <td>{task.rate} USD</td>
                    <td>{task.amount}.00 USD</td>
                  </tr>
                ))}

<section className="summary">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>{invoiceData.subtotal}.00 USD</span>
            </div>
            <div className="summary-item">
              <span>Discount 5%</span>
              <span>- {invoiceData.discount}.00 USD</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>{invoiceData.total}.00 USD</span>
            </div>
          </section>


          
              </tbody>
            </table>
            
          </section>
          <section className="notes1 text-center ">
           
            <p>Transfer the amount to the business account below. Please include invoice number on your check.</p>
            <p>BANK: <span className='font-bold '>FTSBUS33</span></p>
            <p>IBAN: <span className='font-bold '>GB82-1111-2222-3333</span></p>
          </section>
         
        </main>
        <section className="notes2 text-left ">
            <h2 className='font-bold'>Notes</h2>
            <p className='text-[10px]'>All amounts are in dollars. Please make the payment within 15 days from the issue of date of this invoice.
               Tax is not charged on the basis of paragraph 1 of Article 94 of the Value Added Tax Act (I am not liable for VAT)..</p>
            <p className='text-[10px]'>Thank you for you confidence in my work.</p>
            <p className='text-[10px]'>Signiture</p>
          </section>
      </div>
          
        </div>

      </div>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default InvoiceCreateNew