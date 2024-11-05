import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-primaryColor rounded-lg ml-2 flex flex-col px-3 sticy-sidebar">
      <div className="my-8">
        {/* Profile Part */}
        <div className="text-customWhite flex flex-col items-center gap-y-2">
          <div className="rounded-lg w-[150px] bg-secondaryColor custom-shadow p-2">
            <img
              src="/images/profile.jpg"
              alt="profile"
              width="100%"
              className="rounded-lg w-[150px]"
            />
          </div>
          <h2 className="text-3xl">Thet Tun</h2>
          <p className="text-md text-customWhite/80">Software Engineer</p>
        </div>
        {/* Divider */}
        <div className="border-b border-gray-200 my-8"></div>
        {/* Contant Par */}
        <div className="flex flex-wrap flex-col gap-y-6">
          {/* Email */}
          <div className="flex flex-row justify-normal gap-x-6">
            <div className="rounded-lg w-[50px] h-[50px] flex-none p-[0.7rem] bg-secondaryColor custom-shadow">
              <svg
                className="fill-iconColor"
                width="100%"
                height="100%"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-customWhite/70">Email</h4>
              <p>thettun1741997@gmail.com</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex flex-row justify-normal gap-x-6">
            <div className="rounded-lg w-[50px] h-[50px] flex-none p-[0.7rem] bg-secondaryColor custom-shadow">
              <svg
                className="fill-iconColor"
                width="100%"
                height="100%"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
              >
                <rect x="18" y="8" width="28" height="48" rx="4" />
                <line x1="28" y1="12" x2="36" y2="12" />
                <line x1="30" y1="52" x2="34" y2="52" />
              </svg>
            </div>
            <div>
              <h4 className="text-customWhite/70">Phone</h4>
              <p>+885 87467403</p>
            </div>
          </div>
          {/* Education */}
          <div className="flex flex-row justify-normal gap-x-6">
            <div className="rounded-lg w-[50px] h-[50px] flex-none p-[0.7rem] bg-secondaryColor custom-shadow">
              <svg
                className="fill-iconColor"
                width="100%"
                height="100%"
                viewBox="0 0 64 64"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="ICON">
                  <path d="M27.001,37.914c-6.509,-0.1 -12.855,-0.403 -19.337,-0.911c-0.06,-0.005 -0.278,-0.003 -0.328,-0.003c-1.011,0 -2.021,0.656 -2.78,1.939c-0.875,1.481 -1.47,3.866 -1.47,6.561c0,2.695 0.595,5.08 1.47,6.561c0.759,1.283 1.769,1.939 2.78,1.939c0.05,0 0.323,0.001 0.412,-0.013c6.464,-1.061 12.78,-1.719 19.252,-1.948l0,7.961c0,0.379 0.214,0.725 0.553,0.894c0.339,0.17 0.744,0.133 1.047,-0.094l3.4,-2.55c-0,-0 3.4,2.55 3.4,2.55c0.303,0.227 0.708,0.264 1.047,0.094c0.339,-0.169 0.553,-0.515 0.553,-0.894l0,-7.958c6.457,0.232 12.903,0.889 19.338,1.945c0.089,0.014 0.362,0.013 0.412,0.013c1.012,0 2.021,-0.656 2.78,-1.939c0.875,-1.481 1.47,-3.866 1.47,-6.561c0,-2.695 -0.595,-5.08 -1.47,-6.561c-0.759,-1.283 -1.768,-1.939 -2.78,-1.939c-0.05,0 -0.268,-0.002 -0.328,0.003c-6.454,0.506 -12.929,0.809 -19.423,0.91c-0.046,-1.617 -1.371,-2.913 -2.999,-2.913l-4,-0c-1.628,0 -2.953,1.297 -2.999,2.914Zm7.999,12.241c-0.874,0.536 -1.901,0.845 -3,0.845c-1.099,-0 -2.126,-0.309 -3,-0.845l0,7.845l2.4,-1.8c0.356,-0.267 0.844,-0.267 1.2,-0c-0,-0 2.4,1.8 2.4,1.8l0,-7.845Zm21.75,-11.155c0.426,0 0.739,0.417 1.058,0.957c0.738,1.249 1.192,3.27 1.192,5.543c0,2.273 -0.454,4.294 -1.192,5.543c-0.319,0.54 -0.632,0.957 -1.058,0.957c-0.426,0 -0.739,-0.417 -1.058,-0.957c-0.738,-1.249 -1.192,-3.27 -1.192,-5.543c0,-2.273 0.454,-4.294 1.192,-5.543c0.319,-0.54 0.632,-0.957 1.058,-0.957Zm-49.414,0c0.426,0 0.739,0.417 1.058,0.957c0.738,1.249 1.192,3.27 1.192,5.543c0,2.273 -0.454,4.294 -1.192,5.543c-0.319,0.54 -0.632,0.957 -1.058,0.957c-0.426,0 -0.739,-0.417 -1.058,-0.957c-0.738,-1.249 -1.192,-3.27 -1.192,-5.543c0,-2.273 0.454,-4.294 1.192,-5.543c0.319,-0.54 0.632,-0.957 1.058,-0.957Zm46.488,0.201c-5.593,0.388 -11.201,0.625 -16.824,0.712l-0,2.497c0.477,0.838 0.75,1.808 0.75,2.84c0,1.032 -0.273,2.002 -0.75,2.84l0,1.951c5.575,0.198 11.141,0.707 16.699,1.514c-0.725,-1.489 -1.199,-3.649 -1.199,-6.055c0,-2.541 0.529,-4.807 1.324,-6.299Zm-43.561,0c0.794,1.492 1.323,3.758 1.323,6.299c0,2.406 -0.474,4.564 -1.198,6.054c5.549,-0.811 11.023,-1.321 16.612,-1.516l0,-1.948c-0.477,-0.838 -0.75,-1.808 -0.75,-2.84c0,-1.032 0.273,-2.002 0.75,-2.84l-0,-2.496c-5.637,-0.086 -11.153,-0.323 -16.737,-0.713Zm21.737,2.299c2.07,-0 3.75,1.68 3.75,3.75c0,2.07 -1.68,3.75 -3.75,3.75c-2.07,-0 -3.75,-1.68 -3.75,-3.75c0,-2.07 1.68,-3.75 3.75,-3.75Zm3,-1.155l-0,-2.345c0,-0.552 -0.448,-1 -1,-1c-0,0 -4,-0 -4,0c-0.552,0 -1,0.448 -1,1l-0,2.345c0.874,-0.536 1.901,-0.845 3,-0.845c1.099,-0 2.126,0.309 3,0.845Zm-21,-24.738l-0,10.352c0,0.014 0,0.027 0.001,0.041l-1.001,-0c-0.552,-0 -1,0.448 -1,1l0,6.5c0,0.552 0.448,1 1,1l4,-0c0.552,-0 1,-0.448 1,-1l0,-6.5c0,-0.552 -0.448,-1 -1,-1l-1.001,-0c0.001,-0.014 0.001,-0.027 0.001,-0.041l-0,-9.261l3.001,1.637c-0.001,0.016 -0.001,0.032 -0.001,0.048l-0,9.612c-0,1.383 0.945,2.587 2.288,2.915l10.492,2.561c0.156,0.039 0.319,0.039 0.475,0c-0,0 7.231,-1.77 10.459,-2.561c1.342,-0.328 2.286,-1.532 2.286,-2.914c-0,-3.078 -0,-9.613 -0,-9.613c0,-0.023 -0.001,-0.046 -0.002,-0.069l5.981,-3.262c0.321,-0.176 0.521,-0.512 0.521,-0.878c0,-0.366 -0.2,-0.703 -0.521,-0.878l-18.52,-10.102c-0.299,-0.163 -0.659,-0.163 -0.958,0l-18.52,10.102c-0.321,0.175 -0.521,0.512 -0.521,0.878c-0,0.366 0.2,0.702 0.521,0.878l1.019,0.555Zm2,12.393l0,4.5c0,-0 -2,0 -2,0c0,0 0,-4.5 0,-4.5l2,-0Zm1.382,-14.826l9.547,-0c0.552,-0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-9.547,-0l14.598,7.963l2.646,-1.444c0.485,-0.264 1.093,-0.085 1.357,0.399c0.264,0.485 0.085,1.093 -0.399,1.357l-3.125,1.704c-0.299,0.163 -0.659,0.163 -0.958,0l-10.501,-5.727l-0,8.569c-0,0.461 0.315,0.862 0.763,0.972c-0,-0 10.253,2.504 10.253,2.504l10.222,-2.503c0.447,-0.11 0.762,-0.511 0.762,-0.972l-0,-8.592l-4.408,2.404c-0.485,0.265 -1.093,0.086 -1.357,-0.399c-0.264,-0.484 -0.086,-1.092 0.399,-1.356c-0,-0 10.778,-5.879 10.778,-5.879c-0,-0 -16.432,-8.963 -16.432,-8.963l-14.598,7.963Z" />
                </g>
              </svg>
            </div>
            <div>
              <h4 className="text-customWhite/70">Education</h4>
              <p>Bachelor of Computer Science (B.C.Sc)</p>
            </div>
          </div>
          {/* Address */}
          <div className="flex flex-row justify-normal gap-x-6">
            <div className="rounded-lg w-[50px] h-[50px] flex-none p-[0.7rem] bg-secondaryColor custom-shadow">
              <svg
                className="fill-iconColor"
                height="100%"
                width="100%"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,100.174c-46.03,0-83.478,37.448-83.478,83.478S209.97,267.131,256,267.131s83.478-37.448,83.478-83.478
			S302.03,100.174,256,100.174z M256,233.74c-27.618,0-50.087-22.469-50.087-50.087c0-27.618,22.469-50.087,50.087-50.087
			c27.618,0,50.087,22.469,50.087,50.087C306.087,211.271,283.618,233.74,256,233.74z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M256,0C154.734,0,72.347,82.387,72.347,183.653c0,70.835,21.232,98.615,169.771,320.928
			c6.603,9.882,21.148,9.903,27.764,0c149.325-223.389,169.771-250.792,169.771-320.928C439.652,82.387,357.266,0,256,0z
			 M256.001,465.261C122.631,265.788,105.74,241.56,105.74,183.653C105.739,100.799,173.146,33.391,256,33.391
			s150.261,67.407,150.261,150.261C406.261,239.551,393.41,259.681,256.001,465.261z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h4 className="text-customWhite/70">Address</h4>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
          {/* Birthday */}
          <div className="flex flex-row justify-normal gap-x-6">
            <div className="rounded-lg w-[50px] h-[50px] flex-none p-[0.7rem] bg-secondaryColor custom-shadow">
              <svg
                className="fill-iconColor"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M18,5V3a1,1,0,0,0-2,0V5H8V3A1,1,0,0,0,6,3V5H2V21H22V5Zm2,14H4V7H20Zm-3.94-7.58-1.2-1.2L11.3,13.78,9.14,11.63l-1.2,1.2,3.36,3.36Z" />
              </svg>
            </div>
            <div>
              <h4 className="text-customWhite/70">Birthday</h4>
              <p>17-04-1997</p>
            </div>
          </div>
          {/* Download Resume */}
          <div className="flex flex-row justify-normal gap-x-6">
            <div className="rounded-lg w-[50px] h-[50px] flex-none p-[0.7rem] bg-secondaryColor custom-shadow">
              <svg
                height="100%"
                width="100%"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 452.168 452.168"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <g>
                      <polygon
                        className="fill-iconColor"
                        points="140.446,344.424 226.096,430.075 311.739,344.424 294.352,327.037 238.395,383.002 
				238.395,216.212 213.798,216.212 213.798,383.002 157.841,327.037 			"
                      />
                    </g>
                    <g>
                      <path
                        className="fill-iconColor"
                        d="M357.34,105.037c-4.072,0-8.185,0.268-12.282,0.797c-20.809-30.458-58.688-46.837-95.681-40.025
				c-17.428-27.109-47.536-43.715-79.985-43.715c-49.064,0-89.414,36.896-94.576,85.139C31.084,116.613,0,154.727,0,200.207
				c0,52.47,42.691,95.161,95.161,95.161h95.031v-24.386H95.169c-39.025,0-70.775-31.75-70.775-70.776
				c0-36.351,27.231-66.606,63.33-70.377l10.909-2.471v-10.12c0-39.017,31.742-70.767,70.767-70.767
				c26.743,0,50.909,14.867,63.07,38.798l4.576,8.998l9.689-2.812c32.051-9.291,65.972,5.406,81.635,33.693l4.406,7.958l8.893-1.951
				c5.202-1.146,10.461-1.731,15.664-1.731c38.855,0,70.467,31.75,70.467,70.775c0,39.017-31.75,70.776-70.776,70.776h-95.698
				v24.386h95.681c52.47,0,95.161-42.691,95.161-95.161C452.168,147.729,409.631,105.037,357.34,105.037z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h4 className="text-customWhite/70">Download Resume</h4>
              <p>Thet_Tun.pdf</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-x-3 mt-10">
          <Link
            href="https://web.facebook.com/thet1112019/"
            target="_blank"
            className="w-[35px] h-[35px] custom-shadow rounded-full"
          >
            <svg
              height="100%"
              width="100%"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 291.319 291.319"
              xmlSpace="preserve"
            >
              <title>thet1112019</title>
              <g>
                <path
                  className="fill-facebookColor"
                  d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
		S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"
                />
                <path
                  className="fill-white"
                  d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055
		v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366
		C154.791,104.556,158.341,100.277,163.394,100.277z"
                />
              </g>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/thet-tun-81ba69192/"
            target="_blank"
            className="w-[35px] h-[35px] custom-shadow rounded-full"
          >
            <svg
              height="100%"
              width="100%"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 291.319 291.319"
              xmlSpace="preserve"
            >
              <title>thet-tun-81ba69192</title>
              <g>
                <path
                  className="fill-linkedInColor"
                  d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
		S65.21,0,145.659,0z"
                />
                <path
                  className="fill-white"
                  d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
		c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
		s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
		c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"
                />
              </g>
            </svg>
          </Link>
          <Link
            href="https://github.com/thettun17"
            target="_blank"
            className="w-[35px] h-[35px] custom-shadow rounded-full"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>thettun17</title>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
