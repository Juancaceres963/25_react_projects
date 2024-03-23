export default function User({ user }) {
  const { name, avatar_url, followers, following, public_repos, login } = user;

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
    </div>
  );
}
