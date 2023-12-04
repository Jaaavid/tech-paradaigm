import { headers } from "next/headers";

const useFetch = async (gclid) => {
  // Fetch the IP address from the headers
  const ip = headers().get("x-forwarded-for") || "No IP Found";

  // Log the IP address for debugging
  console.log("IP Address:", ip);
  console.log("GCLID:", gclid);

  // Define the URL you are sending the request to
  const url = `YOUR_BACKEND_URL`;

  try {
    // Make the POST request to the server
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: ip, gclid: gclid }),
    });

    // Parse the JSON response
    const data = await response.json();
    console.log("Response Data:", data);

    return data;
  } catch (error) {
    console.error("Error in useFetch:", error);
  }
};

export default useFetch;
