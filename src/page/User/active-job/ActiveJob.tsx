import { CiLocationOn } from "react-icons/ci";

import { FaArrowRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Filter from "../../../components/filter/Filter";
import { RxSlash } from "react-icons/rx";
import React from "react";

const ActiveJob = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = new Array(9).fill(1);

  return (
    <div>
      <div className="w-full py-6 px-[60px] bg-[#F1F2F4] font-inter">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <NavLink
                to="/"
                className="inline-flex items-center text-sm font-normal text-[#767F8C] hover:text-main-0"
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <div className="flex items-center">
                <RxSlash className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
                <NavLink
                  to="/projects"
                  className="ms-1 text-sm font-normal text-[#767F8C] hover:text-main-0 md:ms-2"
                >
                  Ứng viên nổi bật
                </NavLink>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <Filter />
      <div className=" mx-auto px-[60px] font-inter w-[1440px] pb-[100px]">
        <div className="flex justify-between items-center h-12 max-w-[1320px] pt-20"></div>
        <div className="grid grid-cols-3 gap-6 mt-[50px] max-h-[1320px]">
          {data.map((item) => {
            return (
              <div
                className=" bg-white rounded-md shadow-sm company border border-[#E4E5E8]"
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
                        onClick={() => navigate("/list-company")}
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
    </div>
  );
};

export default ActiveJob;
