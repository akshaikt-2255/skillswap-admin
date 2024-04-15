import  {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from "@mui/material";
import { deleteEvent, getAllEventsThunk } from "../../data/reducer/api/userThunk";
import '../Users/UserDashboard.css'


const UserDashboard = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.user.allEvents);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(getAllEventsThunk());
    }, [dispatch, page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = async (eventId) => {
        const result = await dispatch(deleteEvent(eventId));
        if (result?.payload?.message) {
            dispatch(getAllEventsThunk());
        }
    };

    const eventsToShow = events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


    return (
        <div className="container">
            <Typography variant="h4" align="center" sx={{ marginBottom: 4,marginTop: 5 }}>Event Management</Typography>
            <TableContainer component={Paper} className="table-container" >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell  sx={{ "@media (max-width: 768px)": { display: "none" } }}>Description</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {eventsToShow.map((event) => (
                            <TableRow key={event._id}>
                                <TableCell>{event.title}</TableCell>
                                <TableCell  sx={{ "@media (max-width: 768px)": { display: "none" } }}>{event.description}</TableCell>
                                <TableCell>
                                    <Button 
                                        variant="contained" 
                                        color="error" 
                                        onClick={() => handleDelete(event._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={events.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
}

export default UserDashboard;
