import React from "react";
import homePageImage from "/src/assets/images/sqtv2b6f7jvenugs7nfa.webp";
import { MdOutlineEventNote } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { LuMapPinned } from "react-icons/lu";
import voteImage from "/src/assets/images/share-image.webp";
import { RiGraduationCapFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineAccessible } from "react-icons/md";
import { BiGame, BiSupport } from "react-icons/bi";
import image from "/src/assets/images/young-voter-generic-canva.jpg";
import teacherImage from "/src/assets/images/3c23a820-22a6-11ef-92da-55d2fc6c8f3d.jpg.webp";
import instImage from "/src/assets/images/images (1).jpeg";
import voterImage from "/src/assets/images/images.jpeg";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const HomePage = () => {
  return (
    <>
      <section
        id="homepage"
        className="relative h-[40rem] text-white 3xl:h-[70rem] 2xl:h-[47rem] xl:h-[45rem]"
      >
        <img
          src={homePageImage}
          alt="bgimage"
          className="absolute w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute w-full h-full bg-[#083143] opacity-75"></div>
        <div className="relative z-10 flex items-center justify-center gap-8 flex-col 3xl:top-80 top-52 text-white">
          <h1 className="text-1xl sm:text-5xl lg:text-6xl xl:text-7xl 3xl:text-9xl 2xl:text-8xl text-white">
            Celebrating<span className="text-button-c">Tomorrow's </span>Leaders
          </h1>
          <p className="text-sm text-center text-gray-300 sm:text-1xl xl:text-1xl 3xl:text-3xl 2xl:text-2xl">
            "Every vote is a voice, every voice is a choice. Empowering you to
            shape the future, one vote at a time. <br />
            In a world where every voice matters, your vote is more than just a
            mark on a ballot— <br />
            it's a chance to stand for what you believe in and make a lasting
            impact. Together, we create the change <br />
            we wish to see, one decision, one choice, one vote at a time."
          </p>
          <Link to="/register">
            {" "}
            <button className="bg-custom-red h-12 w-72 text-2xl rounded-md 3xl:w-[40rem]  3xl:h-20  3xl:text-5xl">
              Vote Now
            </button>
          </Link>
        </div>
      </section>
      <section id="contacts">
  <section id="about" className="bg-white w-full absolute lg:h-24">
    <div className="w-32 h-32 lg:w-40 lg:h-48 bg-button-c rounded-full border-4 border-white relative top-20 lg:top-32 right-4 lg:right-12">
      <div className="w-24 h-24 lg:w-28 lg:h-32 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <div className="relative bottom-24 lg:bottom-40 lg:flex lg:gap-2 lg:m-2">
      <div className="flex flex-col gap-6">
        <img 
          src={voteImage} 
          alt="vimage" 
          className="w-48 h-32 lg:w-80 lg:h-64 xl:h-72 xl:w-96 rounded-tl-xl rounded-bl-xl rounded-br-xl"
        />
        <div className="flex items-start justify-start flex-col gap-2 lg:mt-4">
          <h1 className="text-button-c text-lg lg:text-xl xl:text-2xl">
            About us
          </h1>
          <h3 className="text-custom-blue text-xl lg:text-2xl xl:text-3xl">
            Welcome to our Voting site, a platform dedicated to fostering active participation in the democratic process for individuals and organizations alike
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-sm lg:text-base xl:text-lg font-light">
              Our mission is to provide a modern, reliable, and accessible solution for voting, ensuring that every voice is heard, every vote is counted, and every election is fair. Whether you are organizing a local election, conducting a poll, or managing a corporate decision-making process, VoteHub offers a seamless experience for both administrators and voters. Our platform uses authentication protocols to ensure the security, privacy, and integrity of every vote.
            </p>
            <div className="flex items-center justify-start flex-wrap gap-2 text-white">
              <p className="bg-blue-950 w-32 h-8 text-center rounded-md flex items-center justify-center lg:w-40">
                Institutional Awards
              </p>
              <p className="bg-button-c w-32 h-8 text-center rounded-md flex items-center justify-center lg:w-40">
                Students Awards
              </p>
              <p className="bg-yellow-500 w-32 h-8 text-center rounded-md flex items-center justify-center lg:w-40">
                Teachers Awards
              </p>
              <p className="bg-custom-blue w-32 h-8 text-center rounded-md flex items-center justify-center lg:w-40">
                Special Awards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

      <section className="2xl:h-[84rem] 3xl:h-[134rem] xl:h-[140rem] flex items-center justify-center flex-col mt-[62rem] lg:mt-[39rem] xl:mt-[50rem] 2xl:mt-[55rem] 3xl:mt-[90rem] bg-custom-cyan">
        <div className="flex items-center justify-center flex-col">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2 md:text-5xl 3xl:text-9xl">
              Awards
            </h1>
            <h2 className="text-xl md:text-2xl font-normal 3xl:text-4xl">
              Awards Schemes and Categories
            </h2>
          </div>
          <div className="flex flex-wrap md:gap-40 bg-white md:text-center gap-10 xl:gap-40 px-4 mx-auto items-center justify-center 2xl:gap-20 3xl:gap-40">
            <div className="w-full shadow-black shadow-xs w-full h-40 object-cover rounded-lg shadow-black shadow-lg bg-white h-64 gap-10 rounded-md text-custom-blue md:w-60 lg:w-72 xl:w-[30rem] xl:h-[25rem] 2xl:w-[30rem] 3xl:w-[35rem] 3xl:h-[39rem]">
              <img
                src={voteImage}
                alt="vtimg"
                className="w-60 h-24 object-cover rounded-lg xl:w-[25rem] xl:h-[12rem] 3xl:w-[30rem] 3xl:h-[18rem]"
              />
              <h1 className="text-lg 2xl:text-3xl text-start m-3 xl:text-2xl 3xl:text-4xl">
                Students Voting
              </h1>
              <p className="text-start 2xl:text-xl 2xl:m-4 font-light m-3 xl:text-xl 3xl:text-2xl">
                Your voice, your future—make it count, Students decide the
                change they wish to see. Empowering students, one vote at a
                time, The power of youth, the power of choice.
              </p>
            </div>

            <div className="w-full shadow-black shadow-xs bg-white h-64 gap-10 w-full h-40 object-cover rounded-lg shadow-black shadow-lg rounded-md text-custom-blue md:w-60 lg:w-72 xl:w-[30rem] xl:h-[25rem] 2xl:w-[30rem] 3xl:w-[35rem] 3xl:h-[39rem]">
              {/* <BsBoxArrowUpRight className="w-40 h-40 flex items-center justify-center ml-9 mt-24" /> */}

              <h1 className="text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl">
                Teachers Voting
              </h1>
              <p className="text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl">
                Educators enlighten minds, and ballots drive progress.
                Supporting teachers is championing education. In both classrooms
                and voting booths, teachers guide. Each vote cast by an educator
                is a step towards a brighter future.{" "}
              </p>
            </div>
            <div className="w-full bg-white h-64 gap-10 rounded-md text-custom-blue md:w-60 lg:w-72 xl:w-[30rem] xl:h-[25rem] 2xl:w-[30rem] 3xl:w-[35rem] 3xl:h-[39rem]">
              <a href="your-link-here">
                <img
                  src={voteImage}
                  alt="vtimg"
                  className="w-full h-40 object-cover rounded-lg shadow-black shadow-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]"
                />
              </a>
              <h1 className="text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl">
                Special Voting
              </h1>
              <p className="text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl">
                Each voice is crucial, especially those that stand out.
                Celebrating diversity through every vote, we embrace unique
                perspectives. Special votes, special voices, profound impact.
                True inclusion starts with a single vote.
              </p>
            </div>

            <div className="w-full bg-white h-64 gap-10 rounded-md text-custom-blue md:w-60 lg:w-72 xl:w-[30rem] xl:h-[25rem] 2xl:w-[30rem] 3xl:w-[35rem] 3xl:h-[39rem]">
              <a href="your-link-here">
                <img
                  src={voteImage}
                  alt="vtimg"
                  className="w-full h-40 object-cover rounded-lg shadow-black shadow-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]"
                />
              </a>
              <h1 className="text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl">
                instuitions Voting
              </h1>
              <p className="text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl">
                Institutions shape society—let their voice be heard. Strong
                institutions, stronger communities—one vote at a time. "When
                institutions speak, the future listens." A collective vote for
                collective progress.
              </p>
            </div>

            <div className="w-full bg-white h-64 gap-10 rounded-md text-custom-blue md:w-60 lg:w-72 xl:w-[30rem] xl:h-[25rem] 2xl:w-[30rem] 3xl:w-[35rem] 3xl:h-[39rem]">
              <a href="your-link-here">
                <img
                  src={voteImage}
                  alt="vtimg"
                  className="w-full h-40 object-cover rounded-lg shadow-black shadow-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]"
                />
              </a>
              <h1 className="text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl">
                instuitions Voting
              </h1>
              <p className="text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl">
                Institutions shape society—let their voice be heard. Strong
                institutions, stronger communities—one vote at a time. "When
                institutions speak, the future listens." A collective vote for
                collective progress.
              </p>
            </div>

            <div className="w-full bg-white h-64 gap-10 rounded-md text-custom-blue md:w-60 lg:w-72 xl:w-[30rem] xl:h-[25rem] 2xl:w-[30rem] 3xl:w-[35rem] 3xl:h-[39rem]">
              <a href="your-link-here">
                <img
                  src={voteImage}
                  alt="vtimg"
                  className="w-full h-40 object-cover rounded-lg shadow-black shadow-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]"
                />
              </a>
              <h1 className="text-2xl 2xl:text-5xl text-start m-5 xl:text-4xl 3xl:text-7xl">
                instuitions Voting
              </h1>
              <p className="text-start 2xl:text-2xl 2xl:m-5 font-light m-5 xl:text-2xl 3xl:text-4xl">
                Institutions shape society—let their voice be heard. Strong
                institutions, stronger communities—one vote at a time. "When
                institutions speak, the future listens." A collective vote for
                collective progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center flex-col h-[30rem] gap-5 2xl:h-[40rem] lg:h-[50rem] xl:h-[55rem] 3xl:h-[68rem]">
        <h1 className="text-3xl text-custom-blue md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl">
          What We Provide{" "}
        </h1>
        {/* <p className="text-sm text-center text-gray-500 lg:text-xl  2xl:text-3xl 3xl:text-4xl">
          Scroll through are various cathegories on choose on what to vote for
          remember every vote counts
        </p> */}
        <img
          src={voterImage}
          alt="vtimg"
          className="  w-96 h-40 object-cover rounded-lg xl:w-[35rem] xl:h-[16rem] 3xl:w-[48rem] 3xl:h-[25rem]"
        />
        <div className="flex items-center justify-center gap-4 md:gap-12 lg:gap-20  xl:gap-28  2xl:gap-32 3xl:gap-28">
          <div className="flex items-center justify-center flex-col  w-36 h-36 lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96">
            <RiGraduationCapFill className="w-10 h-10 lg:w-20 lg:h-20 xl:w-22 xl:h-32 3xl:w-30 3xl:h-30" />
            <h1 className="text-sm text-center 2xl:text-2xl 3xl:text-4xl">
              All inclusive
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col  w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96">
            <AiFillSafetyCertificate className="w-10 h-10 lg:w-20 lg:h-20 xl:w-22 xl:h-22 text-button-c 3xl:w-30 3xl:h-30" />
            <h1 className="text-sm text-center 2xl:text-2xl 3xl:text-4xl">
              Safe & secure
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96">
            <MdOutlineAccessible className="w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40" />
            <h1 className="text-sm text-center 2xl:text-2xl 3xl:text-4xl">
              Accessible
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96">
            <BiSupport className="w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40 " />
            <h1 className="text-sm text-center 2xl:text-2xl 3xl:text-4xl">
              Full Support
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col border-8 border-blue-950 rounded-full w-36 h-36  lg:w-44 lg:h-44 xl:w-50 xl:h-50 2xl:w-60 2xl:h-60 3xl:w-96 3xl:h-96">
            <BiSupport className="w-20 h-20 lg:w-30 lg:h-30 xl:w-32 xl:h-32 3xl:w-40 3xl:h-40" />
            <h1 className="text-sm text-center 2xl:text-2xl 3xl:text-4xl">
              Full Support
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-10 3xl:h-[68rem]">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold xl:text-6xl 3xl:text-8xl">Blog</h1>
          <h3 className="text-sm text-gray-600 mt-2 xl:text-xl 3xl:text-3xl">
            Our Recent Articles
          </h3>
          <p className="text-sm text-gray-500 mt-2 xl:text-xl 3xl:text-3xl">
            Check out the latest news and updates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  3xl:gap-12">
          <div className="relative">
            <img
              src={image}
              alt="style"
              className="w-full h-60 object-cover rounded-md shadow-md brightness-50 xl:w-[27rem] xl:h-[25rem]  3xl:w-[46rem] 3xl:h-[35rem] 2xl:w-[36rem] 2xl:h-[28rem]"
            />
            <div className="absolute bottom-3 left-3 text-white">
              <h1 className="text-xl font-bold text-start 3xl:text-5xl 2xl:text-4xl">
                Voting Students Head B. H. S
              </h1>
              <p className="text-sm text-start 3xl:text-2xl font-light 2xl:text-xl">
                The voting of the student head of Balingual High School, Yaoundé
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={teacherImage}
              alt="style"
              className="w-full h-60 object-cover rounded-md shadow-md brightness-50 xl:w-[27rem] xl:h-[25rem]  3xl:w-[46rem] 3xl:h-[35rem] 2xl:w-[36rem]  2xl:h-[28rem]"
            />
            <div className="absolute bottom-3 left-3 text-white">
              <h1 className="text-xl font-bold text-start 3xl:text-5xl 2xl:text-4xl">
                Voting H. O. D
              </h1>
              <p className="text-sm text-start 3xl:text-2xl font-light 2xl:text-xl">
                Vote head of department in your school that best uplifts your
                learning cycle. Remember, every vote counts.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={instImage}
              alt="style"
              className="w-full h-60 object-cover rounded-md shadow-md brightness-50 xl:w-[27rem] xl:h-[25rem] 3xl:w-[46rem] 3xl:h-[35rem] 2xl:w-[36rem]  2xl:h-[28rem]"
            />
            <div className="absolute bottom-3 left-3 text-white">
              <h1 className="text-xl font-bold text-start  3xl:text-5xl  2xl:text-4xl">
                Voting Institutions
              </h1>
              <p className="text-sm text-start 3xl:text-2xl font-light 2xl:text-xl">
                Vote for that institution that uplifts the status of the
                community and makes every word from there count.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center">
        <img
          src={homePageImage}
          alt="image"
          className="w-full h-80 object-cover object-center filter brightness-50  3xl:h-[32rem]"
        />
        <div className="absolute w-full h-full bg-[#0a2530] opacity-75"></div>
        <div className="absolute flex items-center justify-center flex-col text-center text-white">
          <h1 className="text-3xl font-bold mb-2 xl:text-5xl  3xl:text-7xl">
            Do You Have Any Contest?
          </h1>
          <p className="text-lg mb-4 font-thin 3xl:text-4xl">
            Register with Our Virtual Voting Platform
          </p>
          <a href="https://www.linkedin.com/feed/">
            {" "}
            <button className="px-4 py-2 bg-custom-blue text-white rounded-md w-36 h-10 3xl:w-[25rem] 3xl:h-16 3xl:text-3xl 2xl:w-[20rem] 2xl:text-2xl 2xl:h-14">
              Contact Us
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
