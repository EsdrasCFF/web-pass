import {  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4" >
      <div className="flex gap-3 items-center" >
        <h1 className="font-bold text-2xl" > Partipantes </h1>

        <div className="flex gap-3 items-center max-w-72 rounded-lg text-sm py-1.5 px-3 border border-white/10" >
          <Search  className="size-4 text-emerald-500" />
          <input placeholder="Buscar participante..." className=" bg-transparent flex-1 border-none outline-none shadow-none "/>
        </div>
      </div>

      <div className="border border-white/10 rounded-lg" >
        <table className="w-full" >
          <thead className="text-sm font-semibold border-b border-white/10" >
            <tr>
              <th style={{width: 38}} className="px-3 py-3 text-left" >
                <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " />
              </th>
              
              <th className="px-3 py-3 text-left" >Código</th>
              
              <th className="px-3 py-3 text-left" >Participante</th>
              
              <th className="px-3 py-3 text-left" >Data da incrição</th>
              
              <th className="px-3 py-3 text-left" >Data do check-in</th>

              <th style={{width: 64}} className="px-3 py-3 text-left" ></th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-200 border-b border-white/10" >
            {Array.from({length: 10}).map((_, i) => {
              return (
                <tr key={String(i+'a')} className="border-b border-white/10 hover:bg-white/5" >
                  <td className="px-3 py-3 text-left" > <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " /> </td>
                  
                  <td className="px-3 py-3 text-left" > 15456 </td>

                  <td className="px-3 py-3 text-left" > 
                    <div className="flex flex-col" >
                      <p className="font-semibold" >Esdras Castro Ferreiras</p>
                      <span>esdras.cff@gmail.com</span>
                    </div> 
                  </td>

                  <td className="px-3 py-3 text-left" > 7 dias atrás </td>

                  <td className="px-3 py-3 text-left" > 8 dias atrás </td>
                
                  <td className="px-3 py-3 text-left" > 
                    <button className="bg-black border border-white/10 p-1.5 rounded-md" > 
                      <MoreHorizontal className="size-4" /> 
                    </button> 
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="px-3 py-3 text-left"> Mostrando 10 de 228 items </td>

              <td colSpan={3} className="px-3 py-3 text-right"> 
                <div className="inline-flex gap-3 items-center " >
                  <span>Página 1 de 23</span> 
                  
                  <div className="flex gap-1.5" >
                    <button className="bg-white/10 border border-white/10 p-1.5 rounded-md" > 
                      <ChevronsLeft className="size-4" /> 
                    </button>

                    <button className="bg-white/10 border border-white/10 p-1.5 rounded-md" > 
                      <ChevronLeft className="size-4" /> 
                    </button>

                    <button className="bg-white/10 border border-white/10 p-1.5 rounded-md" > 
                      <ChevronRight className="size-4" /> 
                    </button>

                    <button className="bg-white/10 border border-white/10 p-1.5 rounded-md" > 
                      <ChevronsRight className="size-4" /> 
                    </button>
                  </div>
                </div>
              </td>
            </tr>

          </tfoot>
        </table>
      </div>
    </div>
  )
}