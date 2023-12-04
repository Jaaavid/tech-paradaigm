const useFetch = async (gclid: any) => {
  const url = `https://api.gameindustrytitans.com/logic`;

  try {
    const ipResponse = await fetch("https://api.ipify.org/?format=json");
    const ipData = await ipResponse.json();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address: ipData.ip, gclid: gclid }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error in useFetch:", error);
  }
};

export default useFetch;
