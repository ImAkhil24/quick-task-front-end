import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { call } from "../services/api";

const Navigation = ({auth}) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    call('POST', "/users/logout").then(res => {
      // console.log(res);
      auth.setToken();
    }).catch(err => {
      console.log(err);
    })
    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: "static" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>

          <Button
            color="inherit"
            onClick={() => {
              navigate("/user");
            }}
          >
           User
          </Button>
          <Button
            color="inherit"
            onClick={logoutHandler}
          >
            Logout
          </Button>
          {/* <Button
            color="inherit"
            onClick={() => {
              navigate("/user");
            }}
          >
            User
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
