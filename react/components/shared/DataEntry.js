import React from 'react'
import PropTypes from 'prop-types'

const DataEntry = ({ label, content }) => {
  return (
    <div>
      <label className="db black-90 mb3">{label}</label>
      <span className="light black-40">{content}</span>
    </div>
  )
}

DataEntry.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
}

export default DataEntry