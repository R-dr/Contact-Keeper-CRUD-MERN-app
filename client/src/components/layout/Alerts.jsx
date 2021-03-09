import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  console.log(alertContext.alerts);
  return (
    //dynamic alert class name with back ticks
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    ))
  );
};
