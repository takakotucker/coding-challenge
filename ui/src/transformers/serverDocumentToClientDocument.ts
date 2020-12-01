import { Document } from '../../../api/src/types';
import { ClientDocumentSummary } from '../../types';

const serverDocumentToClientDocumentSummary = (document: Document): ClientDocumentSummary => (
    {
        Id: document.m_szDocID,
        title: document.m_szDocTitle,
        year: document.m_szYear,
        summary: document.m_szDocSumamry
    }
);

export default serverDocumentToClientDocumentSummary;