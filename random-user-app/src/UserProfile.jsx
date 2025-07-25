import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <img src={user.picture.large} alt="User" className={styles.avatar} />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={fetchUser} className={styles.button}>Load New User</button>
    </div>
  );
};

export default UserProfile;
