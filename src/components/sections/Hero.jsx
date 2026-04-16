import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-blob blob1" />
      <div className="hero-blob blob2" />
      <div className="hero-content">
        <p className="hero-greeting">Hello, world! 👋</p>
        <h1 className="hero-title">
          I'm <span className="highlight">Debby</span>
        </h1>
        <p className="hero-subtitle">
          A curious learner, a creative dreamer &amp; a budding developer. <br/>
        I'm a student interested in web development and technology. <br/>
        This website is a simple single-page application built using React components,
        HTML structure, and CSS styling as part of my leraning process.
        </p>
        <div className="hero-buttons">
          <Button href="#about" variant="primary">Learn About Me</Button>
          <Button href="#contact" variant="outline">Say Hello 💌</Button>
        </div>
      </div>
      <div className="hero-avatar">
        <div className="avatar-ring">
          <span className="avatar-emoji">🧑‍💻</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
