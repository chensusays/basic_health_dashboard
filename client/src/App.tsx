import React from 'react';
import Header from './Components/Header';
import AdminDashboard from './Components/AdminDashboard';

const App: React.FC = () => {
  // onload retrieve list of patients from api GET /patients
  // display patients list to admin as first and last name with age
  // each patient is linkable via id

  // self assigned bonus
  // sort by most recently used/updated

  return (
    <>
      <Header />
      <AdminDashboard />
    </>
  );
};

export default App;
