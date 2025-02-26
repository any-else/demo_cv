import { LuPhoneCall } from "react-icons/lu";
import SubHeader from "../subHeader";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <div className=" min-w-[1440px] h-[48px]  bg-[#F1F2F4] flex justify-between items-center py-0 px-[30px]">
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "hover:text-red-500"
                }
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "hover:text-red-500"
                }
              >
                Việc làm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job-application"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "hover:text-red-500"
                }
              >
                CV của bạn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/customer-support"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "hover:text-red-500"
                }
              >
                Customer Support
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className=" w-[280px] h-[24px] gap-6 flex items-center">
          <LuPhoneCall />
          <p> +1-202-555-0178</p>
          <button>English</button>
        </div>
      </div>
      {pathname !== "/job" ? <SubHeader /> : <></>}
    </div>
  );
};

export default Header;
