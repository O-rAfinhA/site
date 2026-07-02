export const CATEGORIA_CORES: Record<string, string> = {
  'ISO 9001':  '#004BA8',
  'ISO 14001': '#0D7C4A',
  'PBQP-H':    '#B45A1C',
  'Gestão':    '#6366F1',
  'Auditoria': '#F59E0B',
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
