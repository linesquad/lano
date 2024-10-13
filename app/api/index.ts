import { Category, Product } from "@/types/types";

export const fetchProduct = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:8000/product", {
      cache: "no-cache",
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data: Product[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const fetchCategory = async (): Promise<Category[]> => {
  try {
    const response = await fetch("http://localhost:8000/category", {
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

export const fetchProductById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:8000/product?catId=${id}`, {
      cache: "default",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const dataById = await response.json();
    return dataById;
  } catch (error) {
    console.error("Failed fetch category by id", error);
    return error;
  }
};
