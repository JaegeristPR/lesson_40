let arr = [];

function enter() {
    let inputData = document.querySelector('.input').value;
    let olPoint = document.querySelector('#create');
    let liPoint = document.createElement('li');


    liPoint.innerHTML = `<span>${inputData}</span>
                         <span class="delete" onclick="deleteElement()">X</span>`;

    olPoint.append(liPoint);
}

function deleteElement() {
    let receptacle0 = document.querySelector("main ol li span:first-child")
    let receptacle1 = document.querySelector("main li");
    let receptacle2 = document.querySelector("footer ol");
    let copyElement = receptacle0.textContent;
    
    let receptacle3 = document.createElement("li");
    receptacle3.innerHTML = `<span>${copyElement}</span>
                             <span class="delete" onclick="killElement()">X</span>
                             <span class="repair" onclick="repairElement()">O</span>`;
    receptacle2.append(receptacle3);

    receptacle1.remove();
}

function repairElement() {
    let receptacle0 = document.querySelector("footer ol li span:first-child");
    let receptacle1 = document.querySelector("footer li");
    let receptacle2 = document.querySelector("main ol");
    
    let copyElement = receptacle0.textContent;

    let receptacle3 = document.createElement("li");
    receptacle3.innerHTML = `<span>${copyElement}</span>
                             <span class="delete" onclick="deleteElement()">X</span>`;
    receptacle2.append(receptacle3);

    receptacle1.remove();
}

function killElement() {
    let receptacle = document.querySelector("footer li");
    receptacle.remove();
}