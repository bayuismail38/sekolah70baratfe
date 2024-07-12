function Fetch() {
  
}
const MappToUrl = (data) => {
    var forms = new URLSearchParams()
    for (const loop in data) {
        forms.append(loop, data[loop])
    }
    return forms;
}
export {
    Fetch,
    MappToUrl
}