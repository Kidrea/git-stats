import InfoPanel from './InfoPanel'
import { useState } from 'react'

export default function App() {
    const [enable, setEnable] = useState(false)
    const [search, setSearch] = useState('')
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)
    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault()
            const userResponse = await fetch(
                `https://api.github.com/users/${search}`
            )
            const userData = await userResponse.json()
            setUser(userData)
            const reposResponse = await fetch(
                `https://api.github.com/users/${search}/repos?sort=updated`
            )
            const reposData = await reposResponse.json()
            setRepos(reposData)
            setEnable(true)
        } catch (error: any) {
            console.log('Error', error.message)
        }
    }
    return (
        <>
            <div className="flex flex-col space-y-2  w-full h-full   pt-12">
                <form
                    method="post"
                    onSubmit={handleSubmit}
                    className="flex flex-col  space-y-2 pt-2 "
                >
                    <div className=" m-auto flex bg-slate-900 flex-col p-4 rounded-xl ">
                        <div className=" pb-2 flex flex-row justify-center space-x-5">
                            <a href="https://github.com/">
                                <img
                                    src="../src/assets/github-mark-white.svg"
                                    alt=""
                                    className="w-8 flex"
                                />
                            </a>
                            <span className=" text-xl  text-slate-200 flex justify-center">
                                Git Stats
                            </span>
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

                {enable ? <InfoPanel user={user} repos={repos} /> : null}
            </div>
        </>
    )
}
