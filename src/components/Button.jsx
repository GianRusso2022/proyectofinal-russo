const Button = ({ onClick, label, children, disabled }) => (
    <button className="btn btn-info" onClick={onClick} disabled={disabled}>
    {label || children} 
    </button>
  );
  export default Button;