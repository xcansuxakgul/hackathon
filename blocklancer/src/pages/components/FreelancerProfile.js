// FreelancerProfile.js
import React from 'react';
import './FreelancerProfile.css'; 
function FreelancerProfile() {
    if (typeof window !== 'undefined') {
        return (
            <h1>Freelancer Profile</h1>
        );
      }
    
      return null;
}

export default FreelancerProfile;