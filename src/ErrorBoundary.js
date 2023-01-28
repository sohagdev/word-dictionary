import React, { useState } from 'react'

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState(null)

  const handleError = (error, info) => {
    setHasError(true)
    setError({ error, info })
  }

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>{error.error.toString()}</p>
        <pre>{error.info.componentStack}</pre>
      </div>
    )
  }

  return (
    <>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { onError: handleError })
      )}
    </>
  )
}

export default ErrorBoundary
