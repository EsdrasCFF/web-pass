import {  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableData } from "./table/table-data";
import { TableRow } from "./table/table-row";
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, useEffect, useState } from "react";

interface IAttendees {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null
}

export function AttendeesList() {

  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())

    if(url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }

    return 1
  })

  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())

    if(url.searchParams.has('search')) {
      return url.searchParams.get('search') ?? ''
    }

    return ''
  })


  const [attendees, setAttendees] = useState<IAttendees[]>([])
  const [total, setTotal]= useState(1)

  const totalPages = Math.ceil(total / 10)

  function goToNextPage() {
    setCurrentPage(page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToLastPage() {
    setCurrentPage(Math.ceil(total / 10))
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())
    
    url.searchParams.set('page', String(page))

    window.history.pushState({}, "", url)

    setPage(page)
  }

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())
    
    url.searchParams.set('search', search)

    window.history.pushState({}, "", url)

    setSearch(search)
  }

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value)
    setPage(1)
  }

  useEffect(() => {
    
    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')

    url.searchParams.set('pageIndex', String(page-1))

    if(search.length > 0) {
      url.searchParams.set('query', search)
    }
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [page, search])

  return (
    <div className="flex flex-col gap-4" >
      <div className="flex gap-3 items-center" >
        <h1 className="font-bold text-2xl" > Partipantes </h1>

        <div className="flex gap-3 items-center max-w-72 rounded-lg text-sm py-1.5 px-3 border border-white/10" >
          <Search  className="size-4 text-emerald-500" />
          <input 
            placeholder="Buscar participante..." 
            className=" bg-transparent flex-1 border-none outline-none shadow-none focus:ring-0 " 
            onChange={(event) => handleSearchInputChange(event)}
            value={search.length > 0 ? search : ''}
          />
        
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
            {attendees.map((attendee) => {
              return (
                <TableRow key={attendee.id}  >
                  <TableData> <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 " /> </TableData>
                  
                  <TableData> {attendee.id} </TableData>

                  <TableData> 
                    <div className="flex flex-col" >
                      <p className="font-semibold text-white" >{attendee.name}</p>
                      <span>{attendee.email}</span>
                    </div> 
                  </TableData>

                  <TableData> { formatDistanceToNow(attendee.createdAt, {addSuffix: true, locale: ptBR})}</TableData>

                  <TableData> { attendee.checkedInAt === null ? 'Não fez checkIn' : formatDistanceToNow(String(attendee.checkedInAt), {addSuffix: true, locale: ptBR})} </TableData>
                
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
              <TableData colSpan={3} className="px-3 py-3 text-left"> Mostrando {attendees.length} de {total} items </TableData>

              <TableData colSpan={3} className="px-3 py-3 text-right"> 
                <div className="inline-flex gap-3 items-center " >
                  <span>Página {page} de {totalPages}</span> 
                  
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