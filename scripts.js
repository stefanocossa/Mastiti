document.getElementById('mastitisForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cowNumber = document.getElementById('cowNumber').value;
    const eventDate = document.getElementById('eventDate').value;
    const affectedQuarter = document.getElementById('affectedQuarter').value;

    const record = {
        cowNumber,
        eventDate,
        affectedQuarter
    };

    addRecord(record);
    displayRecords();
});

const records = [];

function addRecord(record) {
    records.push(record);
    localStorage.setItem('mastitisRecords', JSON.stringify(records));
}

function displayRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';

    records.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `Bovina: ${record.cowNumber}, Data: ${record.eventDate}, Quarto: ${record.affectedQuarter}`;
        recordsList.appendChild(listItem);
    });
}

// Carica i record salvati all'avvio
window.onload = function () {
    const savedRecords = JSON.parse(localStorage.getItem('mastitisRecords'));
    if (savedRecords) {
        savedRecords.forEach(record => {
            records.push(record);
        });
        displayRecords();
    }
};
