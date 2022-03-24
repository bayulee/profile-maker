import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import ProfileCard from './components/ProfileCard';

function App() {
  const [allProfiles, setAllProfiles]=useState([
    {
      firstname:"aya",
      lastname:"mensah",
      email:"mansaj@gmail.com",
      phone:"055343234"
    }
  ])
  const updateProfiles=(profile)=>{
    let arr =allProfiles;
    arr.push(profile);
    setAllProfiles([...arr]);
  };

  return (
    <div  className='app'>
    <h1>Profile Maker</h1>
    
    <ProfileForm submit={updateProfiles}/>
    <hr/>
    <div className='list'>
    {
      allProfiles.map((person, index) =>(
        <ProfileCard key={index} card={person}/>
      ))
    }
    </div>
    
    </div>
  

  )
}

export default App