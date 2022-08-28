/**
 * @author 김현재 <hjkdw9506@gmail.com>
 * */

/**
 * This is a description of the MyClass constructor function.
 * @class
 * @classdesc TodoList 조회 및 각종 CRUD를 수행하는 클래스
 */

class TodoController {
  /**
   * todo 매개변수를 받아 새로운 할 일을 생성한다
   * @param {object} todo -  {contents: string, completed : boolean, category: string , tags(optional): string | string[]}를 담아 전달한다
   * @return {void}
   * @example const todo = {
   *  contents: '장보기',
   *  completed: false,
   *  category: '일상',
   *  tags(optional): '중요'
   * }
   *
   * TodoController.create(todo) => void
   */
  create(todo) {}

  /**
   * 등록된 할일을 모두 조회한다
   * @return {Array | object} [{id: number, contents: string, completed: boolean, category: string, tags(optional): string | string[]}]
   * @example  return [{
   *  id: 1,
   *  contents: '장보기',
   *  completed: false,
   *  category: '일상',
   *  tags: '중요'
   * }]
   */
  readAll() {}

  /**
   * 특정 id의 할 일 1건을 조회한다
   * @param {number} id - 조회할 일의 id를 기재한다
   * @return {obejct} {id: number, contents: string, completed: boolean, category: string, tags(optional): string | string[]}
   * @example  TodoController.read(1) = [{
   *  id: 1,
   *  contents: '장보기',
   *  completed: false,
   *  category: '일상',
   *  tags: '중요'
   * }, {
   * id: 2,
   * contents: "운동하기",
   * completed: false},
   * category: "운동",
   * }]
   */
  read(id) {}

  /**
   * 특정 id의 내용, 상태, 카테고리를 수정한다
   * @param {number} id - 수정할 일의 id를 기재한다
   * @param {string} type - contents, completed, category 중 1개를 기재한다
   * @param {string | boolean} newValue - 각 type에 적절한 value를 기재해준다. completed의 경우 boolean을 기재한다
   * @return {void}
   * @example TodoController.update(1, "contents", "케이크 사기")
   * TodoController.update(2, "completed", true)
   */
  update(id, type, newValue) {}

  /**
   * 특정 id의 태그 내역을 수정한다
   * @param {number} id - 수정할 일의 id를 기재한다
   * @param {number} tagId - 수정하고자 하는 tagId를 기재한다
   * @param {string} newValue - 수정하고자 하는 내용을 기재한다
   * @return {void}
   * @example TodoController.update(1, 1, "강아지관련")
   */
  updateTag(id, tagId, newValue) {}

  /**
   * 특정 id의 할 일을 삭제한다
   * @param {number} id - 삭제하고자 하는 id를 기재한다
   * @return {void}
   * @example TodoController.delete(1)
   */
  delete(id) {}

  /**
   * 특정 id의 특정 태그를 삭제한다.
   * @param {number} id - 삭제하고자 하는 id를 기재한다
   * @param {number} tagId (optional) - 삭제하고자 하는 태그id를 기재한다. 미기재 시 모든 태그를 삭제한다
   * @return {void}
   * @example TodoController.delete(1, 1)
   */
  deleteTag(id, tagId) {}
}

export default TodoController
