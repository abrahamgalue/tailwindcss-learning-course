export function Dropdown({ children }) {
  return <div className="flex flex-col items-center">{children}</div>;
}

export function DropdownButton({ children }) {
  return (
    <button className="rounded-lg bg-white px-3 py-1.5 text-sm/6 font-semibold shadow outline outline-zinc-950/5">
      {children}
    </button>
  );
}

export function DropdownMenu({ children }) {
  return (
    <div className="mt-1.5 grid w-40 grid-cols-[auto_1fr] rounded-xl bg-white p-1 shadow-lg outline outline-zinc-950/5">
      {children}
    </div>
  );
}

export function DropdownItem({ children, ...props }) {
  return (
    <a
      {...props}
      className="col-span-2 grid grid-cols-subgrid items-center rounded-lg px-3 py-1.5 text-sm/6 [--icon-color:var(--color-zinc-500)] hover:bg-blue-500 hover:text-white hover:[--icon-color:var(--color-white)]"
    >
      {children}
    </a>
  );
}

export function DropdownIcon({ children }) {
  return (
    <span className="mr-2 inline-flex size-4 shrink-0 text-(--icon-color)">
      {children}
    </span>
  );
}

export function DropdownLabel({ children }) {
  return <span className="col-start-2">{children}</span>;
}
