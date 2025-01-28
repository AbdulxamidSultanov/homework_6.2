import "./index.css";
import User from "../User";

function UserList(props) {
  const { users } = props;

  return (
    <div>
      {users.length > 0 &&
        users.map(function (user, index) {
          return <User key={index} user={user} />;
        })}
    </div>
  );
}

export default UserList;
