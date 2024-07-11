import React from 'react'
import NameCollection from './NameCollection'

function Search({ search, handleChange, babyNames }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(e) => handleChange(e.target.value)} />
        <i className="search icon" />
      </div>
      <NameCollection babyNames={babyNames} search={search} />
    </div>
  )
}
export default Search