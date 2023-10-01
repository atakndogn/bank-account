function Amount({ type, dispatch, isActive, amount }) {
  return (
    <>
      <input
        onChange={(e) =>
          dispatch({
            type: type === "deposit" ? "setDepositAmount" : "setWithdrawAmount",
            payload: Number(e.target.value),
          })
        }
        disabled={!isActive}
        value={amount}
      />

      <button onClick={() => dispatch({ type: type })} disabled={!isActive}>
        {type === "deposit" ? "Deposit" : "Withdraw"}
      </button>
    </>
  );
}

export default Amount;
