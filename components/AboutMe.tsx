import Skills from "./Skills";

export default function About() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide">
        About Me
        <div className="rounded-md border-2 bg-iconColor border-iconColor tablet:w-[4%] mobile:w-[20%]"></div>
      </h2>
      <div className="content-text text-white/70 mb-12">
        <p>
          Hello, I'm Thet Tun, a Senior Web Developer with a robust background
          in creating innovative, customer-focused solutions. With over 5 years
          of hands-on coding experience and more than 4 years in the industry, I
          specialize in Vue.js, Nuxt.js, and Laravel. I graduated with a
          Bachelor of Computer Science (B.C.Sc) from the University of Computer
          Studies, Meiktila.
        </p>
        <p>
          Currently, I am a Lead Web Backend Developer at Better HR Company in
          Myanmar, where I focus on building reliable, scalable applications
          that enhance user experience and drive company growth. I am passionate
          about solving complex problems through clean, efficient code and
          thrive in both independent projects and collaborative team settings.
        </p>
        <p>
          I am now seeking a challenging Software Engineer role to further
          leverage my skills and contribute to a forward-thinking company that
          values innovation and customer satisfaction.
        </p>
      </div>
      <h2 className="text-md font-bold mb-5 tracking-wider">What I'm Doing</h2>
      <div className="flex gap-5 tablet:flex-col mobile:flex-row flex-wrap">
        <div className=" custom-shadow rounded-lg p-5 flex tablet:flex-row mobile:flex-col gap-x-3 border-secondaryColor">
          <div className="flex-none w-0.5/3 mobile:hidden tablet:block">
            <img src="/images/backend.png" alt="backend-image" />
          </div>

          <div className="w-2.5/3">
            <h4 className="text-white mb-3">Backend Development</h4>
            <p className="text-white/70">
              Building secure and efficient server-side applications, with a
              focus on performance, complex logic, database management, and API
              development using Laravel and Node.js.
            </p>
          </div>
        </div>
        <div className=" custom-shadow rounded-lg p-5 flex tablet:flex-row mobile:flex-col gap-x-3">
          <div className="flex-none w-0.5/3 mobile:hidden tablet:block">
            <img src="/images/frontend.png" alt="frontend-image" />
          </div>
          <div className="w-2.5/3">
            <h4 className="text-white mb-3">Frontend Development</h4>
            <p className="text-white/70">
              Creating responsive and user-friendly interfaces with Vue.js and
              Nuxt.js. Passionate about delivering an engaging user experience
              that is both intuitive and visually appealing.
            </p>
          </div>
        </div>
        <div className=" custom-shadow rounded-lg p-5 flex tablet:flex-row mobile:flex-col gap-x-3">
          <div className="flex-none w-0.5/3 mobile:hidden tablet:block">
            <img src="/images/api.png" alt="mobile-api-image" />
          </div>
          <div className="w-2.5/3">
            <h4 className="text-white mb-3">Mobile API Development</h4>
            <p className="text-white/70">
              Designing RESTful and GraphQL APIs to support mobile apps,
              ensuring seamless data exchange, security, and optimized
              performance for an enhanced mobile user experience.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== Skill And Learning ======================= */}
      <Skills />
    </>
  );
}
