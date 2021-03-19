
let colorsAvail;


class Process {

    constructor(id, arrivalTime, burstTime, priority) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.priority = priority;
        this.waitingTime = this.processTime = 0;
        this.loaded = false;
        this.completed = false;
        let r = Math.floor(Math.random()*colorsAvail.length);
        this.color = colorsAvail[r];
        colorsAvail.splice(r,1);
    }

    passTime()
    {
        if(!this.completed)
        {
            if(this.loaded)
            {
                this.processTime++;
                if(--this.burstTime == 0)
                {
                    this.completed=true;
                    this.loaded=false;
                }
            }
            else
            {
                if(this.arrivalTime > 0)
                    this.arrivalTime--;
                else
                    this.waitingTime++;
            }

        }
    }

    getTurnaroundTime() {
        return this.processTime + this.waitingTime;
    }

}