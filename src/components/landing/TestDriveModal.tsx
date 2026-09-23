import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function TestDriveModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "" });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setSubmitted(false);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // basic presence validation
    if (!form.name.trim() || !form.phone.replace(/\D/g, "") || !form.date.replace(/\D/g, "")) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setForm({ name: "", phone: "", date: "" });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-border bg-card p-8 overflow-hidden test-drive-form"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-border hover:border-foreground transition-colors flex items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="Fechar"
            >
              ✕
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative text-center py-8"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-primary">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold">Agendamento enviado!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Em breve um consultor entra em contato.</p>
              </motion.div>
            ) : (
              <div className="relative z-20">
                <span className="text-xs uppercase tracking-[0.3em] text-primary">Test Drive</span>
                <h2 className="mt-3 text-3xl font-black tracking-tight">Agende sua experiência.</h2>
                <p className="mt-2 text-sm text-muted-foreground">Preencha seus dados e escolha quando deseja conhecer o Civic G10.</p>

                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="form-group">
                    <Field
                      label="Nome completo"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      type="text"
                      required
                      inputProps={{ autoComplete: "name", placeholder: "Digite seu nome completo" }}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      label="WhatsApp"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: formatPhone(v) })}
                      type="tel"
                      placeholder="(11) 90000-0000"
                      required
                      inputProps={{ inputMode: "tel", autoComplete: "tel" }}
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      label="Data preferida"
                      value={form.date}
                      onChange={(v) => setForm({ ...form, date: formatDate(v) })}
                      type="text"
                      placeholder="dd/mm/aaaa"
                      required
                      inputProps={{ inputMode: "numeric", autoComplete: "off", maxLength: 10 }}
                    />
                  </div>

                  <button type="submit" className="confirm-btn">Confirmar agendamento</button>

                  <p className="mt-3 text-center text-xs text-muted-foreground">Seus dados serão utilizados para contato sobre o agendamento.</p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatDate(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

function Field({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
  inputProps,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder?: string;
  required?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        {...inputProps}
        className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
      />
    </label>
  );
}
