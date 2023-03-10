import React, { useRef } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import ErrorBoundary from '../ErrorBoundary'

const WordContent = ({ wordDetails }) => {
  const { meanings, phonetics, sourceUrls, word } = wordDetails

  const audioRef = useRef(null)

  const handleClick = () => {
    audioRef.current.play()
  }

  return (
    <ErrorBoundary>
      {!phonetics ? (
        <div className='text-5xl font-bold'>Loading Data...</div>
      ) : (
        <div className='container py-5 px-5'>
          <div className='word-title flex justify-between '>
            <div className='flex flex-col justify-start'>
              <h1 className='text-5xl font-bold'>{word}</h1>
              <span className='flex justify-start text-violet-600 text-lg pt-1'>
                {phonetics[1]?.text}
              </span>
            </div>
            <div className='flex justify-center align-center my-2'>
              <audio ref={audioRef} src={phonetics[1]?.audio}></audio>
              <button
                className='bg-violet-300 p-3 rounded-full opacity-100'
                onClick={handleClick}
              >
                <BsPlayFill className='text-violet-600 opacity-1' size={40} />
              </button>
            </div>
          </div>
          <div className='noun flex flex-col my-5'>
            <h2 className='mb-2 text-2xl font-semibold '>
              {meanings[0]?.partOfSpeech}
            </h2>
            <h2 className='my-2 text-2xl font-semibold '>Meaning</h2>
            <ul className='w-3/4 ml-10 my-5 space-y-1  list-disc list-inside '>
              {meanings[0]?.definitions.map((item, index) => (
                <li key={index}>{item.definition}</li>
              ))}
            </ul>
            <div className='synonyms my-5'>
              <h2 className=' text-2xl'>
                Synonyms{' '}
                {meanings[0]?.synonyms.map((item, index) => (
                  <span key={index} className='text-violet-600 text-2xl'>
                    {item}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <div className='verb flex flex-col my-5'>
            <h2 className='mb-2 text-2xl font-semibold '>
              {meanings[1]?.partOfSpeech}
            </h2>
            <h2 className='my-2 text-2xl font-semibold '>Meaning</h2>
            <ul className='w-3/4 ml-10 my-5 space-y-1  list-disc list-inside '>
              {meanings[1]?.definitions.map((item, index) => (
                <li key={index}>{item.definition}</li>
              ))}
            </ul>
          </div>
          <div className='source-url flex align-center'>
            <h2 className='text-md font-semibold'>Source:</h2>
            <div className='cursor-pointer ml-5 flex justify-center align-center '>
              <a
                href={sourceUrls}
                target='_blank'
                rel='noreferrer noopener'
                className='underline'
              >
                {' '}
                {sourceUrls}
              </a>
            </div>
          </div>
        </div>
      )}
    </ErrorBoundary>
  )
}

export default WordContent
