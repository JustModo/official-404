export const loginRequest = async (formData) => {
  try {
    const response = await fetch("https://club.modo-dev.com/login", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);

      throw new Error(errorData);
    }

    return { success: true, data: response };
  } catch (err) {
    return { success: false, data: err.message };
  }
};
