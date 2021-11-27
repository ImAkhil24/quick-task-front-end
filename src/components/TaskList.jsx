import { Box } from "@mui/material";
import Task from "./Task";
const TaskList = () => {
  // task card with a button to mark it complete and when the task is marked complete it's content will get line through text style.
  return (
    <Box
      overflow="auto"
      height="80%"
      minWidth={1 / 2}
      boxShadow={3}
      borderRadius={4}
    >
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Box>
  );
};

export default TaskList;
