import * as React from "react"

import { cn } from "@automa/utils"

const SimpleTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className={cn("w-full overflow-auto", className)}>
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
SimpleTable.displayName = "Table"

const SimpleTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
SimpleTableHeader.displayName = "TableHeader"

const SimpleTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
SimpleTableBody.displayName = "TableBody"

const SimpleTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-primary font-medium text-primary-foreground", className)}
    {...props}
  />
))
SimpleTableFooter.displayName = "TableFooter"

const SimpleTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & { disabled?: boolean }
>(({ className, disabled, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      disabled && "pointer-events-none text-muted-foreground opacity-80",
      className,
    )}
    {...props}
  />
))
SimpleTableRow.displayName = "TableRow"

const SimpleTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
))
SimpleTableHead.displayName = "TableHead"

const SimpleTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, id, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "align-middle [&:has([role=checkbox])]:pr-0",
      id === "menu"
        ? "sticky right-0 w-10 min-w-10 max-w-10 border-l border-gray-200 shadow-sm"
        : "p-4",
      className,
    )}
    {...props}
  />
))
SimpleTableCell.displayName = "TableCell"

const SimpleTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
SimpleTableCaption.displayName = "TableCaption"

export {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableBody,
  SimpleTableFooter,
  SimpleTableHead,
  SimpleTableRow,
  SimpleTableCell,
  SimpleTableCaption,
}
