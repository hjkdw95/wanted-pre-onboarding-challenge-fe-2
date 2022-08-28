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

export interface TodoType {
  create: (todo: TodoItem) => void
  read: (id?: number) => TodoItem[] | TodoItem
  update: (id: number, type: ColumnType, newValue: string | boolean) => void
  updateTag: (id: number, tagId: number, newValue: string) => void
  delete: (id?: number) => void
  deleteTag: (id: number, tagId?: number) => void
}

type ColumnType = 'contents' | 'completed' | 'category'
