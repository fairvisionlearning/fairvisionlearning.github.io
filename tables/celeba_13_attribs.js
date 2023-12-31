"use strict";

var foo = function(){const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO" //, "σ(HF)"
]

const data = {
"Baseline": ["91.90", "93.71", "89.60", "4.12", "15.05", "18.47", "0.00", "0.500", "0.000"],
"LSR": ["91.97", "93.76", "89.72", "4.04", "14.85", "18.27", "0.13", "0.507", "0.010"],
"SWAD": ["91.45", "93.50", "88.92", "4.58", "17.23", "22.20", "-0.69", "0.458", "0.034"],
"RSC": ["91.89", "93.57", "89.80", "<u>3.77</u>", "14.44", "17.81", "0.10", "0.513", "0.007"],
"L2D": ["91.91", "93.74", "89.66", "4.08", "14.91", "18.03", "0.07", "0.504", "0.008"],
"DANN": ["<b>92.15</b>", "<u>93.92</u>", "<u>89.96</u>", "3.95", "16.02", "19.08", "<u>0.42</u>", "<u>0.523</u>", "0.001"],
"CDANN": ["92.04", "93.73", "89.92", "3.80", "13.46", "16.25", "0.28", "0.520", "0.016"],
"SagNets": ["92.08", "93.87", "89.86", "4.00", "17.14", "20.58", "0.31", "0.516", "0.014"],
"AFN": ["<u>92.14</u>", "93.85", "<b>90.02</b>", "3.83", "13.24", "15.97", "<b>0.43</b>", "<b>0.527</b>", "0.008"],
"MMD": ["92.09", "93.83", "89.93", "3.90", "15.24", "18.35", "0.34", "0.521", "0.008"],
"Fish": ["91.85", "93.69", "89.58", "4.11", "15.55", "19.02", "-0.03", "0.499", "0.000"],
"RelRot": ["92.10", "93.86", "89.90", "3.95", "15.47", "18.97", "0.33", "0.519", "0.006"],
"RelRotAlign": ["91.14", "92.39", "89.70", "<b>2.69</b>", "<b>8.29</b>", "<b>10.50</b>", "-0.65", "0.503", "0.014"],
"SelfReg": ["91.98", "93.76", "89.75", "4.01", "15.50", "18.18", "0.15", "0.510", "0.011"],
"GroupDRO": ["91.97", "93.78", "89.77", "4.01", "14.05", "17.10", "0.18", "0.511", "0.005"],
"g-SMOTE": ["92.12", "<b>93.94</b>", "89.88", "4.05", "14.68", "18.47", "0.36", "0.517", "0.007"],
"FSCL": ["91.58", "93.50", "89.14", "4.36", "<u>13.22</u>", "<u>15.78</u>", "-0.50", "0.473", "0.002"],
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
            obj.innerHTML = data[k][i];//.toFixed(2);

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