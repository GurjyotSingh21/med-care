import React, { useState } from 'react';
import '../../public/styles/main.css'; 

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason:'',
    dname:'',
    date:'',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Message sent and user saved successfully!');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      // Clearing the form fields after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        dname: '',
        date: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };
  
  return (
    <div className="background-container">
    {
      <section className='book' id='book'>
    <div className='form'>
    <div className="form-container">
      <h2>Contact MedCare Hospital</h2>
      <form onSubmit={handleSubmit} method='post'>
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

      </form>
    </div>
    </div>
    </section>
   }
   </div>
  );
}

export default Book;
