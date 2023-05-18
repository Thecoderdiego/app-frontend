import axios from "axios"

export const getNotes = () => {
  return axios.get('./src/db.json')
  .then(response => {
    console.log(response);
    const {notes} = response.data
    console.log(notes);
    return notes
  })
}