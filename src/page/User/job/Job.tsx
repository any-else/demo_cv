import { CiBookmark, CiLocationOn } from "react-icons/ci";
import EmployersLogo2 from "../../../assets/Employers Logo 2.png";
import "./index.scss";
import Banner from "../../../components/banner";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import BreadCrumb from "../../../components/breadCrumb/BreadCrumb";
// import Filter from "../../../components/filter/Filter";

const Job = () => {
  const navigate = useNavigate();

  const data = new Array(9).fill(1);

  return (
    <div>
      <Banner />
      <div className=" mx-auto px-[60px] font-inter w-[1440px] ">
        <div className="flex justify-between items-center h-12 max-w-[1320px] pt-20">
          <h1 className=" font-bold text-3xl">Ứng viên nổi bật</h1>
          <div className="flex items-center">
            <p
              className="text-sm text-red-700 cursor-pointer"
              onClick={() => navigate("/list-company")}
            >
              xem thêm
            </p>
            <div className="ml-3">
              <FaArrowRight
                className="text-main-0 cursor-pointer"
                onClick={() => navigate("/list-company")}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[50px] max-h-[1320px]">
          {data.map((item) => {
            return (
              <div
                className="bg-white rounded-md shadow-sm company border border-[#E4E5E8]"
                key={item}
              >
                <div className=" mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="bg-gray-200 p-3 rounded-md">
                        <img
                          src={"https://avatar.iran.liara.run/public/35"}
                          alt=""
                          width={"80px"}
                          height={"50px"}
                          style={{ objectFit: "cover" }}
                        />
                      </button>
                      <div className="flex flex-col ml-3">
                        <p className="text-[24px] font-semibold">
                          Nguyen Van A
                        </p>
                        <div className="flex items-center ">
                          <span className="bg-[#0BA02C] text-[#E7F6EA] px-2 py-1 rounded-sm mr-2 text-xs font-semibold">
                            Front-end
                          </span>
                          <span className="bg-[#E7F0FA] text-[#0A65CC] px-2 py-1 rounded-3xl mr-2 text-xs font-semibold">
                            Fresher
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <FaArrowRight
                        className="text-main-0 cursor-pointer"
                        onClick={() => navigate("/active-job")}
                      />
                    </div>
                  </div>

                  <p className="text-lg font-medium mt-6 text-[#767F8C]">
                    Technical in use:{" "}
                    <span className="bg-[#E7F6EA] text-[#0BA02C] px-2 py-1 rounded-md mr-2 text-xs font-semibold">
                      REACTJS
                    </span>
                    <span className="bg-[#E7F6EA] text-[#0BA02C] px-2 py-1 rounded-md mr-2 text-xs font-semibold">
                      NODEJS
                    </span>
                  </p>
                  <p className="text-lg font-medium mt-6 text-[#767F8C]">
                    Foreign Languge:{" "}
                    <span className="bg-[#FCE1D1] text-[#F16A1B] px-2 py-1 rounded-md mr-2 text-xs font-semibold">
                      N2
                    </span>
                  </p>
                  <div className="flex items-center mt-6 text-[#767F8C] gap-1">
                    <CiLocationOn />
                    <span className="text-[#767F8C]">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  Job */}
      <div className=" mx-auto px-[60px] font-inter w-[1440px] pb-[100px]">
        <div className="flex justify-between items-center h-12 max-w-[1320px] pt-20">
          <h1 className=" font-bold text-3xl">Công việc nổi bật</h1>
          <div className="flex items-center">
            <p
              className="text-sm text-red-700 cursor-pointer"
              onClick={() => navigate("/list-company")}
            >
              xem thêm
            </p>
            <div className="ml-3">
              <FaArrowRight
                className="text-main-0 cursor-pointer"
                onClick={() => navigate("/list-company")}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[50px] max-h-[1320px]">
          {data.map((item) => {
            return (
              <div
                key={item}
                className=" bg-white rounded-md shadow-md company border border-[#E4E5E8]"
              >
                <div className=" mb-5">
                  <h2 className="text-lg font-semibold">
                    Techical Support Specialist
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mt-3">
                    <span className="bg-[#E7F6EA] text-[#0BA02C] px-2 py-1 rounded-md mr-2 text-xs font-semibold">
                      PART-TIME
                    </span>
                    <span className="text-sm font-normal">Salary: $100</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button className="bg-gray-200 p-3 rounded-md">
                      <img src={EmployersLogo2} alt="" />
                    </button>
                    <div className="flex flex-col ml-3">
                      <p className="text-sm font-semibold">Google Inc.</p>
                      <div className="flex items-center ">
                        <CiLocationOn />
                        <span className="text-gray-700">Dhaka, Bangladesh</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <CiBookmark className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Job;
