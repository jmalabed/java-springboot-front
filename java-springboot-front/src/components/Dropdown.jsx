const Dropdown = (props) => {
  const selections = props.arr.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div>
      <select name="planet1">{selections}</select>
    </div>
  );
};
export default Dropdown;
