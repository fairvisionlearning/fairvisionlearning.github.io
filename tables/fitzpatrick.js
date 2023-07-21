"use strict";

var foo = function(){const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO" //, "σ(HF)"
]

const data = {
    "Baseline": ["90.22", "94.45", "87.26", "7.19", "11.51", "13.29", "0.00", "0.500", "0.000"],
    "LSR": ["<u>92.89</u>", "93.66", "<u>92.25</u>", "<u>1.41</u>", "19.65", "20.53", "<u>3.88</u>", "<u>0.766</u>", "0.020"],
    "SWAD": ["91.59", "93.20", "90.44", "2.76", "10.31", "11.29", "2.16", "0.678", "0.054"],
    "RSC": ["91.72", "92.70", "90.89", "1.81", "20.63", "21.07", "2.22", "0.698", "0.046"],
    "L2D": ["92.56", "<b>94.77</b>", "90.91", "3.86", "16.52", "17.59", "3.41", "0.709", "0.021"],
    "DANN": ["92.04", "92.98", "91.32", "1.66", "11.38", "13.44", "2.73", "0.720", "0.046"],
    "CDANN": ["91.85", "92.95", "90.99", "1.95", "<u>7.40</u>", "<u>9.15</u>", "2.46", "0.704", "0.045"],
    "SagNets": ["91.46", "92.70", "90.58", "2.12", "15.10", "15.86", "1.98", "0.683", "0.033"],
    "AFN": ["91.95", "93.60", "90.72", "2.87", "15.42", "16.74", "2.62", "0.694", "0.033"],
    "MMD": ["91.60", "93.30", "90.43", "2.87", "8.84", "10.28", "2.21", "0.679", "0.018"],
    "Fish": ["92.24", "93.52", "91.39", "2.12", "17.14", "18.79", "3.12", "0.723", "0.078"],
    "RelRot": ["<b>93.35</b>", "94.47", "<b>92.61</b>", "1.87", "<b>2.01</b>", "<b>2.81</b>", "<b>4.67</b>", "<b>0.786</b>", "0.017"],
    "RelRotAlign": ["91.65", "92.81", "90.70", "2.11", "12.02", "13.36", "2.14", "0.687", "0.039"],
    "SelfReg": ["92.69", "<u>94.61</u>", "91.27", "3.34", "8.34", "10.14", "3.64", "0.727", "0.029"],
    "GroupDRO": ["91.98", "92.64", "91.41", "<b>1.24</b>", "10.19", "11.60", "2.58", "0.722", "0.037"],
    "g-SMOTE": ["90.92", "93.19", "88.50", "4.69", "12.26", "14.27", "0.53", "0.569", "0.066"],
    "FSCL": ["90.67", "93.60", "88.48", "5.13", "12.42", "13.85", "0.72", "0.566", "0.176"],
};
const hlines = [0, 4, 7, 10, 13];

const tableDiv = document.getElementById("fitzpatrick");

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

    if ([0, 4, 6].includes(idx)) {
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

    for (let i=0; i<data[k].length-2; i++) {

        if (i < data[k].length-2) {
            const obj = document.createElement("td");
            obj.innerHTML = data[k][i];

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }

            if ([3, 5].includes(i)) {
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
}}();