import { headers } from "next/headers";

const useFetch = async (gclid: any) => {
  const ip = headers().get("x-forwarded-for");

  const url = `https://api.gameindustrytitans.com/logic`;

  const res = await fetch(url, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ address: ip, gclid: gclid }),
  });
  const data = await res.json();
  return data;
};

export default useFetch;
