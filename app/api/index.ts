export const fetchPopularProducts = async () => {
  try {
    const response = await fetch("http://localhost:8000/product?popular=true", {
      cache: "default",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
