"use strict";

var foo = function(){const metrics = [
    "", "SDR", "MGS", "mGS", "DS", "ΔDTO" //, "σ(HF)"
]

const data = {
    "Baseline": ["74.50", "78.39", "70.71", "7.67", "0.00", "0.500", "0.000"],
    "AFN": ["94.50", "95.04", "<b>93.97</b>", "<b>1.06</b>", "<u>28.59</u>", "<b>0.997</b>", "0.001"],
    "DANN": ["81.03", "85.22", "76.83", "8.39", "8.92", "0.809", "0.091"],
    "RegDA": ["<u>94.62</u>", "<u>95.51</u>", "93.74", "<u>1.77</u>", "<b>28.70</b>", "<u>0.996</u>", "0.001"],
};
const hlines = [0, 4, 7, 10, 13];

const tableDiv = document.getElementById("utkface-age");

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