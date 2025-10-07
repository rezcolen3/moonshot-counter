import { client } from "../index.js";

let oldCount = null;

async function sendMsg(text) {
  try {
    await client.chat.postMessage({
      channel: "C09KX5KAD7A",
      text,
    });
    console.log("Message sent:", text);
  } catch (err) {
    console.error("Error sending message:", err);
  }
}

async function getCount() {
  try {
    const response = await fetch("https://moonshot.hackclub.com/api/stats");
    const data = await response.json();
    return data.count;
  } catch (err) {
    console.error("Error fetching count:", err);
    return null;
  }
}

export async function app() {
  console.log("Checking count...");
  const count = await getCount();
  if (count === null) return;

  if (count !== oldCount) {
    oldCount = count;
    await sendMsg(`The current number of sign-ups is ${count}`);
  } else {
    console.log("Count hasn't changed. Skipping");
  }
}