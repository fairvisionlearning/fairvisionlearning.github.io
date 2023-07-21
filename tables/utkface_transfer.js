"use strict";

var foo = function(){const metrics = [
    "", "SDR", "MGS", "mGS", "DS", "ΔDTO", "SDR", "MGS", "mGS", "DS", "ΔDTO" //, "σ(HF)"
]

const highlightColor = "#eee";

const data = {
    "Baseline": ["88.30", "90.14", "85.13", "5.01", "0.00", "0.50", "0.00", "82.35", "86.67", "77.97", "8.70", "0.00", "0.500", "0.000"],
    "AFN": ["<b>91.46</b>", "<b>93.08</b>", "<b>89.84</b>", "<u>3.23</u>", "<b>5.55</b>", "<b>0.76</b>", "<b>0.12</b>", "<u>88.03</u>", "<u>91.67</u>", "<u>84.33</u>", "<u>7.34</u>", "<u>8.00</u>", "<u>0.828</u>", "0.152"],
    "DANN": ["79.55", "80.91", "78.07", "<b>2.85</b>", "-11.23", "0.13", "0.07", "79.83", "80.84", "78.82", "<b>2.02</b>", "-2.81", "0.501", "0.033"],
    "RegDA": ["<u>89.64</u>", "<u>91.82</u>", "<u>87.64</u>", "4.18", "<u>3.02</u>", "<u>0.65</u>", "<u>0.09</u>", "<b>90.55</b>", "<b>94.59</b>", "<b>86.44</b>", "8.15", "<b>11.15</b>", "<b>0.883</b>", "0.040"],
};
const data2 = {
    "AFN": ["91.22", "92.03", "90.49", "1.55", "5.43", "0.79", "0.01", "91.32", "91.94", "90.68", "1.27", "13.43", "0.960", "0.020"],
    "DANN": ["80.10", "80.77", "79.45", "1.32", "-10.30", "0.16", "0.10", "83.20", "86.03", "78.85", "7.18", "0.40", "0.551", "0.060"],
    "RegDA": ["91.28", "91.61", "90.61", "1.00", "5.25", "0.80", "0.04", "92.69", "94.78", "89.88", "4.90", "14.36", "0.950", "0.014"],
};

const tableDiv = document.getElementById("utkface-transfer");

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
tran.colSpan = "5";
tran.innerHTML = "<i>Skin Tone</i> → <i>Age</i>";
tr_tran.appendChild(tran);
thead.appendChild(tr_tran);

const tranB = document.createElement("td");
tranB.className = "bbb";
tranB.colSpan = "5";
tranB.innerHTML = "<i>Age</i> → <i>Skin Tone</i>";
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

    if ([0, 4, 5, 9].includes(idx)) {
        obj.classList.add("brb");
    }

    tr_head.appendChild(obj);
    idx += 1;
}

//! Body
const tbody = document.createElement("tbody");
tableEl.appendChild(tbody);

let hlines = [0, 3];

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

        if ([5, 6].includes(i)) continue;

        if (i < data[k].length-2) {
            const obj = document.createElement("td");
            obj.innerHTML = data[k][i];

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }

            if ([3, 4, 10].includes(i)) {
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
tran2.colSpan = "5";
tran2.innerHTML = "<i>Age</i> → <i>Age</i> (<i><b>Oracle</b></i>)";
tr_tran2.appendChild(tran2);

const tranB2 = document.createElement("td");
tranB2.style = "background-color:" + highlightColor + ";";
tranB2.className = "bbb";
tranB2.colSpan = "5";
tranB2.innerHTML = "<i>Skin Tone</i> → <i>Skin Tone</i> (<i><b>Oracle</b></i>)";
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

        if ([5, 6].includes(i)) continue;

        if (i < data2[k].length-2) {
            const obj = document.createElement("td");
            obj.style = "background-color:" + highlightColor + ";";
            obj.innerHTML = data2[k][i];

            if (hlines.includes(idx)) {
                obj.className = "bbb";
            }

            if ([3, 4, 10].includes(i)) {
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