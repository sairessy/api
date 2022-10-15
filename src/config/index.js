import Bell from "../models/devices/Bell.js";
import Camera from "../models/devices/Camera.js";
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
    Device: Camera,
  },
  {
    id: "3",
    name: "tracker",
    Device: Tracker,
  },
];

export default devices;
