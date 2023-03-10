import Github from '../../images/socials/github.svg'
import Linkedin from '../../images/socials/linkedin.svg'
import Portfolio from '../../images/socials/portfolio.png'
import Instagram from '../../images/socials/instagram.png'
const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://www.instagram.com/shaassyyy/?igshid=YmMyMTA2M2Y%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6	max-w-full" src={Instagram} alt="Github icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/shameem-ali-126b53229"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6	max-w-full" src={Linkedin} alt="Linkedin icon" />
      </a>
    </section>
  )
}

export default Socials
