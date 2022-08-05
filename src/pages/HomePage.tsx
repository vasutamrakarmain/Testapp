import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IAppProps {}
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, width: 150 },
  {
    field: "slot",
    headerName: "Slot",
    width: 300,
    sortable: false,
    editable: false,
  },
  {
    field: "time",
    headerName: "Time",
    width: 300,
    sortable: true,
    editable: false,
  },
];

const rows = [
  { id: 1, slot: "1-1", time: "01:01" },
  { id: 2, slot: "1-2", time: "02:01" },
  { id: 3, slot: "1-3", time: "03:01" },
  { id: 4, slot: "1-4", time: "04:01" },
  { id: 5, slot: "1-5", time: "05:01" },
  { id: 6, slot: "1-6", time: "05:01" },
  { id: 7, slot: "1-7", time: "06:01" },
  { id: 8, slot: "1-8", time: "07:01" },
  { id: 9, slot: "1-9", time: "08:01" },
  { id: 10, slot: "1-10", time: "09:01" },
  { id: 11, slot: "2-1", time: "10:01" },
  { id: 12, slot: "2-2", time: "11:01" },
  { id: 13, slot: "2-3", time: "12:01" },
  { id: 14, slot: "2-4", time: "01:02" },
  { id: 15, slot: "2-5", time: "02:03" },
  { id: 16, slot: "2-6", time: "03:04" },
  { id: 17, slot: "2-7", time: "04:05" },
  { id: 18, slot: "2-8", time: "05:06" },
  { id: 19, slot: "2-9", time: "06:07" },
  { id: 20, slot: "2-10", time: "07:08" },
];
const HomePage: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ height: "100vh" }}>
          <div style={{ height: 700, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection={false}
              disableSelectionOnClick
            />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
