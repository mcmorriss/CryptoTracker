import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

// React Components
import Cryptos from './Cryptos';
import News from './News';
import CryptoTable from './CryptoTable';

const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const info = data?.data?.stats;

    if(isFetching) return 'Loading ... ';

  return (
    <>
    <Typography.Title level={2} className='heading'>
    General Cryptocurrency Statistics
    </Typography.Title>
    <Row>
        <Col span={12}>
            <Card>Total Cryptocurrencies
                <Statistic title='All tradeable coins' value={info.total}/>
            </Card>
        </Col>
        <Col span={12}>
            <Card>Total Market Cap
                <Statistic title='In Trillions' value={millify(info.totalMarketCap, 
                {precision: 3, space: true})}/>
            </Card>
        </Col>
        <Col span={12}>
            <Card>Total Exchanges
                <Statistic value={info.totalExchanges}/>
            </Card>
        </Col>
        <Col span={12}>
            <Card>Total Markets
                <Statistic value={info.totalMarkets}/>
            </Card>
        </Col>
        <Col span={12}>
            <Card>Total Volume (24hrs)
                <Statistic title='In Billions' value={millify(info.total24hVolume, 
                {precision: 2, space: true})}/>
            </Card>
        </Col>
    </Row>
    <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>CryptoTracker:  10 Most Popular Cryptocurrencies
        </Typography.Title>
        <Typography.Title level={3} className='show-more'><Link to='/cryptos'>See Top 100 Cryptos</Link>
        </Typography.Title>
    </div>
    <CryptoTable simplified />

    </>
  )
}

export default Home