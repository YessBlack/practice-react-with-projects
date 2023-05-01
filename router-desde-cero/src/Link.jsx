const NAVIGATION_EVENT = 'pushstate'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigatenEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigatenEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (
    <a
      onClick={handleClick}
      href={to}
      target={target}
      {...props}
    />
  )
}
