import { useState } from "react";

import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <Input
        placeholder="Search ICRS"
        suffix={<SearchOutlined />}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        setResults={setResults}
      />
      <Button type="primary">Advanced Search</Button>
      <Button type="primary">Saved Searches</Button>
    </div>
  );
};
