import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const lat = 40.41;
    const lon = -3.7;
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const res = await axios.get(url);

    console.log("res air quality", res.data);
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching air quality data: ", error);
    return new Response("Error fetching air quality data", { status: 500 });
  }
}
