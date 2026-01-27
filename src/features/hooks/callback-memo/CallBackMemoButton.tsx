interface Props {
  incrementCount: () => void;
}

function CallBackMemoButton(props: Props) {
  const { incrementCount } = props;

  console.log("Child Component");

  return (
    <>
      <button onClick={() => incrementCount()}> Count </button>
    </>
  );
}

export default CallBackMemoButton;
