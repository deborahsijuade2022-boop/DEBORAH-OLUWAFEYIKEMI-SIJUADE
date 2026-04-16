import './Card.css';

const Card = ({ icon, label, desc, delay = 0 }) => {
  return (
    <div className="card" style={{ animationDelay: `${delay}ms` }}>
      <span className="card-icon">{icon}</span>
      <h3 className="card-label">{label}</h3>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default Card;
