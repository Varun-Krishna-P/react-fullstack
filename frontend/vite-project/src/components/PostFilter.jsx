import PropTypes from 'prop-types'
export function PostFilter({ field }) {
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}:</label>
      <input type='text' name={`field-${field}`} id={`field-${field}`} />
    </div>
  )
}

PostFilter.PropTypes = {
  field: PropTypes.string.isRequired,
}
