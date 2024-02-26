import './PuzzleWon.css'
import finalPicture from './anatomy_pictures/full_system.jpg'

export const PuzzleWon = () => {

  return (
    <div className='WinPopup'>
      <div className='WinMsg'> Congratulations! You completed the puzzle </div>
      <img className="WinPicture" src={finalPicture} alt=""></img>
    </div>

  )
}