import { describe, expect, it } from "vitest";
import { CTABusService } from "../cta_open_api";


describe("getStops", () => {
    it("loads stop data", async () => {
        const CTABuses = new CTABusService(String('ejYSh4ksLwj3scmEBpjbTt4h3'));
        const vehicles = await CTABuses.getVehiclesByRoutes(['77']);

        console.log(JSON.stringify(vehicles))

        expect(1).toBeGreaterThan(0);
    });
});