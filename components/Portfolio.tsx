import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide">
        Portfolio
        <div className="rounded-md border-2 bg-iconColor border-iconColor w-[4%]"></div>
      </h2>
      <div className="flex w-full gap-x-7 mt-[30px]">
        {/* BetterHr */}
        <div className="image-area h-[400px] laptop:w-2/4 mobile:hidden laptop:block">
          <img
            src="/portfolio/better_hr.png"
            alt="Better HR"
            className="rounded-lg"
          />
        </div>
        <div className="content-area ml-3 laptop:w-2/4 mobile:w-full">
          <div className="title-area">
            <h1 className="text-white text-md mb-2">BetterHR</h1>
            <div className="flex flex-row items-center gap-x-2 my-2">
              <img src="/company.svg" alt="company_icon" />
              <h4>BetterHR Co., Ltd, Yangon, Myanmar</h4>
            </div>
            <div className="flex flex-row items-center gap-x-2 my-2">
              <img src="/link.svg" alt="company_icon" className="w-[25px] h-[25px"/>
              <Link href="https://betterhr.io/" className="hover:text-blue-300">https://betterhr.io</Link>
            </div>
          </div>
          <p>
            Better HR is an impressive all-in-one suite of digital solutions
            designed to simplify HR procedures for SMEs and enterprises. It is
            cloud-based HR includes payroll management, attendance tracking,
            overtime management, organization directory, asset management, and
            more. With just a smartphone, users can easily access and manage all
            of their HR tasks, without the need for any additional hardware or
            software. Better HR's intuitive dashboard provides real-time access
            to HR data, enabling users to make informed decisions and manage
            tasks from anywhere, at any time. Whether you're a small business
            owner or an HR professional, Better HR offers cutting-edge
            technology and innovative solutions to optimize your HR processes.
          </p>
          <div className="w-full my-4">
            <p className="mr-4 text-bold font-bold">
              Languages: PHP, Laravel, Vue.js (v-2), Nuxt.js, Vuex, Node.js,
              MongoDB, MySQL, Docker, AWS Lambda
            </p>
          </div>
        </div>
      </div>
      {/* ====================== Better Job ======================== */}
      <div className="flex w-full gap-x-7 mt-[30px]">
        <div className="content-area ml-3 laptop:w-2/4 mobile:w-full">
          <div className="title-area">
            <h1 className="text-white text-md mb-2">Better Job</h1>
            <div className="flex flex-row items-center gap-x-2 my-2">
              <img src="/company.svg" alt="company_icon" />
              <h4>BetterHR Co., Ltd, Yangon, Myanmar</h4>
            </div>
            <div className="flex flex-row items-center gap-x-2 my-2">
              <img src="/link.svg" alt="company_icon" className="w-[25px] h-[25px"/>
              <Link href="https://www.betterjobs.co/" className="hover:text-blue-300">https://www.betterjobs.co</Link>
            </div>
          </div>
          <p>
            Better Jobs is to simplify and enhance the job search and
            recruitment process for everyone involved. Operated by Better
            Technologies PTE. It is designed to connect talented professionals
            with exciting career opportunities and help employers find the best
            candidates for their needs.
          </p>
          <div className="w-full my-4">
            <p className="mr-4 text-bold font-bold">
              Languages: PHP, Laravel, Vue.js (v-3), Nuxt.js, Vuex, Node.js,
              MongoDB, MySQL, Docker
            </p>
          </div>
        </div>
        <div className="image-area h-[400px] laptop:w-2/4 mobile:hidden laptop:block">
          <img
            src="/portfolio/better_job.png"
            alt="Better HR"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* ====================== Tharapa ======================== */}
      <div className="flex w-full gap-x-7 mt-[30px]">
        <div className="image-area h-[400px] laptop:w-2/4 mobile:hidden laptop:block">
          <img
            src="/portfolio/tharapa.png"
            alt="Better HR"
            className="rounded-lg"
          />
        </div>
        <div className="content-area ml-3 laptop:w-2/4 mobile:w-full">
          <div className="title-area">
            <h1 className="text-white text-md mb-2">Tharapa Mart</h1>
            <div className="flex flex-row items-center gap-x-2 my-2">
              <img src="/company.svg" alt="company_icon" />
              <h4>Bagan Innovation Technology Co., Ltd, Yangon, Myanmar</h4>
            </div>
            <div className="flex flex-row items-center gap-x-2 my-2">
              <img src="/link.svg" alt="company_icon" className="w-[25px] h-[25px"/>
              <Link href="https://tharapa.ai/" className="hover:text-blue-300">https://tharapa.ai</Link>
            </div>
          </div>
          <p>
            Tharapa allows SMEs and Enterprises to set up their digital stores
            inside their Facebook Messenger. Your customers can browse through
            the galleries about your products/services, see details about those
            and can even order online throughout the smooth fully automated
            process. Tharapa can even redirect those orders to our partner
            delivery services too! Setting up a chatbot for your business is
            easier than ever with Tharapa. Let us know your idea, we will setup
            a chatbot for you, pick a package and your chatbot is ready serve
            your customers.
          </p>
          <div className="w-full my-4">
            <p className="mr-4 text-bold font-bold">
              Languages: PHP, Laravel, Vue.js (v-2), Vuex, Node.js, MongoDB,
              MySQL
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
