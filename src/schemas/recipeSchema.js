import * as z from "zod";
export const Recipe = z.object({
  recipename: z
    .string()
    .trim()
    .min(1, "Feltet må ikke være tomt.")
    .regex(
      /^[\p{L} ]+$/u,
      "Brug kun bogstaver og mellemrum i opskriftsnavnet.",
    ),
  cooktime: z
    .string()
    .trim()
    .min(1, "Indtast tilberedningstiden.")
    .regex(/^\d+$/, "Indtast et helt antal minutter.")
    .transform(Number)
    .pipe(z.number().min(1, "Tilberedningstiden skal være mindst 1 minut.")),
});

export const initialRecipe = {
  recipename: "",
  cooktime: "",
};
