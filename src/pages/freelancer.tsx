 // Next, React
import { FC, useEffect, useState } from 'react';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../components/RequestAirdrop';
import { SendTransaction } from '../components/SendTransaction';


// Store
import useUserSOLBalanceStore from '../stores/useUserSOLBalanceStore';

const FreelancerPage: FC = ({ }) => {

 
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    //<RoleSelection/>
    
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
          <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'></div>
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
            Job Alerts
          </h1>
        </div>
        <div className="card" style={{ border: '1px solid black', margin: '20px' }}>
          <div className="card-body">
            <h5 className="card-title">Job Title</h5>
            <p className="card-text" style={{textAlign: 'justify'}}>We are currently seeking a talented front-end developer to join our team on a freelance basis. If you have a passion for web development and want to work on exciting projects with a dynamic team, we want to hear from you!

              Responsibilities:

              Develop and maintain responsive web applications
              Collaborate with designers and back-end developers to implement new features
              Ensure the technical feasibility of UI/UX designs
              Optimize applications for maximum speed and scalability</p>
              <SendTransaction />
          </div>
        </div>
    
        
      </div>
    </div>
  );
}; 
export default FreelancerPage;

/* 
const FreelancerPage: FC = () => {
  return (
    <div>
      <h1>Freelancer Page</h1>
      <p>This is the Freelancer page.</p>
    </div>
  );
};

export default FreelancerPage; */