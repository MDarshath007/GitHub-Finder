import About from "../assets/about-img.png";

function about() {
  return (
    <>
      <div className="about-container text-center mt-5 container-sm d-flex flex-column gap-4 align-items-center justify-content-center about-section">
        <img className="w-25" src={About} alt="" />
        <h1>
          About <span>GitHub</span> Finder
        </h1>
        <p>
          GitHub Finder is a web application that helps you find GitHub users
          and explore their profiles and their repositories. Built with React,
          React Router, and the GitHub API.
        </p>
        <div className="about-info container-sm d-flex gap-5 mt-5">
          <div className="about-cards rounded-3 p-4 text-center border shadow">
            <div><i className="fs-1 bi bi-search"></i>
            <h6>Search User</h6></div>
            <p>Find any GitHub users by their username.</p>
          </div>
          <div className="about-cards rounded-3 p-4 text-center border shadow">
            <div>
            <i className="fs-1 bi bi-person-circle"></i>
            <h6>User Profiles</h6>
            </div>
            <p>View detailed information about users.</p>
          </div>
          <div className="about-cards rounded-3 p-4 text-center border shadow">
            <div>
            <i className="fs-1 bi bi-hdd-stack"></i>
            <h6>Repositories</h6>
            </div>
            <p>Explore user repositories and their details</p>
          </div>
          <div className="about-cards rounded-3 p-4 text-center border shadow">
            <div>
            <i className="fs-1 bi bi-phone"></i>
            <h6>Responsive</h6>
            </div>
            <p>Works great on desktop and mobile devices</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        Made with Passion by <span>Mohammed Arshath</span>
      </p>
    </>
  );
}

export default about;
