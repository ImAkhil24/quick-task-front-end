import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  Typography,
  Box,
} from "@mui/material";
const UserDetails = () => {
  return (
    <Card sx={{ m: 2, maxWidth: "sm" }}>
      <CssBaseline />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
        <Typography component="h1" variant="h5">
          Akhil
        </Typography>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Typography width="50%" textAlign="center">
          Tasks Completed
        </Typography>

        <Typography width="50%" textAlign="center">
          Pending Tasks
        </Typography>
        <Typography width="50%" textAlign="center">
          5
        </Typography>
        <Typography width="50%" textAlign="center">
          10
        </Typography>
      </Box>
    </Card>
  );
};

export default UserDetails;
