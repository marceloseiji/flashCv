import { createMatchMedia, resizeScreenSize } from './'

describe('when call createMatchMedia with parameter min-width: 400px', () => {
  it('should return matches true', () => {
    const returnedFunction = createMatchMedia(400)

    const returnedObject = returnedFunction('(min-width: 400px)')

    const expectedObject = {
      matches: true,
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }

    expect(JSON.stringify(returnedObject)).toEqual(
      JSON.stringify(expectedObject)
    )
  })

  it('should return matches false', () => {
    const returnedFunction = createMatchMedia(400)

    const returnedObject = returnedFunction('(min-width: 500px)')

    const expectedObject = {
      matches: false,
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }

    expect(JSON.stringify(returnedObject)).toEqual(
      JSON.stringify(expectedObject)
    )

    expect(JSON.stringify(returnedObject.dispatchEvent())).toBe('true')
  })
})

describe('when call resizeScreenSize with parameter 400', () => {
  it('createMatchMedia should be called with matches true', () => {
    resizeScreenSize(400)

    const expectedObject = {
      matches: true,
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    }

    expect(JSON.stringify(window.matchMedia('(min-width: 400px)'))).toEqual(
      JSON.stringify(expectedObject)
    )
  })
})
