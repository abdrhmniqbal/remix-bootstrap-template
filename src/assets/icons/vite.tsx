import React from 'react'

type IconProps = React.HTMLAttributes<SVGElement>

export default function ViteIcon(props: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 256 257"
      {...props}
    >
      <defs>
        <linearGradient
          x1="-.828%"
          y1="7.652%"
          x2="57.636%"
          y2="78.411%"
          id="vite-1"
        >
          <stop
            stopColor="currentColor"
            offset="0%"
          ></stop>
          <stop
            stopColor="currentColor"
            offset="100%"
          ></stop>
        </linearGradient>
        <linearGradient
          x1="43.376%"
          y1="2.242%"
          x2="50.316%"
          y2="89.03%"
          id="vite-2"
        >
          <stop
            stopColor="#FFEA83"
            offset="0%"
          ></stop>
          <stop
            stopColor="#FFDD35"
            offset="8.333%"
          ></stop>
          <stop
            stopColor="#FFA800"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
        fill="url(#vite-1)"
      ></path>
      <path
        d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
        fill="url(#vite-2)"
      ></path>
    </svg>
  )
}
