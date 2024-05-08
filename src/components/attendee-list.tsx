import {  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableData } from "./table/table-data";
import { TableRow } from "./table/table-row";

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

      <Table>
          <thead className="text-sm font-semibold border-b border-white/10" >
            <tr>
              <TableHeader style={{width: 38}} >
                <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " />
              </TableHeader>
              
              <TableHeader >Código</TableHeader>
              
              <TableHeader >Participante</TableHeader>
              
              <TableHeader >Data da incrição</TableHeader>
              
              <TableHeader >Data do check-in</TableHeader>

              <TableHeader style={{width: 64}} ></TableHeader>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-200 border-b border-white/10" >
            {Array.from({length: 10}).map((_, i) => {
              return (
                <TableRow key={String(i+'a')}  >
                  <TableData> <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " /> </TableData>
                  
                  <TableData> 15456 </TableData>

                  <TableData> 
                    <div className="flex flex-col" >
                      <p className="font-semibold" >Esdras Castro Ferreiras</p>
                      <span>esdras.cff@gmail.com</span>
                    </div> 
                  </TableData>

                  <TableData> 7 dias atrás </TableData>

                  <TableData> 8 dias atrás </TableData>
                
                  <TableData> 
                    <IconButton transparent > 
                      <MoreHorizontal className="size-4" /> 
                    </IconButton> 
                  </TableData>
                </TableRow>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <TableData colSpan={3} className="px-3 py-3 text-left"> Mostrando 10 de 228 items </TableData>

              <TableData colSpan={3} className="px-3 py-3 text-right"> 
                <div className="inline-flex gap-3 items-center " >
                  <span>Página 1 de 23</span> 
                  
                  <div className="flex gap-1.5" >
                    <IconButton > 
                      <ChevronsLeft className="size-4" /> 
                    </IconButton>

                    <IconButton > 
                      <ChevronLeft className="size-4" /> 
                    </IconButton>

                    <IconButton > 
                      <ChevronRight className="size-4" /> 
                    </IconButton>

                    <IconButton > 
                      <ChevronsRight className="size-4" /> 
                    </IconButton>
                  </div>
                </div>
              </TableData>
            </tr>

          </tfoot>
      </Table>
    </div>
  )
}