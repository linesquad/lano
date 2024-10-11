import { Product } from "@/types/types";

export const fetchProduct = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:8000/product", {
      cache: "default",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};