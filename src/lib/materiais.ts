import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Material {
  slug: string
  tipo: 'Template' | 'Guia' | 'E-book' | 'Checklist'
  titulo: string
  descricao: string
  formato: string
  tamanho: string
  downloads: number
  urlDownload: string
  categoria: string
  ativo: boolean
}

const MATERIAIS_DIR = path.join(process.cwd(), 'content', 'materiais')

export const TIPO_ICONE: Record<string, string> = {
  'Template':  'CheckSquare',
  'Guia':      'BookOpen',
  'E-book':    'Award',
  'Checklist': 'FileText',
}

export function getMateriais(): Material[] {
  if (!fs.existsSync(MATERIAIS_DIR)) return []

  return fs
    .readdirSync(MATERIAIS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(MATERIAIS_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        tipo:        (data.tipo        ?? 'Template') as Material['tipo'],
        titulo:      String(data.titulo      ?? ''),
        descricao:   String(data.descricao   ?? ''),
        formato:     String(data.formato     ?? ''),
        tamanho:     String(data.tamanho     ?? ''),
        downloads:   Number(data.downloads)  || 0,
        urlDownload: String(data.urlDownload ?? '#'),
        categoria:   String(data.categoria   ?? ''),
        ativo:       data.ativo !== false,
      }
    })
    .filter((m) => m.ativo)
}
