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
import TaskDialog from "./TaskDialog";
import { useState } from "react";

const useStyles = makeStyles({
  complete: {
    textDecorationLine: "line-through",
  },
  incomplete: {},
});

const Task = ({
  task,
  deleteTaskHandler,
  toggleCompleteHandler,
  taskUpdateHandler,
}) => {
  const { completed } = task;

  // states
  const [open, setOpen] = useState(false);

  // handlers
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // JSX
  const classes = useStyles();
  return (
    <>
      <TaskDialog
        TaskHandler={taskUpdateHandler}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        id={task._id}
        initialTaskDetail={{
          title: task.title,
          description: task.description,
          completed: task.completed,
        }}
      />
      <Accordion elevation={0} sx={{ m: 1 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography
            variant="h6"
            className={completed ? classes.complete : ""}
          >
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
          <Typography variant="body1">{task.description}</Typography>
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
              <Button sx={{ ml: 5 }} onClick={handleClickOpen}>
                <EditIcon fontSize="medium" color="info" />
              </Button>
            </Box>

            {!completed ? (
              <Button
                variant="outlined"
                color="success"
                className={classes.incomplete}
                onClick={() => toggleCompleteHandler(task._id)}
              >
                Mark As Done
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="error"
                onClick={() => toggleCompleteHandler(task._id)}
              >
                Mark As Undone
              </Button>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Task;
