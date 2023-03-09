import { FC } from "react";

interface IUsersProps {
    id: number,
    name: string;
    bio: string;
    img: string;
    online: Boolean;
}

const Users: FC<IUsersProps> = (props) => {
  
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.bio}</h2>
      <img src={props.img}/>
      <h3>User {props.online ? 'Active' : 'Inactive'}</h3>
    </div>
  );
};

export default Users;
