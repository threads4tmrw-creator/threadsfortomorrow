import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Threads For Tomorrow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const lotus = readFileSync(
    join(process.cwd(), "public/stickers/lotus.png")
  ).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F3",
        }}
      >
        <img
          src={`data:image/png;base64,${lotus}`}
          alt=""
          width={480}
          height={634}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
