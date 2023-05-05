export const TicTacToe = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Square />
    </div>
  );
};

export const Square = () => {
  return <button className="square">X</button>;
};
