interface Props {
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ handleAdd }: Props) {
  return (
    <>
      <form onSubmit={handleAdd}>
        <input placeholder="Title" name="title"></input>
        <input placeholder="Description" name="description"></input>
        <input placeholder="Priority Level" name="priority"></input>
        <button type="submit">Submit Task</button>
      </form>
    </>
  );
}
