import { TodoItem, TodoType } from './Todo.spec'

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
