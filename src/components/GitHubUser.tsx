import InfoPanel from './InfoPanel'
import { useState } from 'react'

export default function App() {
    const [enable, setEnable] = useState(false)
    const [username, setUsername] = useState('')
    const setUser = (event: any) => {
        setUsername(event.target.value)
    }
    const handleClick = () => {
        console.log(username)
    }
    return (
        <>
            <div className="flex flex-row space-x-4">
                <div className=" flex m-auto w-96 flex-col space-y-2 pt-2">
                    <div className=" pb-2 flex justify-center">
                        <a href="#">
                            <img
                                src="../src/assets/github-mark-white.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className=" justify-center flex bg-slate-900 flex-col p-4 rounded-xl">
                        <div className=" text-xl  text-slate-200 flex justify-center">
                            Estadísticas de Usuario
                        </div>
                        <div className="container flex flex-col  pt-2 space-y-3">
                            <label
                                className="text-slate-200"
                                htmlFor="username_field"
                            >
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username_field"
                                value={username}
                                onChange={setUser}
                                className="block shadow-black shadow-lg bg-black w-full rounded-md border-2 border-slate-600 py-1.5 pl-7 pr-20 text-slate-200  placeholder:text-slate-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-blue-500 sm:text-sm sm:leading-6"
                                placeholder="...usuario"
                            ></input>
                            <button
                                className=" h-9 shadow-black shadow-lg block bg-green-900 hover:bg-green-700 rounded-lg text-slate-200"
                                onClick={handleClick}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>

                <InfoPanel />
            </div>
        </>
    )
}
