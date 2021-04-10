import PropTypes from 'prop-types';

const Label = (props) => {
  const {children, label, placement} = props

  var labelHtml = <label>{label}</label>;
  var childrenHtml = children;

  if (placement === 'top' || placement === 'bottom') {
    labelHtml = <div>{labelHtml}</div>
    childrenHtml = <div>{childrenHtml}</div>
  }

  return (
    <div style={placement === 'left' || placement === 'right' ? {display: 'flex'} : {}}>
      {placement === 'top' || placement === 'left' ? labelHtml : childrenHtml}
      {placement === 'top' || placement === 'left' ? childrenHtml : labelHtml}
    </div>
  );
}

Label.defaultProps = {
  children: '',
  label: '',
  placement: 'top',
};

export default Label