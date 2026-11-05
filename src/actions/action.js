"use server";
const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");
  console.log("recipename: ", recipeName);
};
export default postRecipe;
