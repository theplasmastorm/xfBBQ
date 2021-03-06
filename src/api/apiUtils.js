import { toast } from "react-toastify";

export async function handleResponse(response) {
  // Have 204 return blank
  if (response.status === 204) return "{}";
  if (response.ok) return response.json();
  // Return to login on 401, reset state
  if (response.status === 401) {
    window.alert("You are being signed out due to inactivity");
    window.location.href = "/UserLogout";
  }
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  toast.error("A server error has occurred");
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
