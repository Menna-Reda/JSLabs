var select = document.getElementById('personSelect');
function loadPeopleData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "people.json"); 
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            reg = new RegExp(/^2\d{2}/)
            if(String(xhr.status).match(reg))
            {
                var people = JSON.parse(xhr.responseText);
                loadNamesOptions(people);
            }
            
        }
    };
}
function loadNamesOptions(people){
    people.forEach(function(person) {
        var option = document.createElement('option');
        option.value = person.name;
        option.textContent = person.name;
        select.appendChild(option);
    });
    select.addEventListener('change', function() {
        var selectedName = select.value;
        if (selectedName) {
            var selectedPerson = people.find(function(person) {
                return person.name === selectedName;
            });
            displayPersonDetails(selectedPerson); 
        } 
    });
}

function displayPersonDetails(person) {
    document.getElementById('age').innerText = person.age;
    document.getElementById('email').innerText = person.email;
}
window.onload = function() {
    loadPeopleData();
};