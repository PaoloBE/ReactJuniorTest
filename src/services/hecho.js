import { CAT_FACT_RANDOM } from '../constants'

export const getHecho = async () => {
  try {
    const resp = await fetch(CAT_FACT_RANDOM)
    const data = await resp.json()
    return data.fact
  } catch (err) {
    return console.log(err)
  }
}
