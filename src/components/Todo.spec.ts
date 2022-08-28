export interface TodoItem {
  id: number
  contents: string
  completed: boolean
  category: string
  tags?: Tag[]
}

export interface Tag {
  id: number
  contents: string
}
