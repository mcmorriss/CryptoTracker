import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, DollarOutlined, BulbOutlined, FundOutlined, CompassOutlined } from '@ant-design/icons';
import { QuestionCircleOutlined, EuroOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {

    // Organization and styling of the navigation bar.


  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
                <Link to="/">CryptoTracker</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<DollarOutlined />}>
                <Link to='/cryptos'>Cryptos</Link>
            </Menu.Item>

            <Menu.Item icon={<EuroOutlined />}>
                <Link to='/convert'>Convert</Link>
            </Menu.Item>
            <Menu.Item icon={<QuestionCircleOutlined />}>
                <Link to='/faq'>FAQ</Link>
            </Menu.Item>
        </Menu>

    </div>
  )
}

export default Navbar