import './index.css';
import image from '../../assets/avatar.png';

function Hero() {
  return (
    <div>
      <div className='hero-holder'>
        <div className='hero-title'>
          <h1>Start where you are.</h1>
          <h1>Use what you have.</h1>
          <h1>Do what you can.</h1>
        </div>
      </div>

      <div className='main-style avatar-content'>
        <img src={image} alt='avatar' />
        <div>
          <h2>👋🏽 Hello! My name is Kim.</h2>
          <h3>
            I am endlessly curious about everything that intersects between{' '}
            <strong>people</strong>, <strong>design</strong>, and{' '}
            <strong>technology</strong>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
