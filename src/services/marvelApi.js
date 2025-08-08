import axios from "axios";
import md5 from "md5";

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

export const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash
  }
});