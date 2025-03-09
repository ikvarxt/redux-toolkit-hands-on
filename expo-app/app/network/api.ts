import { fetch } from "expo/fetch";

const baseUrl = "http://localhost:8000/";

async function get(endpoint: string, query?: Record<string, string>) {
  let url = baseUrl + endpoint;
  if (query) {
    const params = new URLSearchParams(query);
    url += "?" + params.toString();
  }
  console.log("get url", url);
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const text = await res.text();
    if (res.ok) {
      console.log("get ok text", text);
      return JSON.parse(text);
    } else {
      console.error("get error", text);
      return undefined;
    }
  } catch (e) {
    console.error("get fetch error", e);
    return undefined;
  }
}

async function post(endpoint: string, req: object) {
  console.log("POST", endpoint, req);
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(req),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    return res.json();
  } else {
    console.error("post error", res.text());
    return undefined;
  }
}

export default { get, post };
