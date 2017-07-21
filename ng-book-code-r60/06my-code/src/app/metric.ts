export interface Metric{
    eventName: string;
    scope: string;
}

export interface Analytics{
    recordEvent(metric:Metric);
}

export class AnalyticService{
    constructor(private analytics:Analytics){
    }

    record(metric:Metric){
        this.analytics.recordEvent(metric);
    }
}

export class SingletonService{
    something(){
        console.log('singleton.something()');
    }
}