

async function fetchData() {
    const res = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())

    const data = await res.json()

    console.log("Response",data)
}

fetchData()

