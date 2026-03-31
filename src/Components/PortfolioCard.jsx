import { useState } from "react";
import "./PortfolioCard.css";

/**
 * ProjectCard
 *
 * Props:
 * ─────────────────────────────────────────────
 * category   string   e.g. "App Design"
 * title      string   e.g. "Food Delivery App"
 * desc       string   Short description
 * tags       string[] e.g. ["Figma", "UX"]
 * color      string   Card background color
 * textColor  string   Text color (default "#fff")
 * images     Image[]  See shape below
 * onClick    fn       Optional click handler
 *
 * Image shape:
 * { src, w, h, rotate, ty, tx, shape }
 *   shape: "phone" | "browser" | "circle"
 *   src is optional — shows placeholder if omitted
 * ─────────────────────────────────────────────
 */

function PlaceholderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="pc-placeholder-icon">
      <rect x="1" y="1" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <path d="M1 12l4-4 3 3 3-4 6 5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function ImageSlot({ img }) {
  const { w, h, rotate = 0, ty = 0, tx = 0, zIndex = 1, shape = "phone", src } = img;

  const slotStyle = {
    width: w,
    height: h,
    transform: `rotate(${rotate}deg) translateY(${ty}px) translateX(${tx}px)`,
    zIndex,
    borderRadius: shape === "circle" ? "50%" : shape === "browser" ? 8 : 12,
  };

  if (shape === "browser") {
    return (
      <div className="pc-img-slot" style={slotStyle}>
        <div className="pc-browser-bar">
          <span className="pc-browser-dot" />
          <span className="pc-browser-dot" />
          <span className="pc-browser-dot" />
        </div>
        <div className="pc-browser-body">
          {src ? <img src={src} alt="" /> : <PlaceholderIcon />}
        </div>
      </div>
    );
  }

  return (
    <div className="pc-img-slot" style={slotStyle}>
      {src ? <img src={src} alt="" /> : <PlaceholderIcon />}
    </div>
  );
}

export default function ProjectCard({
  category = "Category",
  title = "Project Title",
  desc = "A short description of the project.",
  tags = [],
  color = "#2A6B5C",
  textColor = "#ffffff",
  images = [],
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const tagBg = textColor === "#ffffff"
    ? "rgba(255,255,255,0.15)"
    : "rgba(0,0,0,0.12)";

  return (
    <div
      className="pc-card"
      style={{
        background: color,
        color: textColor,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="pc-deco-lg" />
      <div className="pc-deco-sm" />

      <div className="pc-text">
        <p className="pc-category">{category}</p>
        <h2 className="pc-title">{title}</h2>
        <p className="pc-desc">{desc}</p>
      </div>

      {images.length > 0 && (
        <div className="pc-images">
          {images.map((img, i) => <ImageSlot key={i} img={img} />)}
        </div>
      )}

      <div className="pc-footer">
        <div className="pc-tags">
          {tags.map(tag => (
            <span key={tag} className="pc-tag" style={{ background: tagBg, color: textColor }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="pc-arrow">→</div>
      </div>
    </div>
  );
}