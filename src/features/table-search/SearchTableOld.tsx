import { useState } from "react";

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

export default function SearchTableOld() {
  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  const filteredUsers = users.filter((user) =>
    user[filterBy].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{highlightText(user.id, query)}</td>
              <td>{highlightText(user.name, query)}</td>
              <td>{highlightText(user.email, query)}</td>
              <td>
                <img src={user.avatar} alt="avatar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function highlightText(text, query) {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: "orange" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
