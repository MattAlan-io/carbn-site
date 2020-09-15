
const Section = ({ children, style, id }) => (
  <section
    id={id}
    style={{
      width: '100%',
      ...style,
    }}
  >
    {children}
  </section>
);

export default Section;
