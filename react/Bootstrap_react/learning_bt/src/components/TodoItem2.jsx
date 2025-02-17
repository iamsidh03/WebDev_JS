function TodoItem2() {
    let todoName='chocolates';
    let todoDate='24/02/2025';
  return (
    <div class="container">
        <div class="row kg-row">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            delete
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default TodoItem2;
