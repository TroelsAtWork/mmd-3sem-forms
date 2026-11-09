"use server";
import * as z from "zod";
import { Recipe } from "@/schemas/recipeSchema";

const postRecipe = async (previousState, formData) => {
  try {
    const { recipename: recipeName, cooktime: cooktime } = Recipe.parse({
      recipename: formData.get("recipename"),
      cooktime: formData.get("cooktime"),
    });
    const response = await fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: recipeName,
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(`Response status: ${response.status}`);
    return {
      success: true,
      message: "Opskriften blev oprettet",
      fieldErrors: {},
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "",
        fieldErrors: z.flattenError(error).fieldErrors,
      };
    }
    return { success: false, message: "Der skete en fejl", fieldErrors: {} };
  }
};
export default postRecipe;
