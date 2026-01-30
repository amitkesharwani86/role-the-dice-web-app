function rolldice() {
    const numOfDice = document.getElementById('inputroll').value;
    const resultDiv = document.getElementById('Result');
    const resultImagesDiv = document.getElementById('Resultimages');
    const value = [];
    const image = [];

    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        value.push(roll);
        image.push(`<img src="00${roll}.jpg">`);
    }

    resultDiv.textContent = `dice: ${value.join(', ')}`;
    resultImagesDiv.innerHTML = image.join('');

}
