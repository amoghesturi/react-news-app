export function capitalize(string) {
  let splitString = string.split('-').map( (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  })
  return splitString.join(' ')
}
