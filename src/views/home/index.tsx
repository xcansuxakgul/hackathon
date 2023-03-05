// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { export_default } from '@solana/web3.js';

type UserProfile = "freelancer" | "employee";
// Define a component for the pop-up window
const Popup = ({ handleProfileSelection }: { handleProfileSelection: (profile: UserProfile) => void }) => {
  // Create a state variable to track the user's profile selection
  const [profile, setProfile] = useState<UserProfile | null>(null);

  // Define a function to handle the user's profile selection and update the state
  const handleSelection = (selectedProfile: UserProfile) => {
    setProfile(selectedProfile);
  };

  // If the user has not selected a profile, display the pop-up
  if (!profile) {
    return (
      <div className="popup-container">
        <div className="popup-content">
          <h2>Please select your profile:</h2>
          <button onClick={() => handleSelection("freelancer")}>Freelancer</button>
          <button onClick={() => handleSelection("employee")}>Employee</button>
        </div>
      </div>
    );
  }

  // If the user has selected a profile, call the handleProfileSelection function to route them to the appropriate page
  handleProfileSelection(profile);

  // Return null since the pop-up is no longer displayed
  return null;
};
export const HomeView: FC = ({ }) => {
  const router = useRouter();

  // Define a function to handle the user's profile selection and route them to the appropriate page
  const handleProfileSelection = (profile: UserProfile) => {
    // Route the user to the appropriate page based on their profile selection
    if (profile === "freelancer") {
      // Redirect to the freelancer page
      router.push("/freelancer");
    } else {
      // Redirect to the employee page
      router.push("/employee");
    }
  };

  return (
    //<RoleSelection/>
    
    <div className="md:hero-content flex flex-col">
      <Popup handleProfileSelection={handleProfileSelection} />
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
          <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'></div>
         
        </div>
        <div className="card" style={{ border: '1px solid black', margin: '20px' }}>
          <div className="card-body">
            
          </div>
        </div>
      </div>
    </div>
  );
};