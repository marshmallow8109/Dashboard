import { Box } from "@mui/material";
import Header from "../components/Header";
import Line from "../components/Line";

const LineChart = () => {
  return (
    <Box m={"2rem"}>
      <Header title={"Line Chart"} subTitle={"Data Line Chart"} />

      <Box height={"68vh"}>
        <Line />
      </Box>
    </Box>
  );
};
export default LineChart;
