// eslint-disable-next-line react/prop-types
function Nametag({ name }) {
  return (
    <div className="my-3">
      <p className="text-sm font-light">
        <span className="underline">UNIQLO</span> / {name}
      </p>
    </div>
  );
}

export default Nametag;
