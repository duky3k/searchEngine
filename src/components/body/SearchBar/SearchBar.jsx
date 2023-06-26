import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Modal, AutoComplete } from "antd";
import { SearchOutlined, HistoryOutlined } from "@ant-design/icons";
import "./SearchBar.css";

export const SearchBar = ({ setResults, onSearch }) => {
  const [input, setInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [popularKeywords, setPopularKeywords] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const autoCompleteRef = useRef();

  useEffect(() => {
    // Fetch popular keywords from backend API and set them as initial suggestions
    fetchPopularKeywords();
  }, []);

  const fetchPopularKeywords = () => {
    // Fetch popular keywords from backend API and set them as initial suggestions
    // Replace this with your actual API call to fetch popular keywords
    const fetchedPopularKeywords = ["Keyword 1", "Keyword 2", "Keyword 3"];
    setPopularKeywords(fetchedPopularKeywords);
  };

  const fetchData = (value) => {
    if (value.trim() !== "") {
      // Simulating API call delay with setTimeout
      setTimeout(() => {
        const apiSuggestions = ["Result 1", "Result 2", "Result 3"];
        setSuggestions(apiSuggestions);
      }, 500);
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (value) => {
    setInput(value);
    if (isInputFocused) {
      fetchData(value);
    }
  };

  const handleSearch = () => {
    setIsModalVisible(true);
    setSearchHistory((prevHistory) => Array.from(new Set([...prevHistory, input])));
    setInput("");
    onSearch();
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  const handleEnterPress = () => {
    if (input.trim() !== "") {
      handleSearch();
    }
  };

  const handleInputFocus = (value) => {
    setIsInputFocused(true);
    fetchData(value);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleMouseEnter = () => {
    setIsInputHovered(true);
  };

  const handleMouseLeave = () => {
    setIsInputHovered(false);
  };

  const options = [
    {
      label: "Popular Keywords",
      options: popularKeywords.map((keyword, index) => ({
        value: keyword,
        label: (
          <div key={`popular-${index}`}>
            {keyword}
          </div>
        ),
      })),
    },
    {
      label: "Search History",
      options: searchHistory.map((keyword, index) => ({
        value: keyword,
        label: (
          <div key={`history-${index}`}>
            {keyword}
            <HistoryOutlined style={{ marginLeft: "8px" }} />
          </div>
        ),
      })),
    },
    {
      label: "API Results",
      options: suggestions.map((keyword, index) => ({
        value: keyword,
        label: (
          <div key={`result-${index}`}>
            {keyword}
          </div>
        ),
      })),
    },
  ];

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <AutoComplete
          options={isInputFocused ? options : options.slice(0, 2)}
          onSelect={handleInputChange}
          onSearch={handleInputChange}
          value={input}
          placeholder="Search"
          onPressEnter={handleEnterPress}
          ref={autoCompleteRef}
          dropdownMatchSelectWidth={252}
          onFocus={() => handleInputFocus(input)}
          onBlur={handleInputBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Input
            suffix={<SearchOutlined />}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </AutoComplete>
      </div>
      <div className="button-wrapper">
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button type="primary">Advanced Search</Button>
        <Button type="primary" onClick={handleClearHistory}>
          Clear History
        </Button>
      </div>
      <Modal
        title="Search Done"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
      >
        Search done
      </Modal>
    </div>
  );
};