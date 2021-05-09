const Card = ({ children, className = '' }) => (
  <div className={`mx-2 bg-white rounded-lg ${className}`}>{children}</div>
);

export default Card;
