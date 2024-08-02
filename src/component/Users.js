import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import User from './User';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  /* const location = useLocation();
  const params = useParams(); */

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>USERS</h1>
      {loading && <div>loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      {/* {params.topicId && <h3>Selected topic: {params.topicId}</h3>} */}
    </div>
  );
}

export default Users;
