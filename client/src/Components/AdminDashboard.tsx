import React, { useEffect } from 'react';

import { fetchData } from '@Actions/PatientAction';
import { useAppDispatch, useAppSelector } from '@Services/hooks';
import Link from './Link';
import { routes } from './../main';

const AdminDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const patientsList = useAppSelector(state => state.patients.data);
  const loading = useAppSelector(state => state.patients.loading);
  const error = useAppSelector(state => state.patients.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patientsList.map((patient, index) => (
          <li className="list-none" key={index}>
            <Link to={routes.patient}>{patient.name} {patient.first_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
