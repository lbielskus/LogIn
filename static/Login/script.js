const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

button.onclick = async () => {
    const user = {
        userName: inputs[0].value,
        pass: inputs[1].value,
    }

    const options = {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(user)
    }

    const res = await fetch("http://localhost:3000/login", options)
    const data = await res.json()

    console.log(data)
}