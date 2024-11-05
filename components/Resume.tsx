export default function Resume() {
  const experience = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} year${years !== 1 ? "s" : ""}, ${months} month${
      months !== 1 ? "s" : ""
    }`;
  };
  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide ">
        Resume
        <div className="rounded-md border-2 bg-iconColor border-iconColor w-[4%]"></div>
      </h2>

      <div className="work-experience-holder mt-[20px]">
        <h2 className="text-md font-bold mb-5 tracking-wider">
          Work Experience
        </h2>
        <div className="flex flex-col gap-y-6">
          <div className="experience">
            <div className="flex flex-row  gap-x-4 items-center">
              <div className="company-logo w-[50px] h-[50px] rounded-full p-[0.7rem] bg-secondaryColor custom-shadow">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 59 70"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>BetterHR</title>
                  <defs>
                    <linearGradient
                      x1="50.008661%"
                      y1="0.92849354%"
                      x2="50.008661%"
                      y2="99.7630598%"
                      id="linearGradient-1"
                    >
                      <stop stopColor="#43F49F" offset="0%"></stop>
                      <stop stopColor="#41D888" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient
                      x1="50.0121917%"
                      y1="-2.62458472%"
                      x2="50.0121917%"
                      y2="102.491694%"
                      id="linearGradient-2"
                    >
                      <stop stopColor="#2378D6" offset="0%"></stop>
                      <stop stopColor="#3DC2C9" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="better_icon" fillRule="nonzero">
                      <path
                        d="M30,70 C37.6739682,70.1479429 45.1391553,67.4960241 51,62.54 L51.3,62.29 L51.59,62.05 C54.8817672,59.1082117 57.1689265,55.2088499 58.13,50.9 L58.13,50.78 C55.7777086,54.4167642 51.7412036,56.6119903 47.41,56.61 C40.36,56.61 34.64,53.1 34.64,43.89 L34.64,15.74 C34.64,6.28 27.27,0 17.81,0 C8.35,0 0.4,6.28 0.4,15.74 L0.4,44.42 C0.404719161,46.3022226 0.643211553,48.1765712 1.11,50 C1.16,50.26 1.24,50.5 1.3,50.75 C1.36,51 1.39,51.11 1.45,51.29 C4.63,63.12 16,70 29.58,70 L30,70 Z"
                        id="Shape"
                        fill="url(#linearGradient-1)"
                      ></path>
                      <path
                        d="M58.6,46.87 C58.83,35.63 49.49,26.52 38.25,26.52 L34.65,26.52 L34.65,43.9 C34.65,53.12 40.37,56.62 47.42,56.62 C51.7402483,56.6196029 55.7668867,54.4331759 58.12,50.81 C58.4066308,49.5152098 58.5673789,48.1957355 58.6,46.87 Z"
                        id="Shape"
                        fill="url(#linearGradient-2)"
                      ></path>
                      <path
                        d="M48.43,55.62 C41.38,55.62 35.66,52.11 35.66,42.9 L34.71,26.52 L34.65,26.52 L34.65,43.9 C34.65,53.12 40.37,56.62 47.42,56.62 C51.036096,56.6181631 54.4802179,55.0761275 56.89,52.38 C54.564673,54.4640777 51.5525823,55.6176444 48.43,55.62 Z"
                        id="Shape"
                        fill="#231F20"
                        opacity="0.1"
                      ></path>
                      <path
                        d="M47.3,56.71 C43.53,56.71 40.37,55.71 38.19,53.77 C35.68,51.57 34.41,48.23 34.41,43.86 L34.65,26.1 L34.65,43.87 C34.65,54.87 42.57,56.47 47.3,56.47 C51.7331752,56.3247498 55.8150673,54.0205161 58.23,50.3 L58.12,50.83 C55.7459085,54.5002801 51.6711835,56.7146408 47.3,56.71 Z"
                        id="Shape"
                        fill="#61F5A9"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="company-name">
                <h4>BetterHR Co., Ltd, Yangon, Myanmar</h4>
                <p className="text-sm">{experience("2022-01-01")}</p>
              </div>
            </div>
            <div className="experience-holder ml-16">
              <div className="description timeline">
                <div className="">
                  <h4>Lead Web Backend Developer</h4>
                  <p className="text-sm text-white/60">Nov 2022 - Present</p>
                </div>
                <p className="my-3">
                  As the Lead Web Backend Developer at BetterHR, I led the
                  development and maintenance of essential features across the
                  company's web platform, handling both backend and frontend
                  tasks to deliver a seamless experience. Key contributions
                  included:
                </p>
                <ul className="list-disc list-outsite pl-4 leading-7">
                  <li>
                    Spearheaded backend development for multi-country payroll
                    and employee management features, ensuring scalability and
                    robustness.
                  </li>
                  <li>
                    Enhanced frontend capabilities with Vue.js and Nuxt.js,
                    creating responsive, modular components that contributed to
                    a smooth user experience on both web and mobile platforms.
                  </li>
                  <li>
                    Developed and optimized Mobile APIs to support mobile
                    application integration, facilitating seamless interaction
                    across devices.
                  </li>
                  <li>
                    Integrated a real-time chat feature using GetStream API,
                    adding in-depth analytics and tracking to provide clients
                    with actionable insights.
                  </li>
                  <li>
                    Mentored junior developers by promoting best practices in
                    code quality, conducting regular code reviews, and providing
                    guidance in both frontend and backend development areas.
                  </li>
                </ul>
              </div>
              <div className="description timeline">
                <div className="">
                  <h4>Senior Web Developer</h4>
                  <p className="text-sm text-white/60">Jan 2022 - Oct 2022</p>
                </div>
                <p className="my-3"></p>
              </div>
            </div>
          </div>
          {/* ===========Bagan Innovation ======== */}
          <div className="experience">
            <div className="flex flex-row  gap-x-3 items-center">
              <div className="company-logo w-[50px] h-[50px] rounded-full p-[0.7rem] bg-secondaryColor custom-shadow">
                <img
                  src="/images/bit.jpeg"
                  alt="bit logo"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="company-name">
                <h4>Bagan Innovation Technology Co., Ltd, Yangon, Myanmar</h4>
                <p className="text-sm">
                  {experience("2020-07-01", "2021-12-01")}
                </p>
              </div>
            </div>
            <div className="experience-holder ml-16">
              <div className="description timeline">
                <div className="">
                  <h4>Full Stack Web Developer</h4>
                  <p className="text-sm text-white/60">Jul 2020 - Dec 2021</p>
                </div>
                <p className="my-3">
                  As a Full Stack Web Developer at Bagan Innovation Technology,
                  I developed and maintained a Messenger chatbot to enhance
                  customer experience and streamline the pre-order process for
                  the online shop. This chatbot allowed customers to seamlessly
                  interact with the online store and submit pre-order forms
                  through Facebook Messenger and I created an admin dashboard
                  for Tharapa using Vue.js integrated with Laravel, enabling
                  real-time management and tracking of orders, inventory, and
                  other essential data. This solution provided administrators
                  with a responsive, user-friendly interface and improved
                  operational efficiency by combining the flexibility of Vue.js
                  on the frontend with Laravel’s powerful backend capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* ===========ITVISON HUB ======== */}
          <div className="experience">
            <div className="flex flex-row  gap-x-3 items-center">
              <div className="company-logo w-[50px] h-[50px] rounded-full p-[0.7rem] bg-secondaryColor custom-shadow">
                <img
                  src="/images/company.png"
                  alt="bit logo"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="company-name">
                <h4>ITVISIONHUB Co., Ltd, Yangon, Myanmar</h4>
                <p className="text-sm">
                  {experience("2019-01-01", "2020-04-01")}
                </p>
              </div>
            </div>
            <div className="experience-holder ml-16">
              <div className="description timeline">
                <div className="">
                  <h4>Junior Full Stack Web Developer</h4>
                  <p className="text-sm text-white/60">Jul 2020 - Dec 2021</p>
                </div>
                <p className="my-3">
                  As a Junior Full Stack Web Developer, I developed Property
                  Star for general users and ListingDB for property agents,
                  creating user-friendly websites tailored to the real estate
                  market. Additionally, I built the ITVISIONHUB company website
                  using Vue.js for the frontend and Node.js for backend API
                  development, gaining valuable experience in building scalable
                  full-stack web applications.
                </p>
                <p className="my-3">
                  In addition to my development work, I served as a Node.js
                  instructor, where I trained students in building real-world
                  applications using Node.js, Express.js, and related
                  technologies. This role allowed me to share my expertise while
                  staying current with industry trends and best practices in web
                  development.
                </p>
              </div>
            </div>
          </div>

          {/* ========== Cyber Wings ========== */}
          <div className="experience">
            <div className="flex flex-row  gap-x-3 items-center">
              <div className="company-logo w-[50px] h-[50px] rounded-full p-[0.7rem] bg-secondaryColor custom-shadow">
                <img
                  src="/images/the_cyber_wings_team_logo.jpeg"
                  alt="bit logo"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="company-name">
                <h4>Cyber Wings Technologies Co., Ltd, Yangon, Myanmar</h4>
                <p className="text-sm">
                  {experience("2018-05-01", "2020-07-01")}
                </p>
              </div>
            </div>
            <div className="experience-holder ml-16">
              <div className="description timeline">
                <div className="">
                  <h4>Internship Program</h4>
                  <p className="text-sm text-white/60">May 2018 - Jul 2018</p>
                </div>
                <p className="my-3">
                  During my web developer internship program, I gained valuable
                  experience in designing and developing web applications using
                  HTML, CSS, PHP, and JavaScript. I worked closely with senior
                  developers to learn new web technologies and frameworks such
                  as Laravel ( PHP Framework ) and Vue.js. I also gained
                  experience in troubleshooting and debugging web applications
                  and collaborated with cross-functional teams to develop, test,
                  and deploy software solutions.
                </p>
                <p className="my-3">
                  In addition to technical skills, I developed strong
                  communication and teamwork skills, as I collaborated with
                  other developers, designers, and project managers to deliver
                  projects on time. Overall, my web developer internship program
                  provided me with a valuable learning experience and helped me
                  to develop my skills in web development and software
                  engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
