import {
  Box,
  Paper,
  Typography,
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "./Task";
import { useState } from "react";
import TaskDialog from "./TaskDialog";

const TaskList = (props) => {
  // task card with a button to mark it complete and when the task is marked complete it's content will get line through text style.
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { tasks } = props.tasks;
  const { deleteTaskHandler } = props;

  const taskList = tasks.map((task) => {
    return (
      <Task
        key={task._id}
        task={task}
        deleteTaskHandler={deleteTaskHandler}
        taskUpdateHandler={props.taskUpdateHandler}
        toggleCompleteHandler={props.toggleCompleteHandler}
      />
    );
  });

  return (
    <Box
      overflow="auto"
      height="80%"
      minWidth={1 / 2}
      boxShadow={3}
      borderRadius={4}
    >
      <TaskDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        TaskHandler={props.addTaskHandler}
        open={open}
      />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", zIndex: 1, bottom: "25%", right: "10%" }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      {taskList}
    </Box>
  );
};

export default TaskList;
