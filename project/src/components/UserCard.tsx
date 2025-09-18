import React from 'react';
import { Card, Button, Typography, Space, Divider, message } from 'antd';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined, UserOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HomeOutlined, BankOutlined } from '@ant-design/icons';
import { User } from '../types/User';

const { Text, Title } = Typography;

interface UserCardProps {
  user: User;
  onLike: (userId: number) => void;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onLike, onEdit, onDelete }) => {
  const handleLike = () => {
    onLike(user.id);
    message.success(user.liked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    onDelete(user.id);
    message.success('User deleted successfully');
  };

  return (
    <Card
      className="user-card"
      style={{ 
        height: '100%', 
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
      hoverable
      actions={[
        <Button
          key="like"
          type="text"
          icon={user.liked ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
          onClick={handleLike}
          style={{ border: 'none' }}
        >
          {user.liked ? 'Liked' : 'Like'}
        </Button>,
        <Button
          key="edit"
          type="text"
          icon={<EditOutlined />}
          onClick={handleEdit}
          style={{ border: 'none', color: '#1890ff' }}
        >
          Edit
        </Button>,
        <Button
          key="delete"
          type="text"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
          style={{ border: 'none', color: '#ff4d4f' }}
        >
          Delete
        </Button>
      ]}
    >
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1890ff, #36cfc9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px',
            color: 'white',
            fontSize: '24px'
          }}
        >
          <UserOutlined />
        </div>
        <Title level={4} style={{ margin: '0 0 4px 0' }}>
          {user.name}
        </Title>
        <Text type="secondary">@{user.username}</Text>
      </div>

      <Divider style={{ margin: '16px 0' }} />

      <Space direction="vertical" size={8} style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MailOutlined style={{ color: '#1890ff', minWidth: '16px' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.email}
          </Text>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PhoneOutlined style={{ color: '#52c41a', minWidth: '16px' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.phone}
          </Text>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GlobalOutlined style={{ color: '#722ed1', minWidth: '16px' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.website}
          </Text>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HomeOutlined style={{ color: '#fa8c16', minWidth: '16px' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode}
          </Text>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BankOutlined style={{ color: '#13c2c2', minWidth: '16px' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.company.name}
          </Text>
        </div>
      </Space>
    </Card>
  );
};

export default UserCard;