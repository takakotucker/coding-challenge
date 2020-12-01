
import { default as documentData } from "../data/documents.json";
import { Document } from  '../types';

export const getDocuments: () => Array<Document> = () => {
  return documentData as Array<Document>
};