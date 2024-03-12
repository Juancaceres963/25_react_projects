import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

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

  function handlePrevious() {
    setCurrentSlider(
      currentSlider === 0 ? image.length - 1 : currentSlider - 1
    );
  }

  function handleNext() {
    setCurrentSlider(
      currentSlider === image.length - 1 ? 0 : currentSlider + 1
    );
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
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlider === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlider === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={()=> setCurrentSlider(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
