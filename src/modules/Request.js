import fetch from "node-fetch";

export default class Request {
  async get(url) {
    const f = await fetch(url);
    const res = await f.json();
    console.log(res);
  }

  async post(url, data) {
    const f = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const res = await f.json();
    console.log(res);
  }
}

new Request().post('http://localhost:8000/machina/update', {
    idle: true,
    id: '1691870787933',
    spinningx: false
});