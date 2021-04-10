import PropTypes from 'prop-types';

const Textarea = (props) => {
  const {name, onChange, value, width, height, disabled} = props
  const style = {boxSizing: 'border-box', resize: 'none', width: width, height: height};

  return (
    <textarea name={name} onChange={onChange} value={value} style={style} disabled={disabled} />
  );
}

Textarea.defaultProps = {
  name: '',
  onChange: '',
  value: '',
  width: '100%',
  height: 100,
  disabled: false,
};

export default Textarea