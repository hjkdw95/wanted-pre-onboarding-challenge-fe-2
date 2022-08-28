import { TodoItem } from './Todo.spec'

type ColumnType = 'contents' | 'completed' | 'category'

interface TodoType {
  create: (todo: TodoItem) => void
  read: (id?: number) => TodoItem[] | TodoItem
  update: (id: number, type: ColumnType, newValue: string | boolean) => void
  updateTag: (id: number, tagId: number, newValue: string) => void
  delete: (id?: number) => void
  deleteTag: (id: number, tagId?: number) => void
}

class TodoController implements TodoType {
  create(todo: TodoItem) {}

  read(id?: number): TodoItem[] | TodoItem {
    return { id: 1, contents: '', completed: false, category: '' }
  }

  update(id: number, type: ColumnType, newValue: string | boolean) {}

  updateTag(id: number, tagId: number, newValue: string) {}

  delete(id?: number) {}

  deleteTag(id: number, tagId?: number) {}
}

export default TodoController
