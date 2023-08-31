function deleteArrayItemById(arr, id) {
    return arr.filter(x => {
        return x.id != id;
    })
}

export default deleteArrayItemById;