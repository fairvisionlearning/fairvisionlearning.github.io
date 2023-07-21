"use strict";

var foo = function(){const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO" //, "σ(HF)"
]

const data = {
"Baseline": ["81.46", "88.59", "70.15", "18.44", "20.75", "39.10", "0.00", "0.500", "0.000"],
"LSR": ["82.27", "89.03", "71.53", "17.50", "22.67", "41.93", "1.45", "0.584", "0.034"],
"SWAD": ["80.25", "87.24", "69.15", "18.09", "16.97", "44.67", "-1.42", "0.444", "0.184"],
"RSC": ["82.52", "89.07", "72.13", "16.94", "15.44", "32.19", "2.02", "0.621", "0.020"],
"L2D": ["81.70", "88.31", "71.20", "17.11", "18.31", "34.77", "0.88", "0.563", "0.056"],
"DANN": ["<b>83.82</b>", "<b>90.28</b>", "<u>73.56</u>", "16.72", "33.71", "48.89", "<u>3.79</u>", "<u>0.700</u>", "0.043"],
"CDANN": ["81.71", "87.75", "72.11", "15.64", "<u>8.11</u>", "<u>22.91</u>", "1.50", "0.610", "0.078"],
"SagNets": ["83.48", "<u>90.17</u>", "72.85", "17.32", "28.57", "45.82", "3.09", "0.660", "0.075"],
"AFN": ["<u>83.59</u>", "89.34", "<b>74.47</b>", "<u>14.87</u>", "<b>3.55</b>", "<b>12.05</b>", "<b>4.29</b>", "<b>0.744</b>", "0.039"],
"MMD": ["83.53", "89.94", "73.35", "16.59", "21.01", "36.57", "3.47", "0.689", "0.020"],
"Fish": ["82.45", "89.43", "71.38", "18.05", "29.27", "51.81", "1.45", "0.575", "0.038"],
"RelRot": ["82.88", "89.55", "72.29", "17.26", "22.98", "42.66", "2.35", "0.629", "0.063"],
"RelRotAlign": ["74.87", "76.57", "72.29", "<b>4.28</b>", "33.69", "42.31", "-4.33", "0.414", "0.113"],
"SelfReg": ["83.59", "90.14", "73.20", "16.94", "21.78", "36.72", "3.40", "0.679", "0.058"],
"GroupDRO": ["83.08", "89.25", "73.28", "15.98", "16.30", "30.82", "3.16", "0.681", "0.067"],
"g-SMOTE": ["82.00", "88.94", "72.38", "16.56", "28.11", "46.63", "2.21", "0.632", "0.071"],
"FSCL": ["82.89", "89.56", "72.29", "17.27", "34.51", "46.02", "2.35", "0.619", "0.192"],
};
const hlines = [0, 4, 7, 10, 13];

const tableDiv = document.getElementById("celeba-eyebags");

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