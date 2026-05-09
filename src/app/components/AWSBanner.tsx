import Image from "next/image";
import awsLogo from "../../imports/aws_2.png";

export function AWSBanner() {
  return (
    <section className="py-8 lg:py-10" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="rounded-2xl px-8 py-6 lg:py-7 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(0,75,168,0.08)",
          }}
        >
          {/* Left side - Logo */}
          <div className="flex items-center gap-4">
            <Image
              src={awsLogo}
              alt="AWS"
              width={140}
              height={72}
              style={{ height: "72px", width: "auto" }}
            />
            <div
              style={{
                width: "1px",
                height: "40px",
                backgroundColor: "rgba(0,0,0,0.08)",
              }}
            />
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0B1F4B",
                  lineHeight: 1.3,
                  marginBottom: "4px",
                }}
              >
                Infraestrutura Enterprise
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748B",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                Seus dados protegidos pela mesma estrutura usada por bancos e órgãos governamentais.
              </p>
            </div>
          </div>

          {/* Right side - Tags */}
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            {["AWS", "Criptografia AES-256", "SLA 99,9%", "Conformidade LGPD"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                style={{
                  backgroundColor: "rgba(0,75,168,0.05)",
                  border: "1px solid rgba(0,75,168,0.1)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#004BA8",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#004BA8", opacity: 0.6 }}
                />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
