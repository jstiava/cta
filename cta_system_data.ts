import * as Papa from 'papaparse'
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";


export const CTAColors = {
    'blue_line': "#00a1de",
    
}

export type CTATrainStopRaw = {
    stop_id: string,
    naive_station_name: string,
    name: string,
    inbound_sequence: number,
    lines: string,
    segment: string,
    station_type: string,
    is_accessible: boolean,
    is_transfer: boolean,
    is_parking: boolean,
    parking_capacity: number,
    platforms: string, // comma seperated
    connected_buses: boolean, // comma seperated
    stop_lat: string,
    stop_lon: string,
    location_type: string,
    parent_station: string
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));



export class CTASystemGuide {

    static getTrainLines() {
        return ['Red', 'Green', 'Pink', 'Blue', 'Purple', 'Orange', 'Brown']
    }

    static readInTrainStationsByRoute(line: 'blue' | 'red' | 'brown' | 'yellow' | 'orange' | 'pink' | 'green') {
        
        const csvFilePath = readFileSync(
            path.join(__dirname, "public", "trains", `${line}_stations.csv`),
            "utf8"
        );

        const result = Papa.parse(csvFilePath, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            transform(value, field) {
                switch (field) {
                    case "parking_capacity":
                        return value === "" ? null : Number(value);

                    case "platforms":
                        return value
                            .split(",")
                            .map(v => v.trim())
                            .filter(Boolean);

                    case "connected_buses":
                        return value === "true";

                    default:
                        return value;
                }
            },
        });

        return result.data
    }





}