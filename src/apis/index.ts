import http from '../plugins/http'

export const get = async () => {
  const res = await http.get('/xxxxx?xxx=xx')

  return res
}

export const post = async (data: any) => {
  const res = await http.post('/xxxx', data)

  return res
}
