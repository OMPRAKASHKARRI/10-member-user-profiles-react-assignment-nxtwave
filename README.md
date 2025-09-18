# User Management System

A modern, responsive React application built with TypeScript and Ant Design for managing user data. This project demonstrates advanced React concepts including state management, form handling, and API integration.

## 🚀 Demo

Live demo: [User Management System](https://react-advanced-assignment.psamd.now.sh/)

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **User Management**: View, edit, and delete user profiles
- **Interactive Cards**: Like/unlike functionality with visual feedback
- **Modal Forms**: Clean editing interface with form validation
- **API Integration**: Fetches real user data from JSONPlaceholder API
- **Modern UI**: Built with Ant Design components and smooth animations
- **TypeScript**: Full type safety and better development experience

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Ant Design** - Professional UI component library
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd user-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Application header
│   ├── UserCard.tsx    # Individual user card
│   ├── UserGrid.tsx    # Grid layout for user cards
│   └── EditUserModal.tsx # Modal for editing users
├── services/           # API services
│   └── userService.ts  # User data fetching
├── types/              # TypeScript type definitions
│   └── User.ts         # User interface
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Key Features Explained

### User Cards
- Display comprehensive user information including contact details, address, and company
- Interactive like button with heart icon animation
- Hover effects with smooth transitions
- Responsive grid layout (1-4 columns based on screen size)

### Edit Functionality
- Modal-based editing interface
- Form validation with error messages
- Two-column layout for better space utilization
- Real-time form state management

### State Management
- Implements "Lifting State Up" pattern
- Centralized state in App component
- Props drilling for component communication
- Local state for UI interactions

### API Integration
- Fetches user data from JSONPlaceholder API
- Error handling with user-friendly messages
- Loading states with spinners
- Data transformation for UI requirements

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile** (xs): 1 column layout
- **Tablet** (sm/md): 2-3 column layout
- **Desktop** (lg/xl): 4 column layout

## 🎨 Design System

### Colors
- **Primary**: #1890ff (Blue)
- **Success**: #52c41a (Green)
- **Warning**: #fa8c16 (Orange)
- **Error**: #ff4d4f (Red)
- **Text**: #262626 (Dark Gray)

### Typography
- **Headers**: Ant Design Title components
- **Body**: Ant Design Text components
- **Icons**: Ant Design Icons with contextual colors

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📋 Assignment Requirements Met

✅ **React Knowledge**: Advanced hooks usage, component composition  
✅ **Ant Design**: Cards, Buttons, Icons, Modal, Form, Grid components  
✅ **Event Handling**: Click events, form submissions, state updates  
✅ **Form Management**: Validation, controlled inputs, modal forms  
✅ **Lifting State Up**: Centralized state management pattern  
✅ **Responsive Design**: Mobile-first approach with breakpoints  
✅ **API Integration**: JSONPlaceholder users endpoint  
✅ **TypeScript**: Full type safety and interfaces  

## 🌐 API Reference

**Endpoint**: `https://jsonplaceholder.typicode.com/users`  
**Method**: GET  
**Response**: Array of 10 user objects

```typescript
interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}
```

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## 📝 License

This project is created for educational purposes as part of a React assignment.

## 👨‍💻 Development Notes

- Uses modern React patterns with functional components and hooks
- Implements proper TypeScript interfaces for type safety
- Follows Ant Design design principles and component usage
- Responsive design tested on Chrome browser as required
- Clean code structure with separation of concerns

---

**Built with ❤️ using React, TypeScript, and Ant Design**
