const Input = (props) => {
  const {type, name, onChange, value, disabled, width, height} = props
  const style = {boxSizing: 'border-box', width: width, height: height};

  return (
    <input type={type} name={name} onChange={onChange} value={value} disabled={disabled} style={style} />
  );
}

Input.defaultProps = {
  name: '',
  onChange: null,
  type: 'text',
  value: '',
  disabled: false,
  width: '100%',
  height: 'auto'
};

export default Input