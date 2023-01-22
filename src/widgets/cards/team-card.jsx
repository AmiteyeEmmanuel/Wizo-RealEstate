
import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ name, position, description }) {
  return (
    <Card color="transparent" shadow={false} className="px-8 py-8 text-center bg-[#5b0e0e]  content-center items-center justify-center">
      <Typography variant="h5" className="mt-6 mb-2 bg-blue-gray-50 px-2 rounded-md">
        {name}
      </Typography>
      {position && (
        <Typography className=" font-normal text-blue-gray-50 px-2 ">
          {position}
        </Typography>
      )}
      {description && <p className="mx-auto mt-5 text-blue-gray-50 sm:text-blue-gray-50" >{description}</p>}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  description: PropTypes.string,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;

