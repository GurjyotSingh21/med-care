import React from 'react'

const Bookpage = () => {
  return (
    <form action="">
    <div>
      <label htmlFor="fullname">fullname</label>
      <input type="text" name='fullname' id='fullname'/>
    </div>
    <div>
      <label htmlFor="Phone no">Phone no</label>
      <input type="number" name='Phone no' id='Phone no'/>
    </div>
    <div>
      <label htmlFor="email">email</label>
      <input type="email" name='email' id='email'/>
    </div>
    <div>
      <label htmlFor="Reason">Reason</label>
      <input type="text" name='Reason' id='Reason'/>
    </div>
    <div>
      <label htmlFor="date">date</label>
      <input type="date" name='date' id='date'/>
    </div>
    <div>
      <label htmlFor="time">time</label>
      <input type="time" name='time' id='time'/>
    </div>
    <div>
      <label htmlFor="Extranote">Extranote</label>
      <input type="textarea" name='Extranote' id='Extranote'/>
    </div>
    <div>
      <label htmlFor="fullname">fullname</label>
      <input type="text" name='fullname' id='fullname'/>
    </div>
  </form>
  )
}

export default Bookpage;