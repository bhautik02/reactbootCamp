import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={Math.random()}>
              {user.name} ({user.age} Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
