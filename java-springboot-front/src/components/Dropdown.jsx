const Dropdown = (props) => {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    props.setData({ ...props.data, [e.target.name]: e.target.value });
  };

  const selections = props.arr.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div>
      <select name={props.name} onChange={handleChange}>
        {selections}
      </select>
    </div>
  );
};
export default Dropdown;
