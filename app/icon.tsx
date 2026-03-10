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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          borderRadius: "18px",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
            borderRadius: "18px",
            color: "#ffffff",
            display: "flex",
            fontFamily: "Arial",
            fontSize: 32,
            fontWeight: 800,
            height: 44,
            justifyContent: "center",
            width: 44,
          }}
        >
          V
        </div>
      </div>
    ),
    size,
  )
}
