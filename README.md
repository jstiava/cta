# @jeremystiava/cta

A modern TypeScript client for the **Chicago Transit Authority (CTA)** Bus Tracker and Train Tracker APIs.

Designed for Node.js, Next.js, and modern JavaScript applications, this package provides a simple, strongly typed interface for accessing real-time CTA transit data.

---

## Features

- 🚆 Real-time train arrival predictions
- 🚌 Real-time bus arrival predictions
- 📍 Retrieve bus routes and stops
- 🚉 Retrieve train stations
- 📡 Simple Promise-based API
- 📝 Full TypeScript support
- ⚡ Lightweight with zero runtime dependencies
- 🌐 Works in Node.js and modern web frameworks

---

## Installation

```bash
npm install @jeremystiava/cta
```

---

## Getting Started

```ts
import { CTA } from "@jeremystiava/cta";

// Use the CTA apis.
const cta_buses = new CTABusService(process.env.CTA_BUS_API_KEY!);
const cta_trains = new CTATrainService(process.env.CTA_TRAIN_API_KEY!);




```

---

## Train Arrivals

```ts
const arrivals = await cta.train.getArrivals({
  stationId: "40380",
});

console.log(arrivals);
```

---

## Bus Arrivals

```ts
const arrivals = await cta.bus.getPredictions({
  stopId: "14787",
});

console.log(arrivals);
```

---

## Find Stops

```ts
const stops = await cta.bus.getStops({
  route: "22",
});
```

---

## Find Train Stations

```ts
const stations = await cta.train.getStations();
```

---

## API Keys

The CTA APIs require developer API keys.

You can request free API keys from the Chicago Transit Authority Developer Center.

Once obtained, provide your keys when creating the client.

---

## TypeScript

This package is written entirely in TypeScript and ships with complete type definitions.

```ts
import type {
  TrainArrival,
  BusPrediction,
} from "@jeremystiava/cta";
```

---

## Framework Support

Works with:

- Node.js
- Next.js
- React
- Express
- NestJS
- Bun
- Deno (via npm compatibility)

---

## Roadmap

- [ ] Route planning
- [ ] Service alerts
- [ ] Vehicle tracking
- [ ] GTFS static data helpers
- [ ] Automatic retry/backoff
- [ ] Built-in caching
- [ ] Rate limit handling

---

## Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to contribute, please open an issue or submit a pull request.

---

## License

MIT © Jeremy Stiava