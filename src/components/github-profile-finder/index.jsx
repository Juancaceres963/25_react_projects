import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Juancaceres963");

  function handleSudmit() {}

  async function fetchGithubUserData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSudmit}>Search</button>
      </div>
    </div>
  );
}
