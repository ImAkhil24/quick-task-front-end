import {Box} from "@mui/material"
import Task from "./Task"
const TaskList = () => {
  // task card with a button to mark it complete and when the task is marked complete it's content will get line through text style.
  return (
    <Box sx={{margin: 2, maxWidth: "sm", height: "500px", overflow: "auto"}}>
      <Task />
      <Task />
      <Task />
      
    </Box>
  )
}

export default TaskList;