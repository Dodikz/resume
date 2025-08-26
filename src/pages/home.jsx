import RotatingText from "../components/RotatingText.jsx";
import Profile from "/profile.svg";
import { BiSolidDownload } from "react-icons/bi";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-amber-50 gap-10 px-6 py-12 md:p-16 md:px-20 items-center">
      <div className="flex flex-col justify-center items-center md:items-start text-[#02122b] gap-5 md:gap-6 text-center md:text-left mt-12 md:mt-0">
        <h1 className="text-2xl md:text-5xl font-bold flex flex-wrap gap-2 justify-center md:justify-start">
          <span>Hi, I'm</span>
          <RotatingText
            texts={[
              "Sabdo Ilahi Dodik",
              "a Fullstack Web Developer",
              "Creative",
              "Productive",
            ]}
            mainClassName="px-2 pt-1 bg-[#02122b] text-white text-center font-bold text-2xl md:text-3xl inline-block rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.04}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 60, stiffness: 2000 }}
            rotationInterval={3000}
          />
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-md md:max-w-full leading-relaxed md:leading-relaxed ">
          I am a self-taught web developer from Indonesia with over 2 years of
          experience in both frontend and backend development. I enjoy
          transforming ideas into real-world projects while continuously
          learning and exploring new technologies. My focus is on delivering
          innovative and impactful solutions that bring value to every project I
          work on.
          <br/>
          <br/>
          I am always open to collaboration and new opportunities where
          I can contribute and grow together with the team. If you are looking
          for someone passionate, dedicated, and ready to bring fresh
          perspectives, feel free to get in touch with me.
        </p>
      </div>

      <div className="flex justify-center md:justify-center items-center md:items-end gap-6 flex-col mt-8 md:mt-5">
        <div className="flex justify-center md:justify-center items-center gap-6 flex-col mt-8 md:mt-5">
          <img
            src={Profile}
            alt="Foto profil"
            className="w-[200px] h-[250px] md:w-[280px] md:h-[348px] object-cover shadow-lg rounded-lg mt-5 md:mt-7 items-end"
          />
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-[#02122b] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#032147] transition text-sm md:text-base"
          >
            <BiSolidDownload className="text-lg" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
