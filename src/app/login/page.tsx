const Login = () => {
  return(
    <div className="h-full w-full flex items-center justify-center ">
      <div className="flex max-w-[360px] rounded-lg bg-slate-500 p-4 flex-col gap-4 w-full">
        <input className="pl-2 rounded-sm h-[40px] text-black" type="text" placeholder="kindrativmaksum312@gmail.com" />
        <input className="pl-2 rounded-sm h-[40px] text-black" type="text" placeholder="******" />
        <button className=" py-2 px-4 bg-rose-400">logIn</button>
      </div>
    </div>
  )
}

export default Login