import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import { gql, useQuery } from '@apollo/client';
import serverDocumentToClientDocumentSummary from './transformers/serverDocumentToClientDocument';
import Table from './components/Table';
import Modal from "./components/Modal";
import { Button, Grid, Box} from "@material-ui/core";
import { ClientDocumentSummary } from "../types";

const DOCUMENTS_QUERY = gql`
  query Documents($offset: Int, $limit: Int) {
    documents(offset: $offset, limit: $limit){
      m_szDocID
      m_szDocTitle
      m_szYear
      m_szDocSumamry
    }
  }
`;

const App = () => {
  const additionalAmount = 10;
  const [offset, upodateOffset] = useState(0);
  const [isModalOpen, toggleModal] = useState(false);
  const [focusedDocument, setFocusedDocument] = useState({} as ClientDocumentSummary);
  const { data } = useQuery(DOCUMENTS_QUERY, {
    variables: { offset: 0, limit: offset+additionalAmount},
  });

  const transformedData = data ? data.documents.map(serverDocumentToClientDocumentSummary) : [];

  return (
    <>
      <Container>
        <Table
          documents={transformedData}
          openModal={(item: ClientDocumentSummary) => {toggleModal(true); setFocusedDocument(item)}}
        />
        <Grid container spacing={3} justify="center">
          <Box mt={8} mb={8}>
            <Button onClick={() => upodateOffset(offset+additionalAmount)} color={'primary'}>
              Load More
            </Button>
          </Box>
        </Grid>
      </Container>

      <Modal open={isModalOpen} onClose={() => toggleModal(false)} document={focusedDocument}/>
    </>
  )
};

export default App;
