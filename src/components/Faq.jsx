import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Faq = () => {

  // Static data regarding the frequently asked questions.

  return (
    <>
      <Row align='center'><Typography.Title level={1} className='heading'>
          Frequently Asked Questions
        </Typography.Title></Row>
      
      <Row align='center'>
        <Col span={12}>
          <Typography.Title level={1} className='heading'>
            Q: Where can I find general cryptocurrency market information?        
          </Typography.Title>
        </Col>
        <Col span={12}>
          <Typography >
            A: General information about the cryptocurreny marketplace can be found by either navigating to the 'Home' link in the top navigation bar, the logo on the left of the navigation bar, or by clicking the 'Homepage' link in the footer.       
          </Typography>
        </Col>
        <Col span={12}>
          <Typography.Title level={1} className='heading'>
            Q: Where is the live information obtained from?        
          </Typography.Title>
        </Col>
        <Col span={12}>
          <Typography >
            A: All of the live information regarding cryptocurrency prices, caps, volumes, and exchanges information is acquired from the CoinRanking API hosted on RapidAPI.com.       
          </Typography>
        </Col>
        <Col span={12}>
          <Typography.Title level={1} className='heading'>
            Q: Where is the news information obtained from?
       
          </Typography.Title>
        </Col>
        <Col span={12}>
          <Typography >
            A: All of the news information regarding news article information, site host, time posted, and more info is acquired from the BingNews API hosted on RapidAPI.com.       
          </Typography>
        </Col>
        </Row>
    </>
  )
}

export default Faq