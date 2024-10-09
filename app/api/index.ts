export const fetchProduct = async () => {
  try {
    const response = await fetch("http://localhost:8000/product");
    console.log(response);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error message
      console.error("Error is:", error.message);
      return "iqneba mere xelmisawvdomi"; // Return your custom error message
    } else {
      console.error("Unexpected error:", error);
      return "An unexpected error occurred"; // Handle other unexpected errors
    }
  }
};
