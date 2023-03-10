import ImgOne from '../../images/gallery-one/image-1.jpg'
import ImgTwo from '../../images/gallery-one/image-3.jpg'
import ImgThree from '../../images/gallery-one/image-5.jpg'
import ImgFour from '../../images/gallery-one/image-7.jpg'

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
        <p className="text-base  sm:text-lg ">
          Hello there! My name is Shameem and I am a final year BSc Computer Science student at Saveetha College of Liberal Arts and Sciences. While I love studying computer science, my true passion lies in the world of photography. From capturing stunning landscapes to candid moments with loved ones, photography has always been a way for me to express my creativity and share my perspective with the world.

With every click of my camera, I strive to capture something special and unique, something that tells a story and evokes emotion. Photography is not just a hobby for me, it's a way of life. It's what I love and what I want to pursue as a career.

My ultimate goal is to make it big in the world of photography and turn my passion into a profession. I am always looking for new opportunities to learn and grow as a photographer, whether it's through workshops, exhibitions or collaborations with other artists. I believe that with hard work, dedication, and a creative eye, anything is possible.
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt="Gudauri"
          />
          <p className="font-bold">Love</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt="Sighnaghi"
          />
          <p className="font-bold">Passion</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt="Stepantsminda"
          />
          <p className="font-bold">Dreams</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt="Batumi"
          />
          <p className="font-bold">Photography</p>
        </section>
      </section>
    </article>
  )
}

export default About
