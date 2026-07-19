const CTA_BUS_BASE_URL = "https://www.ctabustracker.com"


type RouteServiceDirectionsResponse = {
    "bustime-response": {
        directions: { id: string, name: string }
    }
}

type CTATrain = {
    rn: string,
    destSt: string,
    destNm: string,
    trDr: string,
    nextStaId: string,
    nextStpId: string,
    nextStaNm: string,
    prdt: Date,
    arrT: Date,
    isApp: string,
    isDly: string,
    flags: null,
    lat: string,
    lon: string,
    heading: string
}

type TrainRouteLocationsResponse = {
    ctatt: {
        tmst: Date,
        errCd: number,
        errNum: null,
        route: {
            "@name": string,
            train: CTATrain[]
    }[]
    }
}

export type CTATrainRoutesOptions = 'red' | 'blue' | 'brn' | 'g' | 'org' | 'p' | 'pink' | 'y' | 'pexp'

export class CTATrainService{

    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey
    }


    buildQuery(params: any) {
        return new URLSearchParams(
            Object.entries({
                ...params,
                key: this.apiKey,
            }).map(([k, v]) => [k, String(v)])
        ).toString()
    }

    async getStationArrivalPredictions(params: {
        stationId: string
    }) {
        const BASE_URL = "https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx"

        const query = this.buildQuery({
            mapid: params.stationId,
            outputType: 'json'
        })

        return await fetch(`${BASE_URL}?${query}`).then(res => res.json()).then(data => data)

    }

    async getStopArrivalPredictions(params: {
        stopId: string
    }) {
        const BASE_URL = "https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx"

        const query = this.buildQuery({
            stpid: params.stopId,
            outputType: 'json'
        })

        return await fetch(`${BASE_URL}?${query}`).then(res => res.json()).then(data => data)
    }

    async getTrainLocationsByRoute(routeId: CTATrainRoutesOptions): Promise<TrainRouteLocationsResponse> {
        const BASE_URL = "https://lapi.transitchicago.com/api/1.0/ttpositions.aspx"

        const query = this.buildQuery({
            rt: routeId,
            outputType: 'json'
        })

        return await fetch(`${BASE_URL}?${query}`).then(res => res.json()).then(data => data)
    }


    async getTrainArrivalPredictions(trainId: string) {
        const BASE_URL = "lapi.transitchicago.com/api/1.0/ttfollow.aspx"

        const query = this.buildQuery({
            runnumber: trainId,
            outputType: 'json'
        })

        return await fetch(`${BASE_URL}?${query}`).then(res => res.json()).then(data => data)
    }

}



export class CTABusService {

    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey
    }

    buildQuery(params: any) {
        return new URLSearchParams(
            Object.entries({
                ...params,
                key: this.apiKey
            }).map(([k, v]) => [k, String(v)])
        ).toString()
    }


    async getAllBusRoutes() {

        const query = this.buildQuery({
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getroutes?${query}`).then(res => res.json()).then(data => data)
    }


    async getRouteServiceDirections(routeId: string): Promise<RouteServiceDirectionsResponse> {
        const query = this.buildQuery({
            rt: routeId,
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getdirections?${query}`).then(res => res.json()).then(data => data)
    }

    async getBusStops(params: {
        routeId: string,
        direction: string
    }) {
        const query = this.buildQuery({
            rt: params.routeId,
            dir: params.direction,
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getstops?${query}`).then(res => res.json()).then(data => data)
    }


    async getRoutePoints(params: {
        routeId: string
    }) {
        const query = this.buildQuery({
            rt: params.routeId,
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getpatterns?${query}`).then(res => res.json()).then(data => data)
    }


    async getRouteStopPredictions(params: {
        routeId: string,
        stopId: string
    }) {
        const query = this.buildQuery({
            rt: params.routeId,
            stpid: params.stopId,
            top: 50,
            tmres: 's',
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getpredictions?${query}`).then(res => res.json()).then(data => data)
    }

    async getVehiclePredictions(params: {
        routeId: string,
        vehicleId: string
    }) {
        const query = this.buildQuery({
            rt: params.routeId,
            vid: params.vehicleId,
            top: 50,
            tmres: 's',
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getpredictions?${query}`).then(res => res.json()).then(data => data)
    }

     async getVehiclesByRoutes(routeIds: string[]) {
        const query = this.buildQuery({
            rt: routeIds,
            tmres: 's',
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getvehicles?${query}`).then(res => res.json()).then(data => data)
    }

     async getVehiclesByIds(vehicleIds: string[]) {
        const query = this.buildQuery({
            vid: vehicleIds,
            tmres: 's',
            format: 'json'
        })

        return await fetch(`${CTA_BUS_BASE_URL}/bustime/api/v3/getvehicles?${query}`).then(res => res.json()).then(data => data)
    }


}