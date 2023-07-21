"use strict";

var foo = function(){const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO" //, "σ(HF)"
]

const data = {
"Baseline": ["94.95", "98.54", "89.24", "9.30", "27.55", "31.61", "0.00", "0.500", "0.000"],
"LSR": ["94.96", "98.58", "89.22", "9.36", "27.37", "31.25", "-0.01", "0.499", "0.014"],
"SWAD": ["94.20", "98.47", "87.43", "11.04", "43.85", "51.67", "-1.80", "0.393", "0.122"],
"RSC": ["94.89", "98.40", "89.33", "9.06", "29.39", "33.98", "0.06", "0.506", "0.013"],
"L2D": ["95.07", "<u>98.64</u>", "89.41", "9.23", "28.30", "32.16", "0.18", "0.510", "0.006"],
"DANN": ["95.07", "98.56", "89.53", "9.03", "23.49", "26.81", "0.29", "0.518", "0.011"],
"CDANN": ["94.89", "98.53", "89.12", "9.41", "36.05", "40.94", "-0.12", "0.492", "0.020"],
"SagNets": ["<b>95.18</b>", "<b>98.66</b>", "<u>89.65</u>", "9.01", "26.67", "30.35", "<u>0.42</u>", "<u>0.526</u>", "0.009"],
"AFN": ["<u>95.16</u>", "98.51", "<b>89.85</b>", "<b>8.66</b>", "22.58", "25.17", "<b>0.60</b>", "<b>0.536</b>", "0.021"],
"MMD": ["95.11", "98.55", "89.64", "8.90", "24.98", "28.69", "0.40", "0.525", "0.030"],
"Fish": ["94.95", "98.57", "89.19", "9.39", "33.42", "37.84", "-0.04", "0.496", "0.030"],
"RelRot": ["95.01", "98.49", "89.48", "9.02", "26.99", "31.23", "0.23", "0.507", "0.027"],
"RelRotAlign": ["94.67", "98.10", "89.23", "<u>8.87</u>", "<b>2.04</b>", "<b>3.57</b>", "-0.08", "0.493", "0.007"],
"SelfReg": ["95.07", "98.61", "89.46", "9.15", "32.12", "36.09", "0.23", "0.513", "0.015"],
"GroupDRO": ["94.88", "98.43", "89.22", "9.21", "30.14", "34.09", "-0.03", "0.499", "0.017"],
"g-SMOTE": ["94.61", "98.51", "88.41", "10.10", "27.25", "33.77", "-0.83", "0.448", "0.026"],
"FSCL": ["95.00", "98.48", "89.48", "9.00", "<u>15.53</u>", "<u>19.42</u>", "0.23", "0.518", "0.010"],
};
const hlines = [0, 4, 7, 10, 13];

const tableDiv = document.getElementById("celeba-chubby");

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