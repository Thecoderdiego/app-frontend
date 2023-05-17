export const getNotes = () => {
  return fetch('./src/db.json')
  .then(res => res.json())
  .then(response => {
    const {notes} = response
    return notes
  })
}