import './Button.styles.scss';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...rest }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
