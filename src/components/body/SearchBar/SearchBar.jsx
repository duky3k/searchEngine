import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Modal, AutoComplete, Space } from "antd";
import { SearchOutlined, HistoryOutlined } from "@ant-design/icons";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ setResults, onSearch }) => {
  const [input, setInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [popularKeywords, setPopularKeywords] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const autoCompleteRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch popular keywords from backend API and set them as initial suggestions
    fetchPopularKeywords();
  }, []);

  useEffect(() => {
    // Load search history from localStorage when the component mounts
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
      setSearchHistory(JSON.parse(storedSearchHistory));
    }
  }, []);

  useEffect(() => {
    // Save search history to localStorage whenever it changes
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

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
        const filteredSuggestions = apiSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
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
    setSearchHistory((prevHistory) =>
      Array.from(new Set([...prevHistory, input]))
    );
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
        label: <div key={`popular-${index}`}>{keyword}</div>,
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
      options: suggestions.map((keyword, index) => {
        const highlightedText = keyword.replace(
          new RegExp(`(${input})`, "gi"),
          '<span class="highlight">$1</span>'
        );
        return {
          value: keyword,
          label: (
            <div key={`result-${index}`}>
              <span
                dangerouslySetInnerHTML={{ __html: highlightedText }}
              ></span>
            </div>
          ),
        };
      }),
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
          placeholder="Search ICRS"
          onPressEnter={handleEnterPress}
          ref={autoCompleteRef}
          popupMatchSelectWidth={252}
          onFocus={() => handleInputFocus(input)}
          onBlur={handleInputBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Input
            style={{
              width: "calc(100vw - 120px)",
            }}
            suffix={<SearchOutlined />}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </AutoComplete>
      </div>
      <div className="button-wrapper">
        <Button
          className="button"
          onClick={() => {
            handleSearch();
            const searchResult = input.trim();
            if (searchResult !== "") {
              navigate(`/result-details/${encodeURIComponent(searchResult)}`);
            }
          }}
        >
          Search
        </Button>
        <Button className="button" onClick={handleClearHistory}>
          Clear History
        </Button>
      </div>

      <Modal
        title="Search Done"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => setIsModalVisible(false)}
      >
        Search done
      </Modal>
    </div>
  );
};
