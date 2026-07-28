import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1c2128",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "8px",
            background: "#1ba85c",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 96px 72px 120px",
            width: "100%",
          }}
        >
          {/* Top row: wordmark + pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {/* Logo mark */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  background: "#303841",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    color: "#f5f5f5",
                    fontSize: "20px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  ♥
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "14px",
                    height: "14px",
                    background: "#1ba85c",
                    borderTopRightRadius: "10px",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "34px",
                  color: "#eceef1",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "-0.01em",
                }}
              >
                VitalIQ
              </span>
            </div>

            {/* Pill badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(27,168,92,0.12)",
                border: "1px solid rgba(27,168,92,0.3)",
                borderRadius: "999px",
                padding: "8px 20px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#1ba85c",
                }}
              />
              <span
                style={{
                  fontSize: "15px",
                  color: "#86d3a6",
                  letterSpacing: "0.08em",
                }}
              >
                INDIA-FIRST · DPDP ALIGNED
              </span>
            </div>
          </div>

          {/* Headline + sub */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "80px",
                  color: "#eceef1",
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  lineHeight: 1.03,
                  letterSpacing: "-0.02em",
                }}
              >
                {"India's family"}
              </div>
              <div
                style={{
                  fontSize: "80px",
                  color: "#eceef1",
                  fontFamily: "Georgia, serif",
                  fontWeight: 400,
                  lineHeight: 1.03,
                  letterSpacing: "-0.02em",
                }}
              >
                {"health vault."}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div
                style={{
                  fontSize: "26px",
                  color: "rgba(236,238,241,0.58)",
                  lineHeight: 1.55,
                }}
              >
                {"One place for every member's records — parents, kids, grandparents."}
              </div>
              <div
                style={{
                  fontSize: "26px",
                  color: "rgba(236,238,241,0.58)",
                  lineHeight: 1.55,
                }}
              >
                {"AI insights on each person's data. A future-self projection that sticks."}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
