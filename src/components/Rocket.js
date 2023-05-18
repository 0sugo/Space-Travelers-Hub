import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { reserve, removeReserve } from '../redux/rocket/rocketSlice';

const Rocket = () => {
  const { rockets } = useSelector((store) => store.allRockets);

  const dispatch = useDispatch();
  const [reserved, setReserved] = useState('Reserve Rocket');

  const handleReserve = (e) => {
    e.preventDefault();
    if (reserved === 'Reserve Rocket') {
      dispatch(reserve(e.target.id));
      setReserved('Cancel Reserve');
    } else {
      dispatch(removeReserve(e.target.id));
    //   setReserved('Reserve Rocket');
    }
  };

  return (
    <table>
      {rockets.map((rocket) => (
        <tr key={rocket.id}>
          <td>
            {rocket.flickr_images.length > 0 && (
              <img src={rocket.flickr_images[0]} alt="Rocket" />
            )}
          </td>
          <td>
            <ul>
              <li><h3>{rocket.name}</h3></li>
              <li>
                <p>
                  {rocket.reserve ? <span className="banner">RESERVED</span> : null }
                  {rocket.description}
                </p>
              </li>
              <li><button id={rocket.id} type="button" className="reserver" onClick={handleReserve}>{reserved}</button></li>
            </ul>
          </td>
        </tr>

      ))}
    </table>
  );
};

export default Rocket;
