import Card from '../ui/Card';
import './About.css';

const facts = [
  { icon: '🎓', label: 'Student', desc: 'Learning every day, one line of code at a time.' },
  { icon: '🌍', label: 'Explorer', desc: 'Loves discovering new cultures, foods, and ideas.' },
  { icon: '📚', label: 'Reader', desc: 'Bookworm who devours novels and sci-fi stories.' },
  { icon: '🎨', label: 'Artist', desc: 'Sketching, painting, and digital doodling for fun.' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <h2 className="section-title">About Me 🌸</h2>
        <p className="section-sub">A little bit about who I am</p>
      </div>
      <div className="about-grid">
        {facts.map((fact, i) => (
          <Card key={i} icon={fact.icon} label={fact.label} desc={fact.desc} delay={i * 100} />
        ))}
      </div>
    </section>
  );
};

export default About;
