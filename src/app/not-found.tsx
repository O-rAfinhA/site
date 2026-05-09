import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center">
        <h1 className="text-2xl font-semibold mb-3">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          O endereço acessado não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white"
          style={{ backgroundColor: "#004BA8", fontWeight: 600 }}
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}

