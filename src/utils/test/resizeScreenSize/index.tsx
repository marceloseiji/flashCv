import mediaQuery from 'css-mediaquery'

const createMatchMedia = (width: number) => {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }
  }
}

const resizeScreenSize = (width: number) => {
  window.matchMedia = createMatchMedia(width)
}

export { createMatchMedia, resizeScreenSize }
