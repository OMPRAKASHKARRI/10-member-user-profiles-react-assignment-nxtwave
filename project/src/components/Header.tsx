import React from 'react';
import { Typography, Row, Col } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface HeaderProps {
  userCount: number;
}

const Header: React.FC<HeaderProps> = ({ userCount }) => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
      padding: '40px 0',
      marginBottom: '40px',
      borderRadius: '0 0 24px 24px'
    }}>
      <Row justify="center">
        <Col xs={22} sm={20} md={18} lg={16} xl={14}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <TeamOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
            <Title level={1} style={{ color: 'white', margin: '0 0 8px 0', fontSize: '2.5rem' }}>
              User Management System
            </Title>
            <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px' }}>
              Manage and interact with {userCount} users
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;