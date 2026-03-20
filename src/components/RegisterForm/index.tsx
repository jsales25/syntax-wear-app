import { useRegisterForm } from "./register-form.schema";

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <form className="text-black">

      {/* Campo de e-mail */}
      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="email" {...register("email")} />

        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      {/* Campo de senha */}
      <div>
        <label className="text-xs text-gray-600">Senha*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="password" {...register("password")} />

        {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
      </div>

      {/* Campo de confirmar senha */}
      <div>
        <label className="text-xs text-gray-600">Confirmar senha*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="password" {...register("confirmPassword")} />

        {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</p>}
      </div>

      {/* Campo de nome */}
      <div>
        <label className="text-xs text-gray-600">Nome*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="text" {...register("firstName")} />

        {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName.message}</p>}
      </div>

      {/* Campo de sobrenome */}
      <div>
        <label className="text-xs text-gray-600">Sobrenome*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="text" {...register("lastName")} />

        {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName.message}</p>}
      </div>

      {/* Campo de CPF */}
      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="text" {...register("cpf")} />

        {errors.cpf && <p className="text-xs text-red-600 mt-1">{errors.cpf.message}</p>}
      </div>

      {/* Campo de data de nascimento */}
      <div>
        <label className="text-xs text-gray-600">Data de nascimento</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="date" {...register("birthDate")} />

        {errors.birthDate && <p className="text-xs text-red-600 mt-1">{errors.birthDate.message}</p>}
      </div>

      {/* Campo de celular */}
      <div>
        <label className="text-xs text-gray-600">Telefone*</label>
        <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="tel" {...register("phone")} />

        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
      </div>

        <button disabled={isSubmitting} className="bg-[#5433EB] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 w-full cursor-pointer mt-4">
            {isSubmitting ? "Enviando..." : "Continuar"}
        </button>

    </form>
  );
};
