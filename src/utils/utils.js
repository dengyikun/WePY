export const getParams = (query, key) => {
  let match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    params = {}
  while (match = search.exec(query))
    params[decode(match[1])] = decode(match[2])
  return key ? params[key] : params
}
