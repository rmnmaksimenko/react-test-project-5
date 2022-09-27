export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search customer"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
