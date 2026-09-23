import { createContext, useContext, useState, type ReactNode } from "react";

const Ctx = createContext<{ open: () => void; close: () => void; isOpen: boolean } | null>(null);

export function TestDriveProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Ctx.Provider value={{ isOpen, open: () => setOpen(true), close: () => setOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTestDrive() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTestDrive must be used inside TestDriveProvider");
  return ctx;
}