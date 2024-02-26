export default function Boton({children, styles, onClick}) {
  return (
    <>
      <button className={styles} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
