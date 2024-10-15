declare interface Menu {
  id: number
  foto: string
  preco?: number
  nome: string
  descricao: string
  porcao?: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Menu[]
}
