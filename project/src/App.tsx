import React, { useState, useEffect } from 'react';
import { Layout, message, Row, Col } from 'antd';
import { User } from './types/User';
import { fetchUsers } from './services/userService';
import Header from './components/Header';
import UserGrid from './components/UserGrid';
import EditUserModal from './components/EditUserModal';
import 'antd/dist/reset.css';

const { Content } = Layout;

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const userData = await fetchUsers();
      setUsers(userData);
    } catch (error) {
      message.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (userId: number) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, liked: !user.liked } : user
      )
    );
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditModalVisible(true);
  };

  const handleSaveUser = (updatedUser: User) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditModalVisible(false);
    setSelectedUser(null);
  };

  const handleDelete = (userId: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const handleModalCancel = () => {
    setEditModalVisible(false);
    setSelectedUser(null);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header userCount={users.length} />
      
      <Content>
        <Row justify="center">
          <Col xs={22} sm={20} md={20} lg={22} xl={20}>
            <UserGrid
              users={users}
              loading={loading}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Col>
        </Row>
      </Content>

      <EditUserModal
        visible={editModalVisible}
        user={selectedUser}
        onCancel={handleModalCancel}
        onSave={handleSaveUser}
      />

      <div style={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        color: '#999',
        borderTop: '1px solid #f0f0f0',
        marginTop: '60px'
      }}>
        <p>Built with React, TypeScript & Ant Design</p>
      </div>
    </Layout>
  );
}

export default App;