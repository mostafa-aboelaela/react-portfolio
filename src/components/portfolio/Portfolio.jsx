import React from 'react';
import IMG1 from '../../assets/youtube-clone-img.png';
import IMG2 from '../../assets/todi-list-img.png';
import IMG3 from '../../assets/buisness-template-img.png';
import IMG4 from '../../assets/portofilo-img.png';
import IMG5 from '../../assets/bootstrap-template-img.png';
import IMG6 from '../../assets/restaurat-img.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'YouTube Clone',
      img: IMG1,
      description:
        'YouTube Clone Application in React JS with Material UI 5 | RapidAPI',
      technologies: 'React | Material UI  |RapidAPI ',
      link: 'https://youtube-clone50.netlify.app/',
      github: 'https://github.com/mostafa-aboelaela/YouTube_Clone50',
    },
    {
      id: 2,
      title: 'Portfolio',
      img: IMG4,
      description:
        'Portfolio Template built with react.js that helps me showcase my work and skills as a software developer',
      technologies: 'React | Bootstrap',
      link: 'https://mostafa-abdalhmed-portfolio.netlify.app/',
      github: 'https://github.com/mostafa-aboelaela/react-portfolio',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | Webpack',
      link: 'https://todo-app50.netlify.app/',
      github: 'https://github.com/mostafa-aboelaela/to-do-app',
    },
    {
      id: 4,
      title: 'Business',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: 'https://mostafa-aboelaela.github.io/budiness-template/',
      github: 'https://github.com/mostafa-aboelaela/budiness-template',
    },
    {
      id: 5,
      title: 'Bootstrap-template',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS | Bootstrap',
      link: 'https://mostafa-aboelaela.github.io/bootstrap-template/',
      github: 'https://github.com/mostafa-aboelaela/bootstrap-template',
    },
    {
      id: 6,
      title: 'Restaurant Website',
      img: IMG6,
      description:
        'Fully responsive interactive, beautiful and modern-looking website for restaurant',
      technologies: 'JavaScript | Css | Html',
      link: 'https://mostafa-aboelaela.github.io/Restaurant-website/',
      github: 'https://github.com/mostafa-aboelaela/Restaurant-website',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
