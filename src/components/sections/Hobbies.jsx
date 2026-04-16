import './Hobbies.css';

const hobbies = [
  { emoji: '💻', name: 'Coding' },
  { emoji: '🎵', name: 'Music' },
  { emoji: '🌿', name: 'Gardening' },
  { emoji: '🎮', name: 'Gaming' },
  { emoji: '📷', name: 'Photography' },
  { emoji: '🍳', name: 'Cooking' },
  { emoji: '✈️', name: 'Travel' },
  { emoji: '🧶', name: 'Crafting' },
];

const Hobbies = () => {
  return (
    <section className="hobbies" id="hobbies">
      <div className="section-header">
        <h2 className="section-title">My Hobbies 🦋</h2>
        <p className="section-sub">Things that bring me joy</p>
      </div>
      <div className="hobbies-grid">
        {hobbies.map((h, i) => (
          <div className="hobby-chip" key={i} style={{ animationDelay: `${i * 80}ms` }}>
            <span className="hobby-emoji">{h.emoji}</span>
            <span className="hobby-name">{h.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
