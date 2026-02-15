import type { ContactFormData } from "@shared/types";

const API_BASE = "/api";

export async function sendContactForm(data: ContactFormData) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Något gick fel");
  }

  return res.json();
}
