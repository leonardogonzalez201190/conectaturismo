"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

export function DropdownMenuDemo({ title, items }: { title: string, items: { label: string, submenu?: { label: string }[] }[] }) {

  const [open, setOpen] = useState(false)

  return (<div
    className="pointer-events-auto! h-full"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}>
    <DropdownMenu open={open} onOpenChange={setOpen} modal={true}>
      <DropdownMenuTrigger asChild>
        <div className="font-light text-[15px] h-full flex items-center gap-0.5 cursor-pointer hover:text-cnt-link">
          <span>{title}</span>
          <ChevronDownIcon className="w-3.5 h-3.5 mt-0.5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" sideOffset={-1}>
        {items.map((item, index) => (
          item.submenu ? (
            <DropdownMenuSub key={index}>
              <DropdownMenuSubTrigger className="text-cnt-link">{item.label}</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {item.submenu.map((submenuItem, submenuIndex) => (
                  <DropdownMenuItem className="cursor-pointer text-cnt-link hover:text-cnt-link-hover!" key={submenuIndex} onClick={() => alert("asdl")}>
                    {submenuItem.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem key={index} className="cursor-pointer text-cnt-link hover:text-cnt-link-hover!" onClick={() => alert("asdl")}>
              {item.label}
            </DropdownMenuItem>
          )
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
  )
}
