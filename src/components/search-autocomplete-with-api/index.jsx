import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState(null);

  async function fetchListOfUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-user"
        placeholder="Search Users here..."
      />
    </div>
  );
}
