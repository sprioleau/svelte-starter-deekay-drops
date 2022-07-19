import { APIErrorCode, Client } from "@notionhq/client";
const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY, notionVersion: "2022-02-22" });
const database_id = "5af9d0acc26741b1bb7b2cdba103c527";

const saveDropsToDb = async () => {
  try {
    let drops = await notion.databases.query({ 
      database_id,
    });

    drops = drops.results
      .map(({ properties: { name, alt, src, openSeaUrl, number } }) => {
        return {
          name: name.rich_text[0].text.content,
          alt: alt.title[0].text.content,
          number: number.rich_text[0].text.content.padStart(3, 0),
          openSeaUrl: openSeaUrl.url,
          src: src.url,
        }
      }).sort((a, b) => {
				const aNumber = Number(a.number);
				const bNumber = Number(b.number);
				
				return aNumber < bNumber ? -1 : aNumber > bNumber ? 1 : 0;
			});

    return { drops, error: null };
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) { 
      console.log("Maybe try a different Notion DB?")
    } else {
      console.error(error);
    }

    return { drops: null, error };
  }
}

export default saveDropsToDb;