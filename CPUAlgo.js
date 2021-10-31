let allProcesses = [];
//let processInfo = [];
class CPUAlgo {

    constructor() {
        this.tableID = createTable(["Core"]);
        addTableRow([], this.tableID);
        this.time = 0;
    }
    static setValues(pi) {
        processInfo = pi;
        for (let i = 0; i < pi.length; i++) {
            allProcesses.push(pi[i]);
        }
    }

    passTime() {
        this.time++;
        if (this.process != null)
            addTableColumn(this.process.id, this.tableID, this.process.color, this.time);
        else
            addTableColumn("-", this.tableID, "white", this.time);
        if (this.process != null) {
            if (!this.process.loaded) {
                for (let i = 0; i < processInfo.length; i++) {

                    if (processInfo[i] === this.process) {
                        console.log("Test pass", processInfo.splice(i, 1));
                        break;
                    }
                }
                this.process = null;
            }
        }

    }

    selectProcess() {
        if (this.process == null) {
            for (let i = 0; i < processInfo.length; i++) {
                let process = processInfo[i];
                if (!process.completed && !process.loaded) {
                    if (process.arrivalTime == 0) {
                        process.loaded = true;
                        this.process = process;
                        break;
                    }
                }
            }
        }
    }

    static printInfo() {
        let tableID = createTable(["PID", "Execution Time", "Waiting Time", "Turn Around Time"]);
        for (let i = 0; i < allProcesses.length; i++) {
            addTableRow([allProcesses[i].id, allProcesses[i].processTime, allProcesses[i].waitingTime, allProcesses[i].getTurnaroundTime()], tableID);
        }

        println("Total Time waiting: " + CPUAlgo.getWaitingTime());
        println("Total turnaround time: " + CPUAlgo.getTurnAroundTime());
        println("Average turnaround time: " + CPUAlgo.getTurnAroundAvg());
    }


    static getWaitingTime() {
        let waitingTime = 0;
        for (let i = 0; i < allProcesses.length; i++) {
            waitingTime += allProcesses[i].waitingTime;
        }
        return waitingTime;
    }

    static getTurnAroundTime() {
        let ptime = 0;
        for (let i = 0; i < allProcesses.length; i++) {
            ptime += allProcesses[i].getTurnaroundTime();
        }
        return ptime;
    }

    static getTurnAroundAvg() {
        return CPUAlgo.getTurnAroundTime() / allProcesses.length;
    }

    setComparator(comparator) {
        this.comparator = comparator;
        processInfo.sort(comparator);
    }

    static setAlgorithm(algorithm) {
        CPUAlgo.algorithm = algorithm;
    }
}
