import Bell from "../models/devices/Bell.js";
import Light from "../models/devices/Light.js";
import Tracker from "../models/devices/Tracker.js";

const devices = [
  {
    id: "0",
    name: "light",
    Device: Light,
  },
  {
    id: "1",
    name: "bell",
    Device: Bell,
  },
  {
    id: "2",
    name: "camera",
    Device: Bell,
  },
  {
    id: "3",
    name: "tracker",
    Device: Tracker,
  },
];

export default devices;
