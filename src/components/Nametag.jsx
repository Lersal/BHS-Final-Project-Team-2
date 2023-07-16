import PropTypes from "prop-types";

Nametag.propTypes = {
  name: PropTypes.string.isRequired,
};

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
