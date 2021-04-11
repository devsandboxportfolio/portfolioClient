const Button = (props) => {

  const {text, type, onClick, disabled} = props

  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: '',
  type: '',
  disabled: false
};

export default Button