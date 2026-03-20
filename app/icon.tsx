import { ImageResponse } from "next/og"

export const size = {
  width: 64,
  height: 64,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "transparent",
          borderRadius: "18px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: 64,
            width: 64,
          }}
        >
          <defs>
            <linearGradient id="wing" x1="8" y1="44" x2="80" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDE6F7" />
              <stop offset="1" stopColor="#F4F8FF" />
            </linearGradient>
          </defs>
          <circle cx="44" cy="44" r="38" fill="#0F172A" />
          <circle cx="44" cy="44" r="24" stroke="url(#wing)" strokeWidth="6" />
          <path d="M6 34H28L36 26H52L60 34H82" stroke="url(#wing)" strokeWidth="4" strokeLinecap="round" />
          <path d="M10 44H30" stroke="url(#wing)" strokeWidth="4" strokeLinecap="round" />
          <path d="M12 54H30" stroke="url(#wing)" strokeWidth="4" strokeLinecap="round" />
          <path d="M78 44H58" stroke="url(#wing)" strokeWidth="4" strokeLinecap="round" />
          <path d="M76 54H58" stroke="url(#wing)" strokeWidth="4" strokeLinecap="round" />
          <path d="M37.5 36L44 58L50.5 36" stroke="url(#wing)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  )
}
