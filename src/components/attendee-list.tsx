import { Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center" >
        <h1 className="font-bold text-2xl" > Partipantes </h1>

        <div className="flex gap-3 items-center max-w-72 rounded-lg text-sm py-1.5 px-3 border border-white/10" >
          <Search  className="size-4 text-emerald-500" />
          <input placeholder="Buscar participante..." className=" bg-transparent flex-1 outline-none"/>
        </div>
      </div>
    </div>
  )
}