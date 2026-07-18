import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { searchUsers } from "../services/githubServices";
import { getUsers } from "../services/githubServices";

function Searchresult() {
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const data = await searchUsers(username);
      setUsers(data.items);

      setLoading(false);
      for (const user of data.items) {
        const details = await getUsers(user.login);
        console.log(details);

        setUserDetails((prev) => ({
          ...prev,
          [user.login]: details,
        }));
      }
    };
    fetchUsers();
  }, [username]);

  return (
    <>
      <div className="container-md text-center ">
        <Searchbar />
        
         {loading ? (<div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
         ) :
        (users.map((user) => (
          <div
            className="users-card d-flex align-items-center justify-content-between shadow-sm border mt-3 rounded-3 p-3"
            key={user.id}
          >
            <div className="user-info d-flex align-items-center justify-content-center">
              <img
                className="rounded-3 me-3 shadow"
                src={user.avatar_url}
                width="100"
              />
              <div className="user-sub-info">
                <h5>{user.login}</h5>
                <p className="m-0">{"Followers: " + userDetails[user.login]?.followers}</p>
                <p className="m-0">{"Following: " + userDetails[user.login]?.following}</p>
                <p className="m-0">{"Repos: " + userDetails[user.login]?.public_repos}</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p className="public-repo m-0 border border-success">
                {user.user_view_type}
              </p>
              <a
                className="p-2 
              rounded-2 
              border-0 
              bg-outline-primary 
              px-3 
              view-profile
              text-decoration-none"
                target="_blank"
                onClick={() => {
                  navigate(`/user/${user.login}`);
                }}
              >
                View Profile
              </a>
            </div>
          </div>
        )))}
      </div>
    </>
  );
}

export default Searchresult;
