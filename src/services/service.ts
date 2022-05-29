import { axios } from 'hooks/worker'

const URL = '/data/data.json'

export const getData = async () => {
  try {
    const res = await axios.get(URL)
    return res.data.value
  } catch (error) {
    return error
  }
}
