import { PanelVideo } from "../../models/panel/index.js";

// Panel front
export const videos = async (req, res) => {
  const panel_id = req.params.panel_id;

  try {
    let videos = await PanelVideo.find({ removed: false });
    res.json(videos);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};
// End Panel front

export const userVideos = async (req, res) => {
  try {
    let videos = await PanelVideo.find({
      removed: false,
      user: req.headers.user,
    });
    res.json(videos);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const create = async (req, res) => {
  const { dias, url, valor_a_pagar } = req.body;
  const user = req.headers.user;

  const data = {
    dias,
    url,
    aproval_status: false,
    payed: false,
    created_at: new Date(),
    valor_a_pagar,
    removed: false,
  };

  try {
    const video = await new PanelVideo({ ...data, user }).save();
    res.json(video);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const remove = async (req, res) => {
  const video = req.params.video;
  const user = req.headers.user;

  if (user) {
    const data = await PanelVideo.findOneAndUpdate(
      { _id: video },
      { removed: true },
      { new: true }
    );
    res.json(data);
  } else {
    res.status(409).json({});
  }
};
