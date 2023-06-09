import React from 'react'

export default function InfoPanel({ user, repos }: { user: any; repos: any }) {
    return (
        <div className=" bg-slate-900 rounded-xl flex flex-row justify-center overflow-auto space-x-2 mx-10 pb-8">
            <div className="  rounded-xl p-4 flex basis-1/5 flex-col space-y-2  text-slate-200">
                <a href={user.html_url} className="justify-center flex">
                    <img
                        src={user.avatar_url}
                        alt="image"
                        className="rounded-full object-contain w-40 "
                    />
                </a>
                <span className="text-slate-100 text-xl">{user.name}</span>
                <span className="text-slate-400">{user.bio}</span>
                <span>Seguidores {user.followers}</span>
                <span>Repositorios públicos {user.public_repos}</span>
            </div>
            <div className=" justify-center w-full flex">
                <div className=" flex flex-col text-slate-200 w-full ">
                    <span className="p-4">Repositorios recientes</span>
                    <div className="p-4 repo space-y-2 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2  ">
                            {repos.map((repo: any) => (
                                <React.Fragment key={repo.name}>
                                    <div className="flex flex-col border-2 border-slate-600 rounded-md p-5 space-y-2 ">
                                        <a
                                            className="text-blue-200 no-underline hover:underline hover:cursor-pointer"
                                            href={repo.html_url}
                                        >
                                            {repo.name}
                                        </a>
                                        <span className="text-xs text-slate-400 ">
                                            {repo.description}
                                        </span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
