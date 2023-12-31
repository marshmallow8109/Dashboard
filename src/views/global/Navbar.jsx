import {
  Button,
  IconButton,
  useTheme,
  Box,
  InputBase,
  Typography,
} from "@mui/material";
import { setMode } from "../../state";
import { useSelector, useDispatch } from "react-redux";
import { tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlined } from "@mui/icons-material";
import { NotificationsOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { PersonOutline } from "@mui/icons-material";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mode = useSelector((state) => state.mode);
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      <Box
        display={"flex"}
        borderRadius={"3px"}
        sx={{
          background: colors.primary[400],
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      <Box display={"flex"}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography>{mode} mode</Typography>
          <IconButton
            onClick={() => dispatch(setMode())}
            sx={{
              "&:hover": {
                scale: "120%",
                transition: "all 0.5s",
              },
            }}
          >
            {mode === "dark" ? <DarkModeOutlined /> : <LightModeOutlinedIcon />}{" "}
          </IconButton>
        </Box>
        <IconButton onClick={() => alert("your notification shows up here")}>
          <NotificationsOutlined />
        </IconButton>
        <IconButton onClick={() => alert("access the settings page here")}>
          <SettingsOutlined />
        </IconButton>
        <IconButton onClick={() => alert("Takes yu to the profile page")}>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Navbar;
