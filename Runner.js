let processInfo;

let cores;
let processes;


let TotalProcess = 1;

function addProcess() {
    TotalProcess++;
    let string = "<tr id='ProcessID" + TotalProcess + "'>";
    string += '<td><input type="text" maxLength="5" id="L' + TotalProcess + '" placeholder="Enter Process 1 Label" required/></td>\n' +
        '    <td><input type="number" id="AT' + TotalProcess + '" placeholder="Enter Arrival Time" required/></td>\n' +
        '    <td><input type="number" id="BT' + TotalProcess + '" placeholder="Enter Burst Time" required/></td>\n' +
        '    <td><input type="number" id="P' + TotalProcess + '" placeholder="Enter Priority Time"/></td>\n';

    string += "</tr>";

    document.getElementById("ProcessesList").innerHTML += string.toString();
}

function removeProcess() {
    if (TotalProcess < 2) return;
    document.getElementById("ProcessID" + (TotalProcess)).innerHTML = "";
    document.getElementById("ProcessID" + (TotalProcess)).removeAttribute("id");
    TotalProcess--;
}


function readInput(Cores, Algo) {
    let ProcessData = new Array();

    for (let i = 0; i < TotalProcess; i++) {
        ProcessData[i] = [];
        ProcessData[i].push(document.getElementById("L" + (i + 1)).value);
        ProcessData[i].push(document.getElementById("AT" + (i + 1)).value);
        ProcessData[i].push(document.getElementById("BT" + (i + 1)).value);
        ProcessData[i].push(document.getElementById("P" + (i + 1)).value);
    }
    console.log(ProcessData);
    cores = Cores.value;
    Algo = parseInt(Algo.value);
    processes = TotalProcess;
    processInfo = [];
    allProcesses = [];
    colorsAvail = [
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "red",
        "skyblue"
    ];
    for (let i = 0; i < TotalProcess; i++) {
        processInfo.push(new Process(ProcessData[i][0], ProcessData[i][1], ProcessData[i][2], ProcessData[i][3]));
    }

    simulate(Algo);
}

function simulate(Algo) {
    CPUAlgo.setValues(processInfo);
    let myCores = [];
    console.log("Simulation Stat", Algo, TotalProcess);
    switch (Algo) {
        case 1:
            {
                console.log("Works");
                printHeading("First Come First Serve", true, "H1");
                printHeading("Cores: " + cores, true, "H4");
                for (let i = 0; i < cores; i++)
                    myCores.push(new FCFS());
                break;
            }
        case 2:
            {
                printHeading("Shortst Job First", true, "H1");
                printHeading("Cores: " + cores, true, "H4");
                for (let i = 0; i < cores; i++)
                    myCores.push(new SJF());
                break;
            }
        case 3:
            {
                printHeading("Priority Non Preemptive", true, "H1");
                printHeading("Cores: " + cores, true, "H4");
                for (let i = 0; i < cores; i++)
                    myCores.push(new Priority());
                break;
            }
    }
    console.log("Works 3 - ", processInfo, processInfo.length);
    while (processInfo.length) {
        console.log("Works loop while", processInfo.length);
        for (let i = 0; i < processInfo.length; i++) {
            //console.log("Works loop while for", processInfo.length);
            processInfo[i].passTime();
        }

        for (let i = 0; i < myCores.length; i++) {
            console.log("Works loop while for cores", myCores.length);
            myCores[i].passTime();
            myCores[i].selectProcess();
        }
    }
    console.log("Works 4");
    CPUAlgo.printInfo();
}