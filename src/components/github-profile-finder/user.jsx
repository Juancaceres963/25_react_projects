export default function User({ user }) {
  const {
    name,
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    html_url,
  } = user;

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={html_url}>{name || login}</a>
      </div>
    </div>
  );
}
