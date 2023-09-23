import { api } from 'boot/axios'

export default class apis {
  static async Conselho (url) {
    const {data} = await api.get(`https://api.adviceslip.com/${url}`)
    return data.slip.advice
  }

  static async Filmes (filme){
    const {data} = await api.get(`http://www.omdbapi.com/?apikey=29631911&`, {
      params: {
        t: filme,
      }
    })
    return data
  }
}



