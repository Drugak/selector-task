const fetcher = async <T>(url: string): Promise<T> => {
  let data: T;

  try {
    if (!url) {
      throw new Error("URL is required");
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response: ${response.status}`);
    }

    data = await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }

  return data;
}

export default fetcher;
