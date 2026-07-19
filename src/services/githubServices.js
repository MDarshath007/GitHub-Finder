const API_KEY = "https://api.github.com"

export const searchUsers = async (text) => {
    const res = await fetch(`${API_KEY}/search/users?q=${text}`);
    return await res.json()
}

export const getUsers = async (username) => {
    const res = await fetch(`${API_KEY}/users/${username}`);
    if(!res.ok){
      throw new Error("404 error: user not found")
    }

    return await res.json()
}

export const getUserRepos = async (username) => {
    const res = await fetch(`${API_KEY}/users/${username}/repos?sort=updated`);
    return await res.json()
}

export const getPopularUsers = async () => {
  const res = await fetch(
    `${API_KEY}/search/users?q=followers:>1000&sort=followers&order=desc`
  );

  return await res.json();
};