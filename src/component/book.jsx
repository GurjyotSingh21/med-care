import React, { useState } from 'react';
import '../../public/styles/main.css'; // Import the CSS file for styling

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason:'',
    dname:'',
    time:'',
    date:'',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div className="background-container">
    {
      <section className='book' id='book'>
    <div className='form'>
    <div className="form-container">
      <h2>Contact MedCare Hospital</h2>
      <form onSubmit={handleSubmit}>
      <label className="form-label">Name</label>
        <input
          type="text"
          className="form-input"
          name="name"
          id='name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-input"
          name="email"
          id='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label className="form-label">Phone</label>
        <input
          type="tel"
          className="form-input"
          name="phone"
          value={formData.phone}
          id='phone'
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <label className="form-label">Reason</label>
        <input
          type="text"
          className="form-input"
          name="reason"
          value={formData.reason}
          id='reason'
          onChange={(e) => setFormData({ ...formData,reason : e.target.value })}
        />
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-input"
          name="date"
          value={formData.date}
          id='date'
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <label className="form-label">Doctor name</label>
        <input
          type="text"
          className="form-input"
          name="dname"
          value={formData.dname}
          id='dname'
          onChange={(e) => setFormData({ ...formData, dname: e.target.value })}
        />
        <label className="form-label">Message</label>
        <textarea
          className="form-input"
          name="message"
          value={formData.message}
          id='message'
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className="form-submit">
          Book
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" className="form-submit">
          Clear
        </button>
      </form>
    </div>
    </div>
    </section>
   }
   </div>
  );
}

export default Book;
