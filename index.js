import dotenv from "dotenv";
dotenv.config();
console.log(".ENV config done");

import { WebClient } from "@slack/web-api";
export let client = new WebClient(process.env.SLACK_BOT_TOKEN);

import { app } from "./modules/app.js";
setInterval(app, 20000);