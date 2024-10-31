import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          Feito por{" "}
          <Link
            href="https://www.linkedin.com/in/matheus-gabriel-sa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Matheus Sá
          </Link>
          . Acesse o codigo no{" "}
          <Link
            href="https://github.com/MatheusSaS/Automa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
