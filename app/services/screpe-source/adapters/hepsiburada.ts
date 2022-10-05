import type { Product } from "@prisma/client";
import axios from "axios";
import { load } from "cheerio";

const isValidHepsiburadaUrl = (url: string) => {
  return url.includes("hepsiburada.com");
};

interface HepsiburadaProductMetaData {
  name: string;
  price: string;
  currency: string;
}

const fetchHtml = (url: string) => {
  return axios.get(url).then((response) => response.data);
};

const crawlHepsiburadaData = async (
  src: string
): Promise<HepsiburadaProductMetaData | null> => {
  try {
    console.log("src", src);
    const html = await fetchHtml(src);
    const $ = load(html);

    const name = $("h1#product-title").text()?.trim();
    const priceElement = $('[itemprop="price"]')?.prop("content");
    const price = parseFloat(priceElement).toFixed(2);

    return {
      name,
      price,
      currency: "TRY",
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const cleanHepsiburadaUrl = (url: string) => {
  const urlWithoutQueryParams = url.split("?")[0];
  const urlWithoutTrailingSlash = urlWithoutQueryParams.replace(/\/$/, "");
  return urlWithoutTrailingSlash;
};

export const getHepsiburadaProduct = async ({
  source,
  userId,
}: {
  source: Product["source"];
  userId: Product["userId"];
}) => {
  const clearedUrl = cleanHepsiburadaUrl(source);
  console.log("clearedUrl", clearedUrl);
  if (!isValidHepsiburadaUrl(source)) {
    throw new Error("URL is not a valid hepsiburada.com url");
  }

  return await crawlHepsiburadaData(clearedUrl);
};
