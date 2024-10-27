import { Category, Product } from "@/types/types";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const fetchPopularProducts = async () => {
  try {
    const response = await fetch(`${URL}product?popular=true&page=1`, {
      cache: "no-cache",
      // cache: "default",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

export const fetchProduct = async (page: number): Promise<Product | null> => {
  try {
    const response = await fetch(`${URL}product?products=true&page=${page}`, {
      cache: "no-cache",
    });
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
    const response = await fetch(`${URL}category`, {
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

export const fetchSaleProducts = async () => {
  try {
    const response = await fetch(`${URL}product?discount=true&page=1`, {
      cache: "no-cache",
      // cache: "default",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const fetchByCatId = async (
  id: string,
  page: number
): Promise<Product | null> => {
  try {
    const response = await fetch(`${URL}product?catId=${id}&page=${page}`, {
      cache: "no-cache",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const dataById: Product = await response.json();
    return dataById;
  } catch (error) {
    console.error("Failed fetch category by id", error);
    return null;
  }
};

export const fetchOneProduct = async (id: string) => {
  try {
    const response = await fetch(`${URL}product?productId=${id}`, {
      cache: "no-cache",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const makeOrder = async (productId: string) => {
  try {
    const response = await fetch(`${URL}order`, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      throw new Error("Failed to make an order");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to make order:", error);
    return [];
  }
};
