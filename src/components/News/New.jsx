import "./new.scss";

function New({ title, url, urlToImage, description }) {
  return (
    <div className="new">
      <img src={urlToImage} alt={title} />
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default New;
