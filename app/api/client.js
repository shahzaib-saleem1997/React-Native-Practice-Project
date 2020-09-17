import {
  create
} from "apisauce";
import cache from "../utility/cache";
import authStorage from '../auth/storage';

const apiClient = create({
  baseURL: "http://192.168.0.105:5000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  // console.log("Entered the modified get function");
  const response = await get(url, params, axiosConfig);
  // console.log("Awaiting reponse");
  if (response.ok) {
    // console.log("Database is up and running, let's save data in cache.");
    cache.store(url, response.data);
    // const debug_data = await cache.get(url);
    // console.log("Saved below data in cache.");
    // console.log(debug_data);
    return response;
  }

  // console.log("Couldn't connect to database, let's get data from cache");

  const data = await cache.get(url);
  // console.log("This is what we got from cache");
  // console.log(data);

  return data ? {
      ok: true,
      data,
    } :
    response;
};

export default apiClient;