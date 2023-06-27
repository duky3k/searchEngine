import React from 'react'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
const DetailSearch = () => {
  const { searchResult } = useParams();
  console.log(searchResult);
  return (
    <div>
      <Header />
      123123123
      <h1>Search Results: {searchResult}</h1>
    </div>
  )
}

export default DetailSearch