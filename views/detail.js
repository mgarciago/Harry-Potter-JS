const allStudents = JSON.parse(localStorage.getItem("allStudents"));
const allStaf = JSON.parse(localStorage.getItem("allStaff"));

function getDetail (event) {
    const character = event.currentTarget.character
    this.dispatchEvent(new CustomEvent('characterDetail', {detail: character}))
}
export {getDetail};

function showDetail (event) {
    console.log(event.detail)
}