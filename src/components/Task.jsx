import { ExpandMore } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
  incomplete: {},
});

const Task = ({ task, deleteTaskHandler }) => {
  const completed = false;
  const classes = useStyles();
  return (
    <Accordion elevation={0} sx={{ m: 1 }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography className={completed ? classes.complete : ""}>
          <BoltIcon
            color="info"
            sx={{
              position: "relative",
              top: "6px",
            }}
          />
          {task.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{task.description}</Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          m={0.5}
        >
          <Box>
            <Button onClick={() => deleteTaskHandler(task._id)}>
              <DeleteIcon fontSize="medium" color="error" />
            </Button>
            <Button sx={{ ml: 5 }}>
              <EditIcon fontSize="medium" color="info" />
            </Button>
          </Box>

          {!completed ? (
            <Button
              variant="outlined"
              color="success"
              className={classes.incomplete}
            >
              Mark As Done
            </Button>
          ) : (
            <Button variant="outlined" color="error">
              Mark As Undone
            </Button>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Task;
