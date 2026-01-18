import { useState, useEffect } from "react";

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
];

interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}
function SearchTable() {
  const [query, setQuery] = useState("");
  const [selection, setSelection] = useState("id");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    let data = users.filter((user:User) => (user[selection as keyof User] as string).includes(query));
    setFilteredUsers(data);
  }, [query, selection]);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <select onChange={(e) => setSelection(e.target.value)}>
        <option value="id"> ID </option>
        <option value="name"> Name </option>
        <option value="email"> Email </option>
      </select>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => {
            return (
              <tr key={index}>
                <td> {user.id}</td>
                <td> {user.name}</td>
                <td> {user.email}</td>
                <td>
                  <img src={user.avatar} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SearchTable;
