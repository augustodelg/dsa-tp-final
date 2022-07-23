import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserServices from "../../../../services/UserServices";
import { UserStructure } from "../../../../interfaces/user/UserInterfaces";
import { MutableRefObject, useEffect, useState } from "react";
import { Typography } from "@mui/material";

interface Props {
  filterUsername: string;
}

export default function TableUser(props: Props) {
  const [users, setUsers] = useState<Array<UserStructure>>([]);

  async function getData() {
    let response;
    props.filterUsername !== ''
      ? (response = await UserServices.getUsersFilterByUsernameData(
          props.filterUsername
        ))
      : (response = await UserServices.getUsersData());
    

    setUsers(response.payload!);
  }

  useEffect(() => {
    setUsers([]);
    getData();
  }, [props.filterUsername]);

  return (
    <TableContainer  component={Paper} sx={{ minWidth: '100%' }}>
      <Table  aria-label="User Table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Firts Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.username}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.first_name}</TableCell>
              <TableCell align="right">{row.last_name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
