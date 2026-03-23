import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const onlyDigits = (value: string) => value.replace(/\D/g, "");

// /^\d{8}$/.test(v) = regex que retorna true se o CEP tiver exatamente 8 dígitos
const validateCEP = (value: string): boolean => /^\d{8}$/.test(value);

export const cepFormSchema = z.object({
  cep: z
    .string()
    .nonempty("CEP é obrigatório")
    .transform(onlyDigits)
    .refine((v) => validateCEP(v), "CEP inválido"),
});

export type CEPFormData = z.infer<typeof cepFormSchema>;

export const useCEPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CEPFormData>({
    resolver: zodResolver(cepFormSchema),
    mode: "onBlur",
    defaultValues: { cep: "" },
    criteriaMode: "all",
  });

  return { register, handleSubmit, errors, isSubmitting, reset };
};
