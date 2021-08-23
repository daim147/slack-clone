import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { ReactComponent as YourSvg } from "../../app/undraw.svg";

import { NotSelected } from "./Chat.styles";

const NotSelectedPage = () => {
  return (
    <NotSelected item xs={9}>
      <Typography variant="h2">Please Select any channel!</Typography>
      <motion.div
        animate={{
          y: [5, -5],
          transition: {
            // duration: 1,
            type: "spring",
            bounce: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <YourSvg />
      </motion.div>
    </NotSelected>
  );
};

export default NotSelectedPage;
