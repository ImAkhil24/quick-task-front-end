import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button} from "@mui/material";

const Login = () => {
  return (
    <Container >
      <CssBaseline />
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m:1, bgcolor: "secondary.main"}} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form">
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            ></TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt:2}}
              >
                Sign In
              </Button>
          </Box>
        </Box>
    </Container>
  )
}

export default Login;