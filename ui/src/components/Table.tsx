import React from "react";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import { ClientDocumentSummary } from "../../types";

type TableProps = {
  documents?: ClientDocumentSummary[];
  openModal: (item: ClientDocumentSummary) => void;
};

const Table: React.FC<TableProps> = ({
  documents = [],
  openModal
}) => (
  <TableContainer>
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>Summary</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {documents.map((row: ClientDocumentSummary) => (
          <TableRow key={row.Id}>
            <TableCell>{row.Id}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.year}</TableCell>
            <TableCell>{row.summary}</TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => openModal(row)}>
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
);

export default Table;
