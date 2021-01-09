import qs from 'qs'

interface fetchData {
    url: string,
    method: string,
    data ?: Object
}

export default ({url, data, method}:fetchData) => fetch(url, {
    method, // or 'PUT'
    body: qs.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())