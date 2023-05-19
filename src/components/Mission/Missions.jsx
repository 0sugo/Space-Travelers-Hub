import PropTypes from 'prop-types';
import styles from './Mission.module.css';

function MyMissions({ data }) {
  return (
    <div className={styles.ourMission}>
      <h2>My Missions</h2>
      <ul>
        {data.map((mission) => (
          <li key={mission.id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}
MyMissions.propTypes = { data: PropTypes.arrayOf(PropTypes.string).isRequired };
export default MyMissions;
