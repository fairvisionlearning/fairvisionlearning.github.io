"use strict";

var foo = function(){const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO" //, "σ(HF)"
]

const data = {
    "Baseline": ["73.79", "78.62", "65.41", "13.22", "26.44", "35.18", "0.00", "0.500", "0.000"],
    "LSR": ["68.96", "72.83", "62.26", "10.57", "22.41", "26.83", "-5.84", "0.307", "0.144"],
    "SWAD": ["73.10", "79.35", "62.26", "17.09", "19.49", "25.48", "-2.36", "0.348", "0.278"],
    "RSC": ["<b>77.93</b>", "<u>80.43</u>", "<b>73.58</b>", "6.85", "<u>8.62</u>", "<u>11.32</u>", "<b>7.79</b>", "<b>0.880</b>", "0.035"],
    "L2D": ["70.34", "71.74", "67.92", "3.82", "12.07", "21.14", "-2.09", "0.574", "0.049"],
    "DANN": ["71.03", "71.74", "69.81", "<b>1.93</b>", "8.62", "<b>10.83</b>", "-0.69", "0.666", "0.068"],
    "CDANN": ["70.34", "72.83", "66.04", "6.79", "17.24", "22.88", "-2.83", "0.492", "0.116"],
    "SagNets": ["74.48", "79.35", "66.04", "13.31", "15.52", "27.04", "0.92", "0.540", "0.042"],
    "AFN": ["<u>76.55</u>", "79.35", "71.70", "7.65", "13.79", "16.98", "5.63", "0.821", "0.045"],
    "MMD": ["76.55", "<b>80.43</b>", "69.81", "10.62", "13.79", "24.58", "4.69", "0.741", "0.113"],
    "Fish": ["75.86", "78.26", "71.70", "6.56", "17.24", "24.10", "4.98", "0.812", "0.072"],
    "RelRot": ["74.48", "76.09", "71.70", "4.39", "10.34", "16.47", "3.62", "0.793", "0.093"],
    "RelRotAlign": ["75.86", "77.17", "<u>73.58</u>", "<u>3.59</u>", "12.07", "22.36", "<u>5.75</u>", "<u>0.857</u>", "0.073"],
    "SelfReg": ["73.79", "77.17", "67.92", "9.25", "17.24", "18.71", "1.29", "0.642", "0.067"],
    "GroupDRO": ["70.34", "73.91", "64.15", "9.76", "22.41", "29.77", "-3.67", "0.403", "0.095"],
    "g-SMOTE": ["73.14", "77.97", "64.11", "13.86", "25.60", "34.49", "-1.45", "0.420", "0.043"],
    "FSCL": ["60.02", "63.04", "54.86", "8.18", "<b>1.72</b>", "15.20", "-17.68", "0.051", "0.035"],
};
const hlines = [0, 4, 7, 10, 13];

const tableDiv = document.getElementById("covid-cxr");

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