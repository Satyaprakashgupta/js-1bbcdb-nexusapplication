const createFormButton = document.getElementById('createFormButton');
const inputFieldsContainer = document.getElementById('inputFields');
const submitButton = document.getElementById('submitButton');
const valueList = document.getElementById('valueList');

let inputCount = 5;

createFormButton.addEventListener('click', () => {
    inputFieldsContainer.innerHTML = '';
    for (let i = 0; i < inputCount; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Input ${i + 1}`;
        inputFieldsContainer.appendChild(input);
    }
});

submitButton.addEventListener('click', () => {
    const inputValues = [];
    const inputs = inputFieldsContainer.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputValues.push(inputs[i].value);
    }
    displayInputValues(inputValues);
});

function displayInputValues(inputValues) {
    valueList.innerHTML = '';
    inputValues.forEach((value, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Input ${index + 1}: ${value}`;
        valueList.appendChild(listItem);
    });
}
