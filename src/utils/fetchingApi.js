export default class Fetching {
  constructor() { 
    this._api = "https://kartax-api-py.vercel.app"
  }

  async get_root(obj) {return await getData(`${this._api}/`, obj)}
  async get_clientes(obj) {return await getData(`${this._api}/negocio/'`, obj)}
}

async function getData(api, body) {
  try {
    const res = await fetch(api, body)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
      return []
    }
    
    return await res.json()
  } catch (err) {
    throw new Error(err)
    return []
  }
}