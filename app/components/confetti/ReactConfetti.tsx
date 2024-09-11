import Confetti from 'react-confetti'

const ReactConfetti = () => {
  return (
    <div className='z-50'>
      <Confetti
        width={window.screen.width}
        run={true}
        numberOfPieces={1000}
      />
    </div>
  )
}

export default ReactConfetti