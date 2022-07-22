import { API_URL } from "../constants";

const getDrops = async () => {
  const response = await fetch(API_URL, {
    "headers": {
      "content-type": "application/json",
      "x-hasura-admin-secret": import.meta.env.VITE_X_HASURA_ADMIN_SECRET,
    },
    "method": "GET",
  });
    
  const { drops } = await response.json();

  return (drops ?? []).filter(({ image_src }) => !image_src.trim().startsWith("data"));
}

export default getDrops;