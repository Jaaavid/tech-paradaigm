const useFetch = async (gclid: any) => {
  console.log("gclid", gclid);
  const url = `https://api.gameindustrytitans.com/logic?gclid=${gclid}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export default useFetch;
