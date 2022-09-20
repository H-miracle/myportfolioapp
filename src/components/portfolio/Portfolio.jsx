import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'FInancial Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com' 
  },
  {
    id: 3,
    image: IMG3,
    title: 'Forex Analytics',
    github: 'https://github.com',
    demo: 'https://dribble.com' 
  },
  {
    id: 4,
    image: IMG4,
    title: 'Stocks Trading Charts',
    github: 'https://github.com',
    demo: 'https://dribble.com' 
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com' 
  },
  {
    id: 6,
    image: IMG6,
    title: 'Banking and Finance',
    github: 'https://github.com',
    demo: 'https://dribble.com' 
  }
]


const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, github, demo, title}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h4>{title}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel='noopener noreferrer' > Live Demo</a>
                </div> 
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio