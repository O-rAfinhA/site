import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Artigo {
  slug: string
  titulo: string
  categoria: string
  data: string
  tempoLeitura: number
  autor: string
  descricao: string
  destaque: boolean
  conteudo: string
}

const ARTIGOS_DIR = path.join(process.cwd(), 'content', 'artigos')

export const CATEGORIA_CORES: Record<string, string> = {
  'ISO 9001':  '#004BA8',
  'ISO 14001': '#0D7C4A',
  'PBQP-H':    '#B45A1C',
  'Gestão':    '#6366F1',
  'Auditoria': '#F59E0B',
}

export function getArtigos(): Artigo[] {
  if (!fs.existsSync(ARTIGOS_DIR)) return []

  return fs
    .readdirSync(ARTIGOS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(ARTIGOS_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        titulo:       String(data.titulo       ?? ''),
        categoria:    String(data.categoria     ?? ''),
        data:         String(data.data          ?? ''),
        tempoLeitura: Number(data.tempoLeitura) || 5,
        autor:        String(data.autor         ?? ''),
        descricao:    String(data.descricao     ?? ''),
        destaque:     Boolean(data.destaque),
        conteudo:     content.trim(),
      }
    })
    .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
}

export function getArtigoBySlug(slug: string): Artigo | null {
  const filePath = path.join(ARTIGOS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    titulo:       String(data.titulo       ?? ''),
    categoria:    String(data.categoria     ?? ''),
    data:         String(data.data          ?? ''),
    tempoLeitura: Number(data.tempoLeitura) || 5,
    autor:        String(data.autor         ?? ''),
    descricao:    String(data.descricao     ?? ''),
    destaque:     Boolean(data.destaque),
    conteudo:     content.trim(),
  }
}

export function formatarData(iso: string): string {
  try {
    return new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}
