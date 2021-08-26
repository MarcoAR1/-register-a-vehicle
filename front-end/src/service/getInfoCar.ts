const url = 'api/car/'

export const getCars = async (): Promise<Response> => {
  return await fetch(url)
}

export const getOneCar = async (id: number): Promise<Response> => {
  return await fetch(url + id)
}
