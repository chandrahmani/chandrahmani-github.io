const Profile = () => {
  return (
    <div>
      <main className="main-wrapper">
        <header className="header-wrapper">
          <div className="logo-wrapper">
            <img src="https://media.licdn.com/dms/image/C4E03AQFE_nEE3KyCtw/profile-displayphoto-shrink_400_400/0/1642938148788?e=1683158400&v=beta&t=REXRyle198rBn3WID-bCgk13wqKmeU1affNiFijPmEs" />

            <div className="info">
              <h2>Chand Rahmani</h2>
              <a href="https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139391!4d77.2090212!16zL20vMGRsdjA">
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
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
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
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Skill Set
                </h2>
                <div className="mt-6 text-lg leading-8 text-gray-300">
                  Specially ! HTML | CSS 3 | Styled_Components | JavaScript |
                  React_js | SASS | Git | Bootstrap 5 | Next js | Tailwind Css
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <p>I am a HTML Developer</p>
                <p>My Name is Chand I Am In 12th Class I Like Programming</p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"></div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"></dl>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;