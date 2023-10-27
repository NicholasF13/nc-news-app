export default function SortDropdown({ sortBy, sortOrder, onSortChange, onOrderChange }) {
    const handleSortChange = (e) => {
      onSortChange(e.target.value)
    }
  
    const handleOrderChange = (e) => {
      onOrderChange(e.target.value)
    }
  
    return (
      <div>
        <label htmlFor="sort-dropdown">Sort By:</label>
        <select id="sort-dropdown" value={sortBy} onChange={handleSortChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="order-dropdown">Order:</label>
        <select id="order-dropdown" value={sortOrder} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    )
  }