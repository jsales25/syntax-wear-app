export const LoginForm  = () => {
    return (
        <form className="flex flex-col gap-3.5">
            <input className="border rounded-[1px] border-gray-200 w-full text-black p-3" type="email" placeholder="E-mail" />
            <button className="bg-[#212A2F] w-full p-3.5 rounded-[1px] cursor-pointer text-white">Continuar</button>
        </form>
    )
}