import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z
  .object({
    firstName: z.string().nonempty("Primeiro nome é obrigatório"),
    lastName: z.string().nonempty("Último nome é obrigatório"),

    email: z.email("E-mail inválido").nonempty("E-mail é obrigatório"),

    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),

    confirmPassword: z.string().nonempty("Confirmação de senha é obrigatória"),

    cpf: z
      .string()
      .min(11, "CPF é obrigatório")
      .refine(isValidCPF, "CPF inválido"),

    birthDate: z
      .string()
      .refine(
        (date) => !isNaN(Date.parse(date)),
        "Data de nascimento inválida"
      ),

      cellphone: z.string().nonempty("Telefone é obrigatório")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });


type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
        email: "",
        password: ""
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset
  }
}