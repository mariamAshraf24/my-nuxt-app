import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required")
    .regex(
      /^(?!.*[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]).+$/,
      "Name must not contain Arabic characters"
    ),
  category: z.string().min(1, "Category is required"),
  price: z
    .number({ error: "Price must be a number" })
    .positive("Price must be greater than 0"),
  stock: z
    .number({ error: "Stock must be a number" })
    .min(0, "Stock must be ≥ 0"),
  status: z.string().min(1, "Status is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string(),
});
export type ProductForm = z.infer<typeof productSchema>;
