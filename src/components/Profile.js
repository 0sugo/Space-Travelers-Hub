/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import MyMissions from '../profile/MyMissions';
import styles from './Profiless.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';

function Profile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinMission = mission.filter((mission) => mission.reservation === true);

  return (
    <div className={styles.container}>
      <MyMissions data={joinMission} />
    </div>
  );
}

export default Profile;
