import search from "./search"

const getData = (str) => {
    return fetch(
        `https://testproject-a89a8-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    )
        .then((Response) => {
            return Response.json()
        })
}

export default getData