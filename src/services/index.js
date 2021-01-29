import request from 'utils/request'

const api = {}
const files = require.context('./api', false, /\.js$/)
files.keys().forEach(key => {
  const child = files(key).default
  Object.assign(api, child)
})


const gen = params => {
  let url = params
  let method = 'GET'

  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url = paramsArray[1]
  }


  return function(data) {
    return request({
      url,
      data,
      method,
    })
  }
}

const APIFunction = {}
for (const key in api) {
  APIFunction[key] = gen(api[key])
}


export default APIFunction
