import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../services/githubServices";
import { getUserRepos } from "../services/githubServices";

function Userdetails() {

  const [userDetails, setUserDetails] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState([]);
  const { username } = useParams();
  console.log("Username from params:", username);

  useEffect(()=>{
    const loadUser = async () =>{
      setLoading(true)
      const data = await getUsers(username)
      setUserDetails(data)
      const repo_data = await getUserRepos(username)
      setUserRepos(repo_data)
      setLoading(false)
    }
    if(username)
      {
        loadUser()
    }
  },[username])


  return (
    <>
      <div className="container-sm mt-5 d-flex align-items-center justify-content-between user-page">
        {
        loading ? (<div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
         ) : userDetails && (
          <div className="d-flex user-sub-info">
            <div className="user-dp d-flex flex-column align-items-center">
              <img
                className="mb-3 rounded-3 shadow"
                src={userDetails?.avatar_url}
                width="250"
                alt=""
              />
              <a
                className="
              p-2 
              rounded-2 
              border-0 
              bg-outline-primary 
              px-3 
              follow
              text-decoration-none"
              href={userDetails.html_url}
              >
                Follow
              </a>
            </div>
            <div className="user-details mt-3 ms-3">
              <h1 className="m-0">{userDetails?.name || "No name available"}</h1>
              <h5 className="m-0">{userDetails?.login || "No username available"}</h5>
              <button className="GitHub-btn my-2 px-2">
                <a className="bi bi-github list m-0" href={userDetails?.html_url}> GitHub</a>
              </button>
              <li className="bi bi-star list"> {userDetails?.bio || "No bio available"}</li>
              <li className="bi bi-geo-alt list"> {userDetails?.location || "No location available"} </li>
              <li className="bi bi-plus-square list"> Created at: {userDetails?.created_at || "No Data available"} </li>
            </div>
          </div>
        )}
        <div className="ffr d-flex shadow rounded-3 border p-4 py-5">
          <div className="text-center followers">
            <h4>{userDetails?.followers}</h4>
            <h5>Followers</h5>
          </div>
          <div className="vr mx-3"></div>
          <div className="text-center followers">
            <h4>{userDetails?.following}</h4>
            <h5>Following</h5>
          </div>
          <div className="vr mx-3"></div>
          <div className="text-center followers">
            <h4>{userDetails?.public_repos}</h4>
            <h5>Repositories</h5>
          </div>
        </div>
      </div>
      <div className="container-sm px-5 mt-5">
        <h2>Repositories</h2>
        {Array.isArray(userRepos) && 
        userRepos.map((repo)=>{
          return(

        <div key={repo.id} className="repo-card shadow p-4 rounded-3 border mt-4 d-flex align-items-center justify-content-between">
          <div className="repo-info">
            <a href={repo.html_url}>{repo.name}</a>
            <p className="m-0">{repo.description ?? "No description available" }</p>
          </div>
          <div className="d-flex gap-5">
            <p className="m-0 public-repo border border-success">{repo.visibility}</p>
            <p className="m-0 last-repo-update">{repo.updated_at}</p>
          </div>
        </div>
        )
        })}
      </div>
    </>
  );
}

export default Userdetails;
