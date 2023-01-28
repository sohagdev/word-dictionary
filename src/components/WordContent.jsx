import React from 'react'
import { BsPlayFill } from 'react-icons/bs'
import ErrorBoundary from '../ErrorBoundary'

const WordContent = ({ wordDetails }) => {
  const { meanings, phonetics, sourceUrls, word } = wordDetails

  return (
    <ErrorBoundary>
      {!phonetics ? (
        <div>'Loading...'</div>
      ) : (
        <div className='container py-5 px-5 dark:text-slate-300 text-black'>
          <div className='word-title flex justify-between '>
            <div className='flex flex-col justify-start'>
              <h1 className='text-5xl font-bold'>{word}</h1>
              <span className='flex justify-start text-violet-600 text-lg pt-1'>
                {phonetics[1]?.text}
              </span>
            </div>
            <div className='flex justify-center align-center my-2'>
              <button className='bg-violet-300 p-3 rounded-full opacity-100'>
                <BsPlayFill className='text-violet-600 opacity-1' size={40} />
              </button>
            </div>
          </div>
          <div className='noun flex my-5'>
            <h2 className='mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>
              {meanings[0]?.partOfSpeech}
            </h2>
            <ul className='w-3/4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              {meanings[0]?.definitions.map((item, index) => (
                <li key={index}>{item.definition}</li>
              ))}
            </ul>
          </div>
          <div className='verb flex my-5'>
            <h2 className='mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>
              {meanings[1]?.partOfSpeech}
            </h2>
            <ul className='w-3/4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
              {meanings[1]?.definitions.map((item, index) => (
                <li key={index}>{item.definition}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </ErrorBoundary>
  )
}

export default WordContent
