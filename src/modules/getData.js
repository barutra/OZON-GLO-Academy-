const getData = () => {
    return fetch('https://testproject-a89a8-default-rtdb.firebaseio.com/goods.json')
        .then((Response) => {
            return Response.json()
        })
}

export default getData