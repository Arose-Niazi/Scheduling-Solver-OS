class FCFS extends CPUAlgo {

    constructor () {
        super();
        CPUAlgo.algorithm = "First Come First Serve";
        this.setComparator(function compare(a , b)
        {
            return a.arrivalTime - b.arrivalTime;
        });
        this.selectProcess();
    }
}

class SJF extends CPUAlgo {

    constructor () {
        super();
        CPUAlgo.algorithm = "Shortest Job First";
        this.setComparator(function compare(a , b)
        {
            return a.burstTime - b.burstTime;
        });
        this.selectProcess();
    }
}

class Priority extends CPUAlgo {

    constructor () {
        super();
        CPUAlgo.algorithm = "Priority Non Preemptive";
        this.setComparator(function compare(a , b)
        {
            return a.priority - b.priority;
        });
        this.selectProcess();
    }
}

