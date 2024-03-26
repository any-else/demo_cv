import logo from "../../../assets/logo.png";
import heart from "../../../assets/heart.png";
import Location1 from "../../../assets/Location1.png";
import Stack from "../../../assets/Stack.png";
import cv from "../../../assets/cv.png";
import LinkSimple from "../../../assets/LinkSimple.png";
import Social1 from "../../../assets/Social icon (1).png";
import Social2 from "../../../assets/Social icon (2).png";
import Social from "../../../assets/Social icon.png";
import Envelope from "../../../assets/Envelope.png";
import "./index.scss";
import { Link } from "react-router-dom";
const CandidateDetail = () => {
  return (
    <div>
      <div className="w-screen bg-[#f1f2f4]">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center mb-3 sm:mb-0">
            <li>
              <div className="flex items-center h-16">
                <a className="inline-flex items-center pr-1 pl-16 py-2 text-sm font-normal text-center text-[#767F8C] bg-[#f1f2f44d] ">
                  Trang chủ
                </a>
              </div>
            </li>
            <span className="mx-2 text-gray-400">/</span>
            <li aria-current="page">
              <div className="flex items-center h-16">
                <a className="inline-flex items-center pl-1 py-2 text-sm font-normal text-center text-[#767F8C] bg-[#f1f2f44d] ">
                  Ứng viên nổi bật
                </a>
              </div>
            </li>
            <span className="mx-2 text-gray-400">/</span>
            <li aria-current="page">
              <div className="flex items-center h-16">
                <a className="inline-flex items-center pl-1 py-2 text-sm font-normal text-center text-[#18191C] bg-[#f1f2f44d] ">
                  Nguyễn Văn A
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="main max-w-[1320px] mx-auto ">
        <div className=" heading mx-auto mt-[35.5px] flex justify-between">
          <div className="flex items-center">
            <img className="w-[96px] mr-6" src={logo} alt="" />
            <div className="heading ">
              <p className="text-2xl">Nguyen Van A</p>
              <p className="text-[18px] mt-3 address">
                at FPT Software{" "}
                <span className="mx-2 text-white itag">Front-end</span>{" "}
                <span className="bg-[#E7F0FA] text-[#0A65CC] px-5 py-2 rounded-[52px]">
                  Fresher
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-3 bg-red-300 text-red-700 p-4 rounded">
              <img src={heart} alt="" />
            </button>
            <button className="text-base flex items-center bg-red-700 text-white px-[42px] py-4 rounded">
              <span className="mr-3">Đặt lịch phỏng vấn</span>
            </button>
          </div>
        </div>
        <div className="container mt-8 flex">
          <div className="left-ctn max-w-[760px] ">
            <p className="text-it-black text-lg text-black ">
              <b> Mô tả về bản thân</b>
            </p>
            <p className="mt-4 text-base">
              <span className="block mb-4">
                Velstar is a Shopify Plus agency, and we partner with brands to
                help them grow, we also do the same with our people!
              </span>
              <span className="block mb-4">
                Here at Velstar, we don't just make websites, we create
                exceptional digital experiences that consumers love. Our team of
                designers, developers, strategists, and creators work together
                to push brands to the next level. From Platform Migration, User
                Experience & User Interface Design, to Digital Marketing, we
                have a proven track record in delivering outstanding eCommerce
                solutions and driving sales for our clients.
              </span>
              <span className="block mb-4">
                The role will involve translating project specifications into
                clean, test-driven, easily maintainable code. You will work with
                the Project and Development teams as well as with the Technical
                Director, adhering closely to project plans and delivering work
                that meets functional & non-functional requirements. You will
                have the opportunity to create new, innovative, secure and
                scalable features for our clients on the Shopify platform
              </span>
              <span>Want to work with us? You're in good company!</span>
            </p>
            <div className="requirements">
              <b className=" block text-black mt-4">Kinh nghiệm làm việc</b>
              <ul className="ml-6">
                <li>
                  Great troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  3+ years of experience in back-end development working either
                  with multiple smaller projects simultaneously or large-scale
                  applications
                </li>
                <li>
                  Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                  Laravel
                </li>
                <li>
                  Working regularly with APIs and Web Services (REST, GrapthQL,
                  SOAP, etc)
                </li>
                <li>
                  Have experience/awareness in Agile application development,
                  commercial off-the-shelf software, middleware, servers and
                  storage, and database management.
                </li>
                <li>
                  Familiarity with version control and project management
                  systems (e.g., Github, Jira)
                </li>
                <li>
                  Great troubleshooting and analytical skills combined with the
                  desire to tackle challenges head-on
                </li>
                <li>
                  Ambitious and hungry to grow your career in a fast-growing
                  agency
                </li>
              </ul>
            </div>

            <div className="benefits: !pb-80">
              <b className=" block text-black mt-4">Định hướng phát triển</b>
              <ul className="ml-6">
                <li>
                  Early finish on Fridays for our end of week catch up (4:30
                  finish, and drink of your choice from the bar)
                </li>
                <li>
                  28 days holiday (including bank holidays) rising by 1 day per
                  year PLUS an additional day off on your birthday
                </li>
                <li>Generous annual bonus.</li>
                <li>Healthcare package</li>
                <li>
                  Paid community days to volunteer for a charity of your choice
                </li>
                <li>
                  £100 contribution for your own personal learning and
                  development
                </li>
                <li>Free Breakfast on Mondays and free snacks in the office</li>
                <li>
                  Access to Perkbox with numerous discounts plus free points
                  from the company to spend as you wish.
                </li>
                <li>Cycle 2 Work Scheme</li>
                <li>Brand new MacBook Pro</li>
                <li>
                  Joining an agency on the cusp of exponential growth and being
                  part of this exciting story
                </li>
              </ul>
            </div>
          </div>
          <div className="right-ctn w-[536px] h-[160px]  ml-6">
            <div className=" p-8 border border-collapse ml-6 rounded-lg">
              <div className="flex">
                <div className="mr-2">
                  <img src={Location1} alt="" />
                </div>
                <p className="mb-2 text-[#18191C] font-inter text-base font-semibold flex items-center">
                  Địa chỉ cá nhân
                </p>
              </div>
              <div className="font-inter text-base font-normal text-[#767F8C]">
                <p>
                  Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố
                  Hồ Chí Minh
                </p>
              </div>
            </div>
            <div className=" flex px-8 py-6 border border-collapse ml-6 rounded-t-lg mt-8">
              <div className="">
                <div className="flex">
                  <div className="mr-2 max-h-6 max-w-6">
                    <img src={Stack} alt="" />
                  </div>
                  <p className="mb-2 text-[#18191C] font-inter text-base font-semibold flex items-center">
                    Kĩ năng
                  </p>
                </div>
                <div>
                  <ul className="ml-6">
                    <li className="mb-6">
                      <span className="text-[#767F8C] font-inter font-normal text-base mr-2">
                        Technical:
                      </span>
                      <span className="featured bg-[##E7F6EA] text-[#0BA02C] mr-2 uppercase font-semibold">
                        ReactJS
                      </span>
                      <span className="featured bg-[##E7F6EA] text-[#0BA02C] mr-2 uppercase font-semibold">
                        NodeJS
                      </span>
                    </li>

                    <li>
                      <span className="text-[#767F8C] font-inter font-normal text-base mr-2">
                        Language:
                      </span>
                      <span className="featured bg-[#FCE1D1] text-[#F16A1B] mr-2 uppercase font-semibold">
                        Japanese N2
                      </span>
                      <span className="featured bg-[#C4CCF8] text-[#3A57E8] mr-2 uppercase font-semibold">
                        Toeic 700
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex px-8 py-6 border border-collapse ml-6 mb-16 rounded-b-lg">
              <div className="">
                <p className="font-medium text-lg mb-5">Thông tin cá nhân</p>
                <ul className="flex">
                  <li className="w-[147px]">
                    <Link
                      className=" p-[8px] rounded bg-red-300 flex justify-center text-base"
                      to="#"
                    >
                      <img src={LinkSimple} alt="" />{" "}
                      <span className="text-red-700">Copy Links</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Social} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-700 flex text-base"
                      to="#"
                    >
                      <img src={Social1} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[10px] ml-2 rounded bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Social2} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" p-[8px] rounded ml-2 bg-red-300 flex text-base"
                      to="#"
                    >
                      <img src={Envelope} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex py-6 border border-collapse ml-6 rounded-b-lg">
              <div className="text-center w-full">
                <div className="flex px-[32px]">
                  <img src={cv} alt="" className="mr-[10px]" />
                  <span className="font-medium text-lg text-black">
                    Truy cập CV của A để xem thêm
                  </span>
                </div>
                <div className="flex justify-center">
                  <button className="text-base flex items-center bg-red-700 text-white px-[42px] py-4 rounded">
                    <span className="mr-3">Truy cập CV</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
