import Image from "next/image";
import img from "../../../public/IMG_(2).jpg";

const Profile = () => {
  return (
    <div>
      <main>
        <header className="m-3">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-3">
            <Image src={img} alt="img" placeholder="blur" width={200} />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Chand Rahmani
              </h2>
              <a
                href="https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212!16zL20vMGRsdjA"
                className="h:text-blue"
              >
                New Delhi , IND
              </a>
              <h3>I'm a React Developer Who Enjoy Creating Website</h3>
              <h3>
                In ♥️ With Coding, 📷 Photography and Traveling and Cricket
              </h3>
            </div>
          </div>
        </header>
        <section>
          <div className="relative   overflow-hidden  py-24 sm:py-32">
            <div
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className=" text-center lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight  sm:text-4xl"></h2>
                <div className="ml-2 text-3xl">
                  <h1> </h1>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <p className="name-wrp"> Welcome TO My Github Profile</p>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <div>
                  <h3 className=" mt-6 text-lg leading-8 text-gray-300"></h3>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
