import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit, page }) {
  const [image, setImage] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(
    () => {
      if (url !== "") fetchImages(url);
    },
    { url }
  );

  console.log(image);

  if (loading) {
    return <div>Loading data. Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured | {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {image && image.length
        ? image.map((imageItem) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span>
        {image && image.length
          ? image.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  );
}
