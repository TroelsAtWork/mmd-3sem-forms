"use client";
import postRecipe from "@/actions/action";
const RecipeForm = () => {
  return (
    <form>
      <input
        type="text"
        name="recipename"
        placeholder="Opskriftens titel"
        className="border"
      />
      <button formAction={postRecipe} type="submit" className="border">
        Opret opskrift
      </button>
    </form>
  );
};

export default RecipeForm;
