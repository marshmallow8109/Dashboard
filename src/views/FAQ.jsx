import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";
import { useState } from "react";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box m={"2rem"}>
      <Header title={"FAQ"} subTitle={"Frequently Asked Questions"} />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Lorem ipsum dolor sit amet consecteturamet consectetur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            sed distinctio voluptas possimus, consectetur ipsam veritatis
            delectus asperiores eos consequuntur.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Lorem amet consecteturamet consectetur ipsum
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicingelit. Laboriosam
            sed distinctio voluptas possimus, consectetur ipsam veritatis
            delectus asperiores eos consequunturelit. Laboriosam sed distinctio
            voluptas possimus, consectetur ipsam veritatis delectus asperiores
            eos consequuntur elit. Laboriosam sed distinctio voluptas possimus,
            consectetur ipsam veritatis delectus asperiores eos consequuntur.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Lorem ipsum dolor amet consectetur sit amet consecteturamet
            consectetur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            sed distinctio voluptas possimus, consectetur ipsam veritatis
            delectus asperiores eos consequuntur.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Lorem ipsum dolor sitamet consecteturamet consecteturamet ametamet
            consectetur consectetur consectetur amet consectetur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            sed distinctioelit. Laboriosam sed distinctio voluptas possimus,
            consectetur ipsam veritatis delectus asperiores eos consequuntur
            elit. Laboriosam sed distinctio voluptas possimus, consectetur ipsam
            veritatis delectus asperiores eos consequuntur voluptas possimus,
            consectetur ipsam veritatis delectus asperiores eos consequuntur.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
      >
        <AccordionSummary
          id="panel5-header"
          aria-controls="panel5-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h5" color={colors.grey[500]}>
            Lorem ipsum dolor sit amet consectetur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            sed distinctio voluptas possimus, consectetur ipsam veritatis
            delectus asperiores eos consequuntur.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
