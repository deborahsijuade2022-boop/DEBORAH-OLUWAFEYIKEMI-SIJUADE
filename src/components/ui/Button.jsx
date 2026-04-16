import './Button.css';

const Button = ({ children, href, variant = 'primary', type = 'button', onClick }) => {
  if (href) {
    return (
      <a href={href} className={`btn btn-${variant}`}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
