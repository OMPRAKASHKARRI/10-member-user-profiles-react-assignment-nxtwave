import React from 'react';
import { Row, Col, Empty, Spin } from 'antd';
import UserCard from './UserCard';
import { User } from '../types/User';

interface UserGridProps {
  users: User[];
  loading: boolean;
  onLike: (userId: number) => void;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
}

const UserGrid: React.FC<UserGridProps> = ({ users, loading, onLike, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '400px' 
      }}>
        <Spin size="large" />
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '400px' 
      }}>
        <Empty description="No users found" />
      </div>
    );
  }

  return (
    <Row gutter={[24, 24]} justify="start">
      {users.map((user) => (
        <Col
          key={user.id}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={6}
        >
          <UserCard
            user={user}
            onLike={onLike}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
};

export default UserGrid;