import { Container, Box, CssBaseline } from "@mui/material";
import UserDetails from "./UserDetails";
import TaskList from "./TaskList";
const User = () => {
  return (
    <Box
      height="85%"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      m={2}
    >
      <Box
        maxHeight="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <UserDetails />
        {/* <div> pom</div> */}
      </Box>
      <TaskList />
    </Box>
  );
};

export default User;
