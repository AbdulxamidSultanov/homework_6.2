import "./index.css";
import Car from "../Car";

function User(props) {
  const { user } = props;
  return (
    <>
      <div className="user-card">
        <p>Ism Familiya: </p>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <p>Address:</p>
        <h4>
          {user.address.region} {user.address.zip}
        </h4>
        {user.cars.length > 0 ? (
          user.cars.map(function (car, index) {
            return <Car key={index} car={car} />;
          })
        ) : (
          <span>mashinasi yoq</span>
        )}
      </div>
    </>
  );
}

export default User;
