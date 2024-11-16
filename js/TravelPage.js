document.getElementById('findBtn').addEventListener('click', () => {
    const from = document.getElementById('from').value;
    const destination = document.getElementById('destination').value;

    if (!from || !destination) {
        window.alert("Please fill in both fields!")
    }

    window.alert("Searching tickets for you!")
})