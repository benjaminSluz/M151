export function createForm() {
    let form = `
    <form id="newForm" action="/new">
    <input name="firstname">
    <input name="lastname">
    <input type="submit">
    <input type="reset">
    </form>
    `;
    return form;
}
export function getForm(querry) {
    console.log(querry);
}