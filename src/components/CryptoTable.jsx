import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Table } from 'antd';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';

const CryptoTable = () => {

// React hooks to store crypto data and list of cryptos.

  const { data, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(data.data.coins);


// Creating data object to populate antd table with cryptocurrency data.

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      sorter: (a, b) => a.rank - b.rank,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => (
        <>
        $ {millify(price, { precision: 3,})}
        </>
      ),
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCap',
      key: 'marketCap',
      render: (cap) => (
        <>
          {millify(cap ,{ precision: 2, space: true})}
        </>
      ),
      sorter: (a, b) => a.marketCap - b.marketCap,
    },
    {
      title: 'Percent Change',
      dataIndex: 'change',
      key: 'change',
    },
  ]

// Rendering the table by passing cryptos list object as the dataSource and providing columns.

  return (
    <>
    <Table columns={columns} dataSource={cryptos} />
    </>
  )
}

export default CryptoTable