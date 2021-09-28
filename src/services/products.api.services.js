export const getProducts = () => {
    return fetch('http://localhost:3000/products').then(value => value.json())
}

export const postProduct = (item) => {
    return fetch('http://localhost:3000/products', {
        method: 'POST',
        body: JSON.stringify(
            item
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

export const deleteProduct = (id) => {
    return fetch('http://localhost:3000/products/' + id, {
        method: 'DELETE',
    });
}

