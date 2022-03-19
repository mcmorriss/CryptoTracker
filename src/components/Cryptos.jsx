import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Table, Typography } from 'antd';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptos = () => {

  // React hooks for getting crypto data from api and creating objects.
  const { data, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(data.data.coins);

  console.log(cryptos);

  // Mapping through list of cryptocurrencies to get data such as price, trend, etc.
  return (
    <>
    
    <div>
      <Row align='center'>
        <Typography.Title level={1} className='heading'>
          Most Popular Cryptocurrencies
        </Typography.Title>
      </Row>
      <Row gutter={[32, 32]} className='crypto-card-container'>
            {cryptos.map((currency) => (
              <Col xs={24} sm={12} lg={8} className='crypto-card' key={currency.uuid}>
                  <Link to={`/crypto/${currency.uuid}`}>
                      <Card
                        title={`${currency.rank}: ${currency.name}`}
                        extra={<img className='crypto-image' src={currency.iconUrl} />}
                        hoverable
                      >
                        <p>Price : $ {millify(currency.price)}</p>
                        <p>Market Cap : $ {millify(currency.marketCap)}</p>
                        <p>Volume (24hrs) : {millify(currency.change)} %</p>
                      </Card>
                  </Link>
              </Col>
          ))}
      </Row>
    </div>        
    </>
  )
}

export default Cryptos