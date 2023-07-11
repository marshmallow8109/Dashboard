import { Box, colors } from "@mui/material";
import Header from "../components/Header";
import Geo from "../components/Geo";

const GeoMap = () => {
  return (
    <Box m={"10px"}>
      <Header title={"Geography Chart"} subTitle={"Data Geography Chart"} />

      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <Geo />
      </Box>
    </Box>
  );
};
export default GeoMap;
