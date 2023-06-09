import { useSelector } from 'react-redux';
import MyMissions from './Mission/Missions';
import styles from './Profiless.module.css';
import { selectsAllMissions } from '../redux/mission/misionSlice';
import ReservedRockets from './ReservedRockets';

function Profile() {
  const { mission } = useSelector(selectsAllMissions);
  const joinMission = mission.filter((mission) => mission.reservation === true);

  const { rockets } = useSelector((store) => store.allRockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);

  return (
    <div className={styles.profiler}>
      <MyMissions data={joinMission} />
      <ReservedRockets reservedRockets={reservedRockets} />
    </div>
  );
}

export default Profile;
