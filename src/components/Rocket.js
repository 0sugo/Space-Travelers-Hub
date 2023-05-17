// import rocketSlice from '../redux/rocket/rocket.slice';
import { useSelector } from 'react-redux';

const Rocket = () => {
  const { rockets } = useSelector((store) => store.allRockets);
  //   console.log({rockets.flickr_images})

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
              <li><p>{rocket.description}</p></li>
              <li><button type="button">Reserve Rocket</button></li>

            </ul>
          </td>
        </tr>

      ))}
    </table>
  );
};

export default Rocket;
