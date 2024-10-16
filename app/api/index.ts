import { Category, Product } from "@/types/types";

export const fetchProduct = async (page: number): Promise<Product | null> => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?products=true&page=${page}`,
      {
        cache: "no-cache",
      }
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return null;
  }
};

export const fetchCategory = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`http://localhost:8000/category`, {
      cache: "no-cache",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const category: Category[] = await response.json();
    return category;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
};

export const fetchByCatId = async (
  id: string,
  page: number
): Promise<Product | null> => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?catId=${id}&page=${page}`,
      {
        cache: "no-cache",
      }
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const dataById: Product = await response.json();
    return dataById;
  } catch (error) {
    console.error("Failed fetch category by id", error);
    return null;
  }
};
