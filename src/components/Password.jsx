function Password({ password, copied, handleCopy }) {
  return (
    <>
      {password && (
        <div className="header">
          <div className="password">{password}</div>
          <button className="copy" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </>
  );
}

export default Password;
