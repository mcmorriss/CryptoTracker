import './App.css';
import React from 'react';
import { Typography, Space, Layout } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

import Cryptos from './components/Cryptos';
import News from './components/News';
import Home from './components/Home';
import Convert from './components/Convert';
import Faq from './components/Faq';
import CryptoTable from './components/CryptoTable';

function App() {
  return (
    <div className='app'>

      <div className='navbar'>
          <Navbar />
      </div>

      <div className='main'>
          <Layout>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/cryptos' element={<Cryptos />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/convert' element={<Convert />} />
                  <Route path='/faq' element={<Faq />} />
              </Routes>
          </Layout>

          <div className='footer'>
          <Typography.Title level={5} style={{color: 'white'}}>
              CryptoTracker (All Rights Reserved)
          </Typography.Title>
          <Space>
              <Link to='/'>Home</Link>
              <Link to='/cryptos'>Cryptos</Link>
              <Link to='/news'>News</Link>
              <Link to='/convert'>Convert</Link>
              <Link to='/faq'>FAQ</Link>
          </Space>
          <Typography level={3} style={{color: 'white'}}>
              Developed by Michael Morriss 
          </Typography>
      </div>
      </div>


    </div>
  );
}

export default App;
