import PropTypes from 'prop-types'
export function PostSorting({ fields = [] }) {
  return (
    <div>
      <label htmlFor='sortBy'>SortBy:</label>
      <select name='sortBy' id='sortBy'>
        {fields.map((field) => (
          <option value='{field}' key={field}>
            {field}
          </option>
        ))}
      </select>
      {' / '}
      <label htmlFor='sortOrder'>Sort Order</label>
      <select name='sortOrder' id='sortOrder'>
        <option value={'ascending'}>ascending</option>
        <option value={'descending'}>descending</option>
      </select>
    </div>
  )
}

PostSorting.PropTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
}
