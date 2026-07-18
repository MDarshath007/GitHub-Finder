import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar.jsx";
import { getPopularUsers } from "../services/githubServices.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [popularUsers, setPopularUsers] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const data = await getPopularUsers();
      setPopularUsers(data.items);
      setLoading(false)
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="home container-sm text-center mt-4">
        <h1>
          Find <span>GitHub</span> Users
        </h1>
        <p>
          Search for any GitHub user and explore their profile and repositories
        </p>
        <Searchbar />
      </div>

      <h1>Popular Users</h1>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        popularUsers.map((user) => {
          return (
            <div className="container-sm">
              <div
                key={user.id}
                className="popularUsers d-flex align-items-center justify-content-between gap-3 rounded-3 border p-3 my-3 shadow-sm"
              >
                <div className="d-flex gap-3 align-items-center">
                  <img
                    className="rounded popular-user-img shadow-sm"
                    src={user.avatar_url}
                    alt=""
                    width="100px"
                  />
                  <h4 className="m-0">{user.login}</h4>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <p className="public-repo m-0 border border-success">
                    {user.user_view_type}
                  </p>
                  <a
                    href={user.html_url}
                    className="btn btn-primary view-profile"
                    onClick={() => {
                      navigate(`/user/${user.login}`);
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          )
        })
      ) }
    </>
  );
}

export default Home;
