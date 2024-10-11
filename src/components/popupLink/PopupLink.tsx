// styles
import './popupLink.scss'

// types
import { ReactElement, MouseEvent } from 'react'
export interface IPopupLinkProps {
  url: string
  text: string
  width?: number
  height?: number
}

export default function PopupLink({
  url,
  text,
  width = 1280,
  height = 1024,
}: IPopupLinkProps): ReactElement {
  const openPopup = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const options = `width=${width},height=${height},left=${(window.innerWidth - width) / 2},top=${(window.innerHeight - height) / 2}`
    window.open(url, '_blank', options)
  }

  return (
    <a
      id={'popupLink'}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openPopup}
    >
      {text}
    </a>
  )
}
