import { Route, Routes } from "react-router-dom";
import Auth from "../layouts/Auth";
import Register from "../page/auth/Register";
import Admin from "../page/Admin/Admin";
import Business from "../page/Business/Business";
import JobDetail from "../page/MainPage/JobDetail";
import HomePage from "../page/User/home/homePage";
import UserLayout from "../layouts/UserLayout";
import CreateJob from "../page/MainPage/Create-job";
import JobApplicationLayout from "../page/MainPage/Job-application";
import ProfileCV from "../page/MainPage/Job-application/Profile";
import BusinessInformationUser from "../page/User/business-information-user";
import Login from "../page/auth/Login";
import ForgetPassword from "../page/auth/ForgetPassword/ForgetPassword";
import ComfirmPassword from "../page/auth/ForgetPassword/ComfirmPassword";
import Job from "../page/User/job/Job";
import CompanyList from "../page/User/company-list/CompanyList";
import ActiveJob from "../page/User/active-job/ActiveJob";
import CandidateDetail from "../page/User/candidate-detail";

const RouterIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="check-email" element={<ForgetPassword />} />
          <Route path="reset-password/:id" element={<ComfirmPassword />} />
        </Route>
        {/* forgot password */}

        {/* homepage */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/job-detail" element={<JobDetail />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/job-application" element={<JobApplicationLayout />}>
            <Route index element={<ProfileCV />} />
          </Route>
          <Route
            path="/business-information-user"
            element={<BusinessInformationUser />}
          />
          <Route path="/job" element={<Job />} />
          <Route path="/active-job" element={<ActiveJob />} />
          <Route path="/candidate-detail" element={<CandidateDetail />} />
          <Route path="/list-company" element={<CompanyList />} />
        </Route>

        {/* adminpage */}
        <Route path="/admin" element={<Admin />}></Route>
        {/* businesspage */}
        <Route path="/business" element={<Business />}></Route>
      </Routes>
    </div>
  );
};

export default RouterIndex;
