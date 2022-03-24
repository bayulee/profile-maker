import React from 'react'
import { useState } from 'react'

function ProfileForm({submit}) {
    const [profile, setProfile]= useState({
     firstname:"",
     lastname:"",
     email:"",
     phone:""
    });

    const handler=(event)=>{
setProfile((prev)=>({
 ...prev,
 [event.target.name]: event.target.value
}));
    };

    const handleForm =(e)=>{
        e.preventDefault();
        submit(profile);
    }
  return (
    <div className='formContainer'>
    <h3>profile form</h3>
    <form>
    <fieldset>
 <legend>Bio Data</legend>
    <div className='names'>
  
    <label> 
    First Name
    <input type="text" name="firstname" onChange={handler}/>
    </label>

    <label> 
    Last Name
    <input type="text" name="lastname" onChange={handler}/>
    </label>

    <label> 
    Email
    <input type="email" name="email" onChange={handler}/>
    </label>

    <label> 
    phone
    <input type="tel" name="phone" onChange={handler}/>
    </label>
    </div>

    </fieldset>
 
  <button className='form' onClick={handleForm}> Add profile</button>
  </form>
    
    </div>
  )
}

export default ProfileForm