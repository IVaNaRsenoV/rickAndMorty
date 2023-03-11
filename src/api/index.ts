export async function api(url: string, options?: RequestInit): Promise<any> {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };