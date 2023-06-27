import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import SearchResultCpn from '../../components/body/SearchResult/index';
import { SearchBar } from '../../components/body/SearchBar/SearchBar';
import { SearchResultsList } from '../../components/body/SearchBar/SearchResultList';
import { Button, Typography } from 'antd';
import { DownOutlined, UpOutlined, LogoutOutlined } from "@ant-design/icons";
import './DetailSearch.css';
const DetailSearch = () => {
  const { searchResult } = useParams();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [results, setResults] = useState([]);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);

  console.log(searchResult);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setToggleIcon(!toggleIcon); // Toggle the icon state
  };

  const handleSearch = () => {
    // Perform the search logic here

    // After the search is completed, set the searchCompleted state to true
    setSearchCompleted(true);
  };

  return (
    <div
      className='detail-search-page-container'
    >
      <Header />
      <div
        className='detail-search-search-bar'
      >
        <Typography.Title level={4}>
          Discover Cases By Nature Of Injury
        </Typography.Title>
        <div>
          <Button type="text" onClick={toggleSearchInput}>
            Other Search Options{" "}
            {toggleIcon ? <UpOutlined /> : <DownOutlined />}{" "}
            {/* Toggle the icon */}
          </Button>
        </div>
      </div>
      {showSearchInput && (
        <div
          className='detail-search-search-input'
        >
          <SearchBar setResults={setResults} onSearch={handleSearch} />
          <SearchResultsList
            results={results}
            isSearchCompleted={searchCompleted}
          />
        </div>
      )}
      <SearchResultCpn />
    </div>
  )
}

export default DetailSearch