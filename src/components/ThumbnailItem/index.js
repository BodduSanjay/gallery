// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachOne, onClickChangeImg, isActiveItem} = props

  const {id, imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = eachOne

  const btnClick = () => {
    onClickChangeImg(id, imageUrl, imageAltText)
  }

  return (
    <li className="li-item" onClick={btnClick}>
      <button>
        {isActiveItem ? (
          <img src={imageUrl} alt={imageAltText} />
        ) : (
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        )}
      </button>
    </li>
  )
}
export default ThumbnailItem
