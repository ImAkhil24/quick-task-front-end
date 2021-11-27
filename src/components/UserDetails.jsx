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
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    maxHeight: "40%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  statLabel: {
    fontSize: 12,
    color: "#9e9e9e",
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

const UserDetails = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ boxShadow: 3 }}>
      <CssBaseline />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>A</Avatar>
        <Typography className={classes.heading}>Akhil</Typography>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Typography width="50%" className={classes.statLabel}>
          Tasks Completed
        </Typography>

        <Typography width="50%" className={classes.statLabel}>
          Pending Tasks
        </Typography>
        <Typography width="50%" className={classes.statValue}>
          5
        </Typography>
        <Typography width="50%" className={classes.statValue}>
          10
        </Typography>
      </Box>
    </Card>
  );
};

export default UserDetails;
