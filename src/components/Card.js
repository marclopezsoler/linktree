import "./Card.scss";

function Card({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
    >
      <p>{name}</p>
    </a>
  );
}

export default Card;
