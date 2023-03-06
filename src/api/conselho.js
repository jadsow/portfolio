import { api } from 'boot/axios'

export default class Conselho {
  static async get (url) {
    const data = await api.get(`/${url}`)
    return data.data.slip.advice
  }
}
