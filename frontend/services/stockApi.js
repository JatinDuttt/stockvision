import { mockDashboard } from "./stockMock.js";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export async function getDashboardData() {
  try {
    const response = await fetch(`${API_BASE}/api/market/overview`);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    return await response.json();
  } catch {
    return mockDashboard;
  }
}
