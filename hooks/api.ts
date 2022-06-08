import api from '../api/$api'
import aspida from '@aspida/fetch'

export const useApi = () => {
  let headers: HeadersInit = {
    Accept: 'application/json, */*',
    'Content-type': 'application/json',
  }

  // TODO: sessionに保持したtokenをheaderに追加

  const apiClient = api(
    aspida(fetch, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: headers,
    })
  )

  return { apiClient }
}
