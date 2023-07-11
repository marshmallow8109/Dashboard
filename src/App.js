import {
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { setMode } from "./state";
import Navbar from "./views/global/Navbar";
import Dashboard from "./views/dashboard/index";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./views/global/Sidebar";
import Bar from "./views/Bar";
import Contacts from "./views/Contacts";
import FAQ from "./views/FAQ";
import GeoMap from "./views/GeoMap";
import Line from "./views/Line";
import Pie from "./views/Pie";
import Teams from "./views/Teams";
import Invoice from "./views/Invoices";
import Form from "./views/Form";
import Calendar from "./views/Calendar";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoice />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/line" element={<Line />} />
            <Route path="/form" element={<Form />} />
            <Route path="/geography" element={<GeoMap />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
