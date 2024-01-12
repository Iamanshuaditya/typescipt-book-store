import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  bottom-0 left-0 w-full font-[nunito-sans] mt-40">
      <div className="flex justify-between px-10 pb-8 items-center mob:flex-col mob:mr-0 mob:ml-20">
        <div className="flex flex-col relative bottom-7 justify-between h-36">
          <div> </div>
          <ul className="flex  flex-row-reverse justify-around w-[25rem]">
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="w-96">
          <p className="mb-5">
            Subscribe to stay tuned for new product and latest updates. Let’s do
            it!
          </p>
          <div className="SubscribeByEmail  h-9 justify-center items-start inline-flex w-96">
            <div className="Enter pl-[25px] pr-[73px] py-[5px] bg-white rounded-tl-lg rounded-bl-lg border border-yellow-400 justify-start items-start gap-2.5 inline-flex ">
              <input
                placeholder="Enter your email address"
                className="Subscribe text-neutral-500 text-opacity-50 text-base font-bold font-['Nunito Sans'] w-full border-none active:border-none"
              ></input>
            </div>
            <div className="Subscribe px-[49px] py-[6px] bg-yellow-400 rounded-tr-lg rounded-br-lg justify-start items-start gap-2.5 inline-flex">
              <button className="Subscribe text-center text-stone-50 text-base font-bold font-['Nunito Sans']">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer menu lower flex justify-between font-normal font-[nunito-sans] leading-[24.55px] items-center px-[2.7rem] py-5 mob:flex-col mob:gap-7">
        <ul className="flex w-[30rem] justify-between mob:flex-col mob:items-center mob:gap-8">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
        </ul>
        <div className="flex justify-between w-24">
          <IoLogoInstagram />
          <CiFacebook />
          <FaGoogle />
        </div>
      </div>
    </footer>
  );
}
