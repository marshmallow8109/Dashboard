import { Box } from "@mui/material";
import Header from "../components/Header";
import Bar from "../components/Bar";

const Barchat = () => {
  return (
    <Box m={"10px"}>
      <Header title={"Bar Chart"} subTitle={"Data Bar Chart"} />

      <Box height={"75vh"}>
        <Bar />
      </Box>
    </Box>
  );
};

export default Barchat;
