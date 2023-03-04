import React from 'react';
import FreelancerProfile from './components/FreelancerProfile';
import EmployeeProfile from './components/EmployeeProfile';

function ProfilePage({ userType }) {
  return (
    <div>
      {userType === 'freelancer' && <FreelancerProfile />}
      {userType === 'employee' && <EmployeeProfile />}
    </div>
  );
}

export default ProfilePage;