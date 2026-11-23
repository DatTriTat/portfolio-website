// The "DT" ligature: a T whose long arm shelters a D.
// Shares its coordinates with the extruded 3D version in MonogramScene.jsx.
export const MONOGRAM_PATH =
  "M0 0H102V14H88V101H74V14H0Z M0 23H26A39 39 0 0 1 26 101H0Z M14 37H26A25 25 0 0 1 26 87H14Z";

const Monogram = ({ className, title }) => (
  <svg
    className={className}
    viewBox="0 0 102 101"
    role={title ? "img" : undefined}
    aria-hidden={title ? undefined : true}
    aria-label={title}
  >
    <path fill="currentColor" fillRule="evenodd" d={MONOGRAM_PATH} />
  </svg>
);

export default Monogram;
