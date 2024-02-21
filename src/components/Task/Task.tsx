
type TaskInfo = {
  id: number;
  title: string;
  state: 'TASK_INBOX' | 'TASK_ARCHIVED';
}

type TaskProps = {
  task: TaskInfo;
  onArchiveTask?: (id: number) => void;
  onPinTask?: (id: number) => void;
}


const Task = ({ task, onArchiveTask, onPinTask }: TaskProps) => {
  const { id = 0, title = '김장', state = "TASK_IN_BOX" } = task;
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
        // onClick={() => onArchiveTask(id)}
        />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          // onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
}

export default Task;