import Users from "./components/Users";

const users = [
  {
    id: 1, name: "Alisher",
    bio: "Guitar",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    online: true,
  },
  {
    id: 2, name: "Alexander",
    bio: "inDrive",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    online: false,
  },
  {
    id: 3, name: "Aituar",
    bio: "Volleyball",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    online: true,
  },
];

function App() {
  return (
    <div>
      {users.map(item => <Users {...item}/>)}
    </div>
  );
}

export default App;