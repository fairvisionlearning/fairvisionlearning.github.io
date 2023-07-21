"use strict";

var foo = function(){const metrics = [
    "", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO", "Acc.", "MGA", "mGA", "DA", "DEO", "DEOdds", "ΔDTO" //, "σ(HF)"
]

const highlightColor = "#eee";

const data = {
    "Baseline": ["81.06", "83.20", "74.05", "<u>9.16</u>", "11.54", "24.69", "0.00", "0.50", "0.00", "82.55", "89.17", "72.04", "17.13", "19.72", "41.95", "0.00", "0.500", "0.000"],
    "AFN": ["81.31", "83.30", "74.92", "<b>8.38</b>", "9.06", "<u>21.42</u>", "0.78", "0.55", "0.01", "81.35", "88.64", "69.77", "18.87", "23.71", "50.51", "-2.31", "0.361", "0.068"],
    "DANN": ["<b>83.48</b>", "<b>85.83</b>", "<b>76.16</b>", "9.67", "18.28", "31.74", "<b>3.18</b>", "<b>0.63</b>", "0.04", "<b>82.64</b>", "<b>89.50</b>", "<b>71.75</b>", "<u>17.75</u>", "21.83", "42.73", "<b>-0.15</b>", "<b>0.481</b>", "0.021"],
    "GroupDRO": ["<u>82.52</u>", "<u>84.90</u>", "<u>75.68</u>", "<u>9.22</u>", "15.48", "29.15", "<u>2.29</u>", "<u>0.60</u>", "0.06", "82.10", "<u>89.36</u>", "70.58", "18.79", "32.38", "56.68", "-1.30", "0.408", "0.098"],
    "g-SMOTE": ["80.16", "82.58", "72.62", "9.96", "<u>8.89</u>", "22.18", "-1.54", "0.41", "<b>0.17</b>", "82.01", "88.77", "<u>71.38</u>", "<b>17.34</b>", "<u>15.66</u>", "<u>36.10</u>", "-0.76", "<u>0.458</u>", "0.132"],
    "FSCL": ["80.45", "84.65", "69.35", "15.30", "<b>8.64</b>", "<b>14.38</b>", "-3.37", "0.23", "<u>0.10</u>", "<u>82.32</u>", "89.30", "71.25", "18.05", "<b>11.73</b>", "<b>28.31</b>", "<u>-0.69</u>", "0.450", "0.029"],
};
const data2 = {
    "AFN": ["81.70", "83.81", "75.04", "8.77", "10.92", "23.43", "1.16", "0.56", "0.01", "83.59", "89.34", "74.47", "14.87", "3.55", "12.05", "2.32", "0.646", "0.032"],
    "DANN": ["83.00", "84.90", "77.01", "7.89", "7.42", "16.74", "3.41", "0.68", "0.04", "83.82", "90.28", "73.56", "16.72", "33.71", "48.89", "1.81", "0.594", "0.049"],
    "GroupDRO": ["82.23", "83.70", "75.67", "8.03", "16.99", "35.92", "1.63", "0.60", "0.05", "83.08", "89.25", "73.28", "15.98", "16.30", "30.82", "1.18", "0.575", "0.075"],
    "g-SMOTE": ["81.21", "81.99", "73.71", "8.28", "6.63", "17.97", "-0.95", "0.48", "0.07", "82.00", "88.94", "72.38", "16.56", "28.11", "46.63", "0.23", "0.521", "0.013"],
    "FSCL": ["80.50", "84.66", "69.39", "15.27", "8.72", "14.44", "-3.33", "0.24", "0.10", "82.89", "89.56", "72.29", "17.27", "34.51", "46.02", "0.37", "0.515", "0.023"],
};

const tableDiv = document.getElementById("celeba-eyebags-transfer");

const tableEl = document.createElement("table");
tableEl.className = "table table-sm table-light";
tableDiv.appendChild(tableEl);

//! Head
const thead = document.createElement("thead");
tableEl.appendChild(thead);


const tr_tran = document.createElement("tr");

const empty = document.createElement("td");
empty.className = "bbb brb";
tr_tran.appendChild(empty);

const tran = document.createElement("td");
tran.className = "bbb brb";
tran.colSpan = "7";
tran.innerHTML = "<i>Male/Female</i> → <i>Young/Old</i>";
tr_tran.appendChild(tran);
thead.appendChild(tr_tran);

const tranB = document.createElement("td");
tranB.className = "bbb";
tranB.colSpan = "7";
tranB.innerHTML = "<i>Young/Old</i> → <i>Male/Female</i>";
tr_tran.appendChild(tranB);
thead.appendChild(tr_tran);

const tr_head = document.createElement("tr");
thead.appendChild(tr_head);

let idx = 0;
for (const m of metrics) {
    const obj = document.createElement("th");
    obj.scope = "col";
    obj.innerHTML = m;
    obj.className = "bbb";

    if ([0, 4, 6, 7, 11, 13].includes(idx)) {
        obj.classList.add("brb");
    }

    tr_head.appendChild(obj);
    idx += 1;
}

//! Body
const tbody = document.createElement("tbody");
tableEl.appendChild(tbody);

let hlines = [0, 2, 5];

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

        if ([7, 8].includes(i)) continue;

        if (i < data[k].length-2) {
            const obj = document.createElement("td");
            obj.innerHTML = data[k][i];

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }

            if ([3, 5, 6, 12, 14].includes(i)) {
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


const tr_tran2 = document.createElement("tr");
const empty2 = document.createElement("td");
empty2.style = "background-color:" + highlightColor + ";";
empty2.className = "bbb brb";
tr_tran2.appendChild(empty2);

const tran2 = document.createElement("td");
tran2.style = "background-color:" + highlightColor + ";";
tran2.className = "bbb brb";
tran2.colSpan = "7";
tran2.innerHTML = "<i>Young/Old</i> → <i>Young/Old</i> (<i><b>Oracle</b></i>)";
tr_tran2.appendChild(tran2);

const tranB2 = document.createElement("td");
tranB2.style = "background-color:" + highlightColor + ";";
tranB2.className = "bbb";
tranB2.colSpan = "7";
tranB2.innerHTML = "<i>Male/Female</i> → <i>Male/Female</i> (<i><b>Oracle</b></i>)";
tr_tran2.appendChild(tranB2);
tbody.appendChild(tr_tran2);

hlines = [2, 5];

idx = 0;
for (const k in data2) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    const objt = Object.assign(document.createElement("th"), {scope: "row", innerHTML: k, className: "brb"});
    objt.style = "white-space: nowrap; background-color:" + highlightColor + ";";

    if (hlines.includes(idx)) {
        objt.classList.add("bbb");
    }
    tr.appendChild(objt);

    for (let i=0; i<data2[k].length-2; i++) {

        if ([7, 8].includes(i)) continue;

        if (i < data2[k].length-2) {
            const obj = document.createElement("td");
            obj.style = "background-color:" + highlightColor + ";";
            obj.innerHTML = data2[k][i];

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }

            if ([3, 5, 6, 12, 14].includes(i)) {
                obj.classList.add("brb");
            }
            
            tr.appendChild(obj);
        } else {
            const obj = document.createElement("td");
            obj.innerHTML = `${data2[k][i].toFixed(3)} ± ${data2[k][i].toFixed(3)}`;
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

}();