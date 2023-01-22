import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children }) {
  return (
    <div className="mx-auto w-full px-0.5 text-center lg:w-6/12 relative right-12">
      <Typography variant="h2" color="gray-500" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-50">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
