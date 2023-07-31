import React from 'react'
import minus from "../assets/images/icon-minus.svg"
import plus from "../assets/images/icon-plus.svg"

function UpDownVote({ num }) {

    const [vote, setVote] = React.useState(num)
    const increment = _ => setVote(vote + 1)
    const decrement = _ => setVote(vote - 1)

  return (
    <>
    <div className="up-down-vote rounded-lg p-2 bg-lgray text-gblue flex flex-row gap-3 justify-between items-center lg:flex-col">
        <div>
            <button
                onClick={increment}
                className='grid items-center p-2'
            >
                <img className="lg:max-w-none" src={ plus } alt="plus" />
            </button>
        </div>
        <div className='text-mblue'>
            { vote }
        </div>
        <div>
            <button
                onClick={decrement}
                className='grid items-center p-2'
            >
                <img className="lg:max-w-none" src={ minus } alt="minus" />
            </button>
        </div>
    </div>
    </>
  )
}

export default UpDownVote