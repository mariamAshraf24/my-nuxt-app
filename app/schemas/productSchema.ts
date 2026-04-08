import { z } from "zod";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

export const productSchema = z.object({
  name: z
    .string()
    .min(1, t("validation.name_required"))
    .regex(
      /^(?!.*[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]).+$/,
      t("validation.name_no_arabic")
    ),
  category: z.string().min(1, t("validation.category_required")),
  price: z
    .number({ invalid_type_error: t("validation.price_number") })
    .positive(t("validation.price_positive")),
  stock: z
    .number({ invalid_type_error: t("validation.stock_number") })
    .min(0, t("validation.stock_min")),
  status: z.string().min(1, t("validation.status_required")),
  description: z.string().min(1, t("validation.description_required")),
  image: z.string(),
});
export type ProductForm = z.infer<typeof productSchema>;
