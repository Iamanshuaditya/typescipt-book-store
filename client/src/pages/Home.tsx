import Will from "../assets/images/Will-Leitch.png";
import Andrew from "../assets/images/Andrew.png";
import Sylvia from "../assets/images/Sylvia.png";
import ControlledOpenSelect from "../components/Selector";
import Book from "../components/Book";
import PhotoNews from "../assets/images/PhotoNews.png";
import time from "../assets/images/time.png";

export default function Home() {
  return (
    <>
      <NewRelease />
      <Topsellers />
      <Recommonded />
      <News />
    </>
  );
}

function NewRelease() {
  return (
    <div className="font-[Montserrat] flex justify-between mt-20 pl-9 mb-8">
      <div className="w-[30rem] grid relative top-16 mb-12 mob:gap-12">
        <h1 className="font-medium text-[2.5rem] ">New Releases This Week</h1>
        <p>
          Its time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this weeks new releases offer something for
          everyone
        </p>
        <button className="h-[2em] w-40 justify-center items-center flex p-5 font-bold font-[nunito-sans] shadow-md rounded-lg text-[#FFFFF8] bg-[#FFCE1A] border-none">
          Subscribe
        </button>
      </div>
      <div className="flex w-[486.95px] drop-shadow-2xl mob:hidden">
        <img
          src={Andrew}
          alt="andrew book"
          className="w-[17rem] h-[23.625em] z-30 "
        ></img>
        <img
          src={Sylvia}
          alt="sylvia book"
          className="h-[21.3125em] w-[15.386875em] relative top-4 right-28 z-10"
        ></img>
        <img
          src={Will}
          alt="will book"
          className="w-[13.375em] h-[18.59em] relative top-8 right-52"
        ></img>
      </div>
    </div>
  );
}

function Topsellers() {
  function handleSelect() {
    console.log("selected");
  }
  return (
    <div>
      <div className="ml-5 mt-32  mb-10">
        <h6 className="text-2xl font-normal ml-3">Top Sellers</h6>
        <ControlledOpenSelect
          label="Choose a Genre"
          options={[
            { value: 10, label: "Fiction" },
            { value: 20, label: "Non-ficiton" },
            { value: 30, label: "Adventures" },
          ]}
          onSelect={handleSelect}
        />
      </div>
      <div className="flex ml-6 justify-between mob:flex-col mob:gap-3">
        <Book
          imagesrc={time}
          title="The Time Has Come"
          description="Lindbergh's Pharmacy is an Athens, Georgia, institution..."
          price={27.89}
          sale={30.99}
        />
        <Book
          imagesrc={Andrew}
          title="I Want a Better Catastrophe..."
          description="With global warming projected to rocket past the..."
          price={22.89}
          sale={29.99}
        />
        <Book
          imagesrc={Andrew}
          title="I Want a Better Catastrophe..."
          description="With global warming projected to rocket past the..."
          price={22.89}
          sale={29.99}
        />
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="mt-36">
      <h6 className="text-2xl font-normal ml-8 leading-7 mb-2 ">News </h6>
      <div className="flex ">
        <div className="w-[29rem] grid grid-flow-row gap-9 p-10">
          <h6 className="leading-5">The Books You Need to Read in 2023</h6>
          <div className="Line w-[50px] h-[0px] border-2 border-yellow-400"></div>
          <p className="text-base">
            his is the blog we know youve all been waiting for. We present the
            top 10 titles for 2023 in fiction, non-fiction and childrens books;
            a glorious mix of masterful storytelling, compelling subject matter
            and page-turning thrills...
          </p>
        </div>
        <img src={PhotoNews} className="object-contain" alt="photonews" />
      </div>
    </div>
  );
}
function Recommonded() {
  return (
    <div className="mt-40 mb-16">
      {" "}
      <h6 className="text-2xl font-normal ml-8 leading-7 mb-8 ">
        Recommended for you{" "}
      </h6>
      <div className="flex ml-6 justify-between mob:flex-col mob:gap-3">
        <Book
          imagesrc={Andrew}
          title="I Want a Better Catastrophe..."
          description="With global warming projected to rocket past the..."
          price={22.89}
          sale={29.99}
        />
        <Book
          imagesrc={Andrew}
          title="I Want a Better Catastrophe..."
          description="With global warming projected to rocket past the..."
          price={22.89}
          sale={29.99}
        />
        <Book
          imagesrc={Andrew}
          title="I Want a Better Catastrophe..."
          description="With global warming projected to rocket past the..."
          price={22.89}
          sale={29.99}
        />
      </div>
    </div>
  );
}
