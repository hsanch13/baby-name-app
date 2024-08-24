import React from 'react'
import NameCollection from './NameCollection'

function Search({ search, handleChange, babyNames, sortByGender }) {
  return (
    <div className="ui container">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(e) => handleChange(e.target.value)} />
        <i className="search icon" />
      </div>
      <NameCollection babyNames={babyNames} search={search} sortByGender={sortByGender} />
    </div>
  )
}
export default Search