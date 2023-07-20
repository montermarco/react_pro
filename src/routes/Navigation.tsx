import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { PageOne, PageTwo, PageThree } from '../lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/page1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Page 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Page 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/page3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Page 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="page1" element={ <PageOne /> } />
          <Route path="page2" element={ <PageTwo /> } />
          <Route path="page3" element={ <PageThree /> } />
          <Route path="/*" element={<Navigate to="/page1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
