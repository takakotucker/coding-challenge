export type Document = {
    m_szDocID: string
    m_szDocTitle: string
    m_szYear: string
    m_szDocSumamry: string
    m_szDocBody: string
    m_szGeo1: string
    m_szSourceType: string
    m_szSrcUrl: string
    m_Places: Array<string>
    m_People: Array<string>
    m_Companies: Array<string>
    m_BiGrams: Array<string>
    m_TriGrams: Array<string>
    m_SocialTags: Array<string>
    m_Topics: Array<string>
    m_Industry: Array<string>
    m_Technology: Array<string>
    m_BiCnt: Array<number>
    m_TriCnt: Array<number>
    m_iDocBodyWordCnt: number
  };
  