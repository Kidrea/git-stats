import InfoPanel from './InfoPanel'
import { useState } from 'react'

export default function App() {
    const [enable, setEnable] = useState(false)
    const [search, setSearch] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault()
            setEnable(true)
            const response = await fetch(
                `https://api.github.com/users/${search}`
            )
            const data = await response.json()
            setUsername(data)
        } catch (error: any) {
            console.log('Error', error.message)
        }
    }
    return (
        <>
            <div className="flex flex-row space-x-4">
                <form
                    method="post"
                    onSubmit={handleSubmit}
                    className=" flex m-auto w-96 flex-col space-y-2 pt-2"
                >
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
                                onChange={(e) => setSearch(e.target.value)}
                                className="block shadow-black shadow-lg bg-black w-full rounded-md border-2 border-slate-600 py-1.5 pl-7 pr-20 text-slate-200  placeholder:text-slate-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-blue-500 sm:text-sm sm:leading-6"
                                placeholder="...usuario"
                            ></input>
                            <button
                                type="submit"
                                className=" h-9 shadow-black shadow-lg block bg-green-900 hover:bg-green-700 rounded-lg text-slate-200"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </form>

                {enable ? <InfoPanel /> : null}
            </div>
        </>
    )
}
