import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { housematesNoMatches, men, women } from "./notes"

export const PeopleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium">
        <TableHead>
          <TableRow>
            <TableCell />
            {women.map((woman) => (
              <TableCell align="center">{woman}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {men.map((man) => (
            <TableRow key={man}>
              <TableCell component="th" scope="row">
                {man}
              </TableCell>
              {women.map((woman) =>
                housematesNoMatches.find(
                  (nonPair) =>
                    (nonPair[0] === woman && nonPair[1] === man) ||
                    (nonPair[0] === man && nonPair[1] === woman)
                ) ? (
                  <TableCell sx={{ backgroundColor: "red" }}>
                    {woman} / {man}
                  </TableCell>
                ) : (
                  <TableCell sx={{ backgroundColor: "green" }} />
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
