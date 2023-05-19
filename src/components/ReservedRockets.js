import { PropTypes } from 'prop-types';
import styles from './Profiless.module.css';

const ReservedRockets = ({ reservedRockets }) => (
  <table className="profiler-table">
    {(reservedRockets.length) < 0 ? <th>My Rockets</th> : <th>My Rockets</th> }

    {reservedRockets.map((rocket) => (
      <tr key={rocket.id} className={styles.profilertable}>
        <td className={styles.tabledata}>{rocket.name}</td>
      </tr>
    ))}

  </table>
);

ReservedRockets.propTypes = { reservedRockets: PropTypes.arrayOf(PropTypes.string).isRequired };
export default ReservedRockets;
