export default function Loading() {
  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6"
      style={{ backgroundColor: "#F8FAFC" }}
      role="status"
      aria-live="polite"
      aria-label="Carregando cadastro"
    >
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin" />
    </div>
  );
}

