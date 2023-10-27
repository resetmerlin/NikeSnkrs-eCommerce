type IPrpos = {
  size: string;
  color: string;
};

const SvgLeftArrowAlt = ({ size = '1rem', color = 'black' }: IPrpos) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{
      fill: color,
    }}
  >
    <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
  </svg>
);
export default SvgLeftArrowAlt;
