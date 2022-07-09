import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        
        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate("/event/lesson/jogo-da-porta-prototipo-funcional")
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 mx-auto" >
                <div className="max-w-[640px]">
                    <div className="flex justify-center lg:block">
                        <Logo />
                    </div>

                    <h1 className="mt-[24.41] lg:mt-8 text-[30px] lg:text-[2.5rem] leading-tight px-[24px] lg:px-0 pt-[24px] flex items-center flex-col lg:items-start">
                        <div className="block lg:flex">
                            <div className="flex justify-center lg:block">
                                Construa uma
                            </div>
                            <div>
                                <strong className="text-blue-500 lg:pl-[10px]">aplicação completa</strong>,
                            </div>
                        </div>
                        <div>
                            do zero, com <strong className="text-blue-500">React JS</strong>
                        </div>
                        
                    </h1>
                    <p className="mt-4 text-gray-200 text-[14px] leading-relaxed p-[24px] lg:text-[16px] lg:p-0 text-center">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="px-[24px] lg:p-8 w-full lg:w-auto bg-gray-700 border border-gray-500 rounded pb-[32px]">
                    <strong className="text-[18px] lg:text-2xl mb-6 block pt-[32px]">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo" 
                            onChange={event => setName(event.target.value)}
                        />

                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"

                        >
                            Garantir minha vaga
                        </button>

                    </form>

                </div>

            </div>


            <img src="/src/assets/code-mockup.png" className="mt-4 lg:mt-10" alt="" />
        </div>
    );
}