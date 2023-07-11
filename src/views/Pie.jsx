import { Box } from "@mui/material";
import Header from "../components/Header";
import Pie from "../components/Pie";

const PieChart = () => {
  return (
    <Box m={"2rem"}>
      <Header title={"Pie Chart"} subTitle={"Data Pie Chart"} />

      <Box height={"68vh"}>
        <Pie />
      </Box>
    </Box>
  );
};
export default PieChart;
