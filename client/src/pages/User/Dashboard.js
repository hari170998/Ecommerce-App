import React from 'react';
import Layout from '../../componenets/Layout/Layout.js';
import { useAuth } from '../../context/auth.js';
import UserMenu from './../../componenets/Layout/UserMenu';
export const Dashboard = () => {
  const [auth]=useAuth();
  return (
    <Layout tiyle={'Dashboard - Ecommerce App'}>
         <div className='container-fluid p-3 m-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9'>                
                <div className='card w-75 p-3'>
                <h3>{auth?.user?.name}</h3>
                <h3>{auth?.user?.email}</h3>
                <h3>{auth?.user?.phone}</h3>
                <h3>{auth?.user?.address}</h3>
                </div>
                </div>
                </div>
                </div>
        
    </Layout>
  );
};

