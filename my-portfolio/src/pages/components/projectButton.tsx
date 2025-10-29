import { useRef, useState, useEffect } from "react";

export default function EmailCard() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      panelRef.current?.focus();
    } else {
      btnRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (open && panelRef.current && !panelRef.current.parentElement?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [open]);

  return (
    <article
      className="max-w-[560px] w-[92vw] mx-auto bg-white rounded-2xl shadow-lg transition-all duration-300 data-[open=true]:-translate-y-0.5 data-[open=true]:shadow-2xl"
      data-open={open}
      aria-expanded={open}
    >
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left bg-transparent px-5 py-4"
        aria-controls="email-panel"
      >
        <span className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-gray-300" aria-hidden="true" />
          <span className="font-semibold text-gray-900">Mikael Ainalem</span>
        </span>
      </button>

      <section
        id="email-panel"
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.22,.61,.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div
            ref={panelRef}
            tabIndex={-1}
            className="outline-none"
          >
            <header className="flex items-center gap-3 px-5 pt-4 pb-2">
              <div className="w-16 h-16 rounded-full bg-gray-300" aria-hidden="true" />
              <h2 className="m-0 text-lg font-semibold text-gray-900">Mikael Ainalem</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="ml-auto w-9 h-9 rounded-xl grid place-items-center hover:bg-gray-100"
              >
                <div className="relative w-4 h-4">
                  <span className="absolute inset-0 top-1/2 -translate-y-1/2 block h-[2px] bg-gray-800 rotate-45" />
                  <span className="absolute inset-0 top-1/2 -translate-y-1/2 block h-[2px] bg-gray-800 -rotate-45" />
                </div>
              </button>
            </header>

            <div className="px-5 pb-5 grid gap-3 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-sky-500" aria-hidden="true" />
                <a className="text-blue-700 hover:underline" href="https://twitter.com/mikaelainalem">@mikaelainalem</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-black" aria-hidden="true" />
                <a className="text-blue-700 hover:underline" href="https://medium.com/@mikael_ainalem">@mikael_ainalem</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
