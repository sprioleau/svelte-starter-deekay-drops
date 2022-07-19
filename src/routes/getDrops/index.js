import saveDropsToDb from "../../utils/saveDropsToDb";

export async function get() {  
  const { drops } = await saveDropsToDb();

  return {
    status: 200,
    body: { drops }
  };
}