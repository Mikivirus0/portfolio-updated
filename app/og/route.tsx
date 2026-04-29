import { ImageResponse } from "next/og";
import { metaData } from "app/config";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || metaData.title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#F2EDE3",
          color: "#14110F",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingBottom: 12,
            borderBottom: "1.5px solid #14110F",
          }}
        >
          <span
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5C5246",
            }}
          >
            The MikiVirus Dossier
          </span>
          <span
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.18em",
              color: "#8C2A1F",
            }}
          >
            Vol. III · No. IV
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#14110F",
            fontSize: 70,
            fontWeight: 600,
            lineHeight: 1.05,
            maxWidth: "1000px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#5C5246",
            fontSize: 22,
            paddingTop: 14,
            borderTop: "1px solid #B8A98F",
          }}
        >
          <span style={{ display: "flex" }}>
            By Umair Sabir · alias{" "}
            <span style={{ color: "#8C2A1F", marginLeft: 8, fontStyle: "italic" }}>
              MikiVirus
            </span>
          </span>
          <span style={{ display: "flex", fontStyle: "italic", color: "#8C2A1F" }}>
            ❦
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
