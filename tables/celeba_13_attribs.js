"use strict";

const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO", "σ(HF)"
]

const data = {
    "Baseline [1]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "LSR [2]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "SWAD [3]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "RSC [4]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "L2D [5]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "DANN [6]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "CDANN [7]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "SagNets [8]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "AFN [9]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "MMD [10]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Fish [11]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "RelRot [12]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "RelRotAlign": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "SelfReg [13]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "GroupDRO [14]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "g-SMOTE [15]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "FSCL [16]": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
};
const hlines = [0, 4, 7, 10, 13];

const tableDiv = document.getElementById("celeba-13-attribs");

const tableEl = document.createElement("table");
tableEl.className = "table table-sm table-light";
tableDiv.appendChild(tableEl);

//! Head
const thead = document.createElement("thead");
tableEl.appendChild(thead);
const tr_head = document.createElement("tr");
thead.appendChild(tr_head);

let idx = 0;
for (const m of metrics) {
    const obj = document.createElement("th");
    obj.scope = "col";
    obj.innerHTML = m;
    obj.className = "bbb";

    if ([0, 4, 6, 7].includes(idx)) {
        obj.classList.add("brb");
    }

    tr_head.appendChild(obj);
    idx += 1;
}

//! Body
const tbody = document.createElement("tbody");
tableEl.appendChild(tbody);

idx = 0;
for (const k in data) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const objt = Object.assign(document.createElement("th"), {scope: "row", innerHTML: k, className: "brb"});
    objt.style = "white-space: nowrap;";

    if (hlines.includes(idx)) {
        objt.classList.add("bbb");
    }
    tr.appendChild(objt);

    for (let i=0; i<data[k].length; i++) {

        if (i < data[k].length-2) {
            const obj = document.createElement("td");
            obj.innerHTML = data[k][i].toFixed(2);

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }

            if ([3, 5, 6].includes(i)) {
                obj.classList.add("brb");
            }
            
            tr.appendChild(obj);
        } else {
            const obj = document.createElement("td");
            obj.innerHTML = `${data[k][i].toFixed(3)} ± ${data[k][i].toFixed(3)}`;
            obj.style = "white-space: nowrap;";

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }
            
            tr.appendChild(obj);
            
            break;
        }
    }
    idx += 1
}