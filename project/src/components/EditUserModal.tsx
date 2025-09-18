import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { User } from '../types/User';

interface EditUserModalProps {
  visible: boolean;
  user: User | null;
  onCancel: () => void;
  onSave: (user: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ visible, user, onCancel, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user && visible) {
      form.setFieldsValue({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        companyName: user.company.name,
      });
    }
  }, [user, visible, form]);

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      if (user) {
        const updatedUser: User = {
          ...user,
          name: values.name,
          username: values.username,
          email: values.email,
          phone: values.phone,
          website: values.website,
          address: {
            street: values.street,
            suite: values.suite,
            city: values.city,
            zipcode: values.zipcode,
          },
          company: {
            name: values.companyName,
          },
        };
        onSave(updatedUser);
        message.success('User updated successfully');
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Edit User"
      open={visible}
      onCancel={handleCancel}
      width={600}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save Changes
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        style={{ paddingTop: '20px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter the full name' }]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please enter the username' }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter the email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please enter the phone number' }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true, message: 'Please enter the website' }]}
          >
            <Input placeholder="Enter website" />
          </Form.Item>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Form.Item
            name="street"
            label="Street"
            rules={[{ required: true, message: 'Please enter the street' }]}
          >
            <Input placeholder="Enter street address" />
          </Form.Item>

          <Form.Item
            name="suite"
            label="Suite"
            rules={[{ required: true, message: 'Please enter the suite' }]}
          >
            <Input placeholder="Enter suite" />
          </Form.Item>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: 'Please enter the city' }]}
          >
            <Input placeholder="Enter city" />
          </Form.Item>

          <Form.Item
            name="zipcode"
            label="Zipcode"
            rules={[{ required: true, message: 'Please enter the zipcode' }]}
          >
            <Input placeholder="Enter zipcode" />
          </Form.Item>
        </div>

        <Form.Item
          name="companyName"
          label="Company"
          rules={[{ required: true, message: 'Please enter the company name' }]}
        >
          <Input placeholder="Enter company name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;