import { z } from "zod";   
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const LoginForm  = () => {

    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { signIn } = useAuth();

    const navigate = useNavigate();

    const signIFormSchema = z.object({
        email: z.email("E-mail inválido"),
        password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    });

    type SignInFormData = z.infer<typeof signIFormSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
        resolver: zodResolver(signIFormSchema),
    });

    const onSubmit = async (data: SignInFormData) => {
        setIsSubmitting(true);

        try {
            await signIn(data);
            navigate({ to: "/" });
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Erro desconhecido ao fazer login");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit(onSubmit)}>
            <input className="border rounded-[1px] border-gray-200 w-full text-black p-3" type="email" placeholder="E-mail" {...register("email")}/>

            { errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span> }

            <input className="border rounded-[1px] border-gray-200 w-full text-black p-3" type="password" placeholder="Senha" {...register("password")}/>

            { errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span> }

            { error && <span className="text-red-500 text-sm text-center">{error}</span> }

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#212A2F] w-full p-3.5 rounded-[1px] text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Enviando ..." : "Continuar"}
            </button>
        </form>
    )
}