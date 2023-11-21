import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  const svgStyle = {
    widths: "4rem",
    height: "4rem",
    overflow: "visible",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const styleLink = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.9rem",
    color: "#000",
  };

//   const TextVariant = {
//     hidden: {
//       opacity: 0,
//       x: -50,
//     },
//     visible: {
//       opacity: 1,
//       x: -5,

//       transition: {
//         duration: 2,
//         delay: 2,
//         ease: "easeInOut",
//       },
//     },
//   };

  return (
    <Box color="#000" fontWeight="bold">
      <Link to="/" style={styleLink}>
        <motion.Typography
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: -5,
          }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeInOut",
          }}
          variant="span"
          fontSize="2rem"
          fontWeight="bold"
        >
          Neve
        </motion.Typography>
        <svg
          style={svgStyle}
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          {/* <g>
                        <path d="M0,0h24v24H0V0z" fill="none" />
                        <path d="M0,0h24v24H0V0z" fill="none" />
                    </g> */}
          <g>
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              fill="none"
              stroke="black"
              strokeWidth="1"
            />
          </g>
        </svg>
      </Link>
    </Box>
  );
};

export default Logo;
