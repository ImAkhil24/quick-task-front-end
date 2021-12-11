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

const NewTaskDialog = ({
  open,
  handleClickOpen,
  handleClose,
  addTaskHandler,
}) => {
  // states
  const initialTaskDetail = {
    title: "",
    description: "",
    completed: false,
  };
  const [taskDetail, setTaskDetail] = useState(initialTaskDetail);
  const [checked, setChecked] = useState(false);

  // handlers
  const onChangeHandler = (e) => {
    setTaskDetail((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onCheckHandler = (e) => {
    setChecked(!checked);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = { ...taskDetail, completed: checked };
    addTaskHandler(formData);
    handleClose();
  };

  // jsx
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formSubmitHandler}>
          <DialogTitle>New Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please input the task details and then click Add Task button.
            </DialogContentText>

            <Box
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <TextField
                required
                fullWidth
                placeholder="title"
                name="title"
                value={taskDetail.title}
                onChange={onChangeHandler}
              />
              <TextField
                required
                fullWidth
                multiline
                placeholder="description"
                maxRows="2"
                name="description"
                value={taskDetail.description}
                onChange={onChangeHandler}
              />
              <FormControlLabel
                control={<Checkbox name="completed" />}
                label="completed"
                onChange={onCheckHandler}
                checked={checked}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add Task</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

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
      <Task key={task._id} task={task} deleteTaskHandler={deleteTaskHandler} />
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
      <NewTaskDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        addTaskHandler={props.addTaskHandler}
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
