export const BASE_URL = "https://giveit-app.onrender.com/api";

export const getAllUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await res.json();
  return data;
};
