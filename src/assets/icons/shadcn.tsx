import React from 'react'

type IconProps = React.SVGProps<SVGSVGElement>

export default function ShadcnIcon(props: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 256 256"
      {...props}
    >
      <rect
        width="256"
        height="256"
        fill="none"
      ></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
    </svg>
  )
}
