const Button = ({
  icon = null,
  children = null,
  text = null,
  className = '',
  ...rest
}) => (
  <button
    {...rest}
    className={`w-max flex items-center font-semibold rounded-full px-4 py-1 border cursor-pointer
    focus:outline-none transform transition-transform hover:scale-105 whitespace-nowrap ${className}`}
  >
    {text}
  </button>
);

export default Button;
