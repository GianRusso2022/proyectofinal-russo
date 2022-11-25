const Button = ({ onClick, label, children, disabled }) => (
  <button className="btn btn-info m-2" onClick={onClick} disabled={disabled}>
    {label || children}
  </button>
);

export default Button;