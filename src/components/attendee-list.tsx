import {  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableData } from "./table/table-data";
import { TableRow } from "./table/table-row";
import { attendees } from "../data/attendees";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from "react";

export function AttendeeList() {

  const totalPages = Math.ceil(attendees.length)

  const [page, setPage] = useState(1)

  function goToNextPage() {
    
    setPage(page + 1)
  }

  function goToPreviousPage() {
    
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages / 10)
  }

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
            {attendees.slice(((page - 1) * 10),(page * 10)).map((attendees) => {
              return (
                <TableRow key={attendees.code}  >
                  <TableData> <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " /> </TableData>
                  
                  <TableData> {attendees.code} </TableData>

                  <TableData> 
                    <div className="flex flex-col" >
                      <p className="font-semibold text-white" >{attendees.name}</p>
                      <span>{attendees.email}</span>
                    </div> 
                  </TableData>

                  <TableData> { formatDistanceToNow(attendees.createdAt, {addSuffix: true, locale: ptBR})}</TableData>

                  <TableData> { formatDistanceToNow(attendees.checkedInAt, {addSuffix: true, locale: ptBR})} </TableData>
                
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
              <TableData colSpan={3} className="px-3 py-3 text-left"> Mostrando 10 de {attendees.length} items </TableData>

              <TableData colSpan={3} className="px-3 py-3 text-right"> 
                <div className="inline-flex gap-3 items-center " >
                  <span>Página {Math.ceil(page)} de {Math.ceil(totalPages / 10)}</span> 
                  
                  <div className="flex gap-1.5" >
                    <IconButton onClick={goToFirstPage} disabled={page === 1}> 
                      <ChevronsLeft className="size-4" /> 
                    </IconButton>

                    <IconButton onClick={goToPreviousPage} disabled={page === 1} > 
                      <ChevronLeft className="size-4" /> 
                    </IconButton>

                    <IconButton onClick={goToNextPage} disabled={page === totalPages} > 
                      <ChevronRight className="size-4" /> 
                    </IconButton>

                    <IconButton onClick={goToLastPage} disabled={page === totalPages}> 
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