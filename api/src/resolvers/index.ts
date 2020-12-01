import { getDocuments } from "./document";
import { Document } from  '../types';

const resolvers = {
  Query: {
    documents: (
      _: any,
      {offset, limit}:{offset: any, limit: number}
    ) => {
      return getDocuments().slice(offset, limit)
    },
    document: ({id}: {id: string}) => {
      return getDocuments().filter((item: Document) => item.m_szDocID === id)
    }
  },
};

export default resolvers;
