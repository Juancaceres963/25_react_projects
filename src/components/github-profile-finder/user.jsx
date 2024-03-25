export default function User({ user }) {
  const {
    name,
    avatar_url,
    created_at,
    followers,
    following,
    public_repos,
    login,
  } = user;

  const createData = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on :{" "}
          {`${createData.getDate()} ${createData.toLocaleString("en-us", {
            month: "short",
          })} ${createData.getFullYear()}`}
        </p>
      </div>
      <div>
        <p>Public Repos</p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
}
