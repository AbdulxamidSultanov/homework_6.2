import "./App.css";
import users from "./assets/data.json";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div>
        <UserList users={users} />
      </div>
    </>
  );
}

export default App;
