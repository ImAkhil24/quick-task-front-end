import { ExpandMore } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
  Box,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  complete: {
    textDecorationLine: "line-through",
  },
});

const Task = () => {
  const completed = false;
  const classes = useStyles();
  return (
    <Accordion sx={{m:1}}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography className={completed ? classes.complete : ""}>
          {" "}
          <BoltIcon
            color="info"
            sx={{
              position: "relative",
              top: "6px",
            }}
          />{" "}
          Title of the Task{" "}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          {!completed ? (
            <Button variant="contained" color="success">
              Mark As Done
            </Button>
          ) : (
            <Button variant="contained" color="error">
              Mark As Undone
            </Button>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Task;
