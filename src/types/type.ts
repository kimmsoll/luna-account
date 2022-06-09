export interface IContentDetail {
  id: number
  date: string
  details: {
    type: string
    content: string
  }
  amount: number
}
