import { withRouter } from "react-router-dom";

import Navbar from "../components/global/Navbar/Navbar";
import Footer from "../components/global/Footer/Footer";

const hideNav = (props) => {
  const { location } = props;

  if (location.pathname.match(/^\/$/)) {
    return null;
  }

  return <Navbar />;
};

const HiddenNav = withRouter(hideNav);

const hideFooter = (props) => {
  const { location } = props;

  if (location.pathname.match(/^\/$/)) {
    return null;
  }

  return <Footer />;
};

const HiddenFooter = withRouter(hideFooter);

export { HiddenNav, HiddenFooter };
