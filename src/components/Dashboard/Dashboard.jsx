import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { getEventsCount, getUserCount, getUsersThunk } from "../../data/reducer/api/userThunk";
import { blue, red } from "@mui/material/colors";
import UserGraph from "./UserGraph";



const InfoCard = ({ title, value, icon, onClick }) => {
  return (
    <Card
    sx={{
      minWidth: '275px' ,
      width: { xs: '70%'},
      marginBottom: 2,
      backgroundColor: "rgb(33, 33, 33)",
      color: "white",
    }}
      onClick={onClick}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>{icon}</Grid>
          <Grid item xs>
            <Typography variant="h5" component="div">
              {value}
            </Typography>
            <Typography variant="subtitle1">{title}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userCount = useSelector((state) => state.user.userCount);
  const eventsCount = useSelector((state) => state.user.eventsCount);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsersThunk());
    dispatch(getUserCount());
    dispatch(getEventsCount());
  }, [dispatch]);

  const navigateToUsersDashboard = () => {
    navigate("/users");
  };

  const navigateToEventsDashboard = () => {
    navigate("/events");
  }
  
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      {" "}
      {/* Add padding to the overall container */}
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: "black", marginTop: "20px" }}
      >
        Dashboard
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ margin: "40px" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            title="Events"
            value={eventsCount?.toLocaleString()}
            onClick={navigateToEventsDashboard}
            icon={
              <Typography variant="h5" sx={{ color: blue[500] }}>
                💰
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InfoCard
            title="Users"
            onClick={navigateToUsersDashboard}
            value={userCount.toLocaleString()}
            icon={
              <Typography variant="h5" sx={{ color: red[500] }}>
                👤
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <UserGraph users={users} />
    </Box>
  );
};

export default Dashboard;
