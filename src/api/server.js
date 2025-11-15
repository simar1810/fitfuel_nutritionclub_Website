// "use server";

const API_ENDPOINT = process.env.NEXT_PUBLIC_APP_BASE_URL;
const WELLNESSZ_API_ENDPOINT = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
      cache: "no-store"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function sendData(endpoint, method = "POST", data) {
  try {
    if (typeof method !== "string") {
      throw new Error("HTTP method must be a string");
    }

    const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store"
    });
    const retrievedData = await response.json();
    return retrievedData;
  } catch (error) {
    return error;
  }
}

export async function sendWellnessZBackendData(endpoint, method = "POST", data) {
  try {
    if (typeof method !== "string") {
      throw new Error("HTTP method must be a string");
    }

    const response = await fetch(`${WELLNESSZ_API_ENDPOINT}/${endpoint}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store"
    });
    const retrievedData = await response.json();
    return retrievedData;
  } catch (error) {
    return error;
  }
}

export async function sendDataWithFormData(endpoint, method = "POST", formData) {
  try {
    if (typeof method !== "string") {
      throw new Error("HTTP method must be a string");
    }

    const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
      method,
      headers: {
        Accept: "application/json",
      },
      body: formData,
      cache: "no-store",
    });

    const retrievedData = await response.json();
    return retrievedData;
  } catch (error) {
    return error;
  }
}
