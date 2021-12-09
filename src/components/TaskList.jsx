import { Box, Paper, Typography, Button, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "./Task";

const TaskList = (props) => {
  // task card with a button to mark it complete and when the task is marked complete it's content will get line through text style.
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
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", zIndex: 1, bottom: "25%", right: "10%" }}
      >
        <AddIcon />
      </Fab>
      {taskList}
    </Box>
  );
};

export default TaskList;
