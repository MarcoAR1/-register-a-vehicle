const url = 'api/'
const PATH_BASE = '/'

export const updateDetailsCar = (
  id: string,
  nameDetail: string,
  carDetails: { [key: string]: string }
): Promise<Response> => {
  return fetch(url + nameDetail + PATH_BASE + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(carDetails),
  })
}
