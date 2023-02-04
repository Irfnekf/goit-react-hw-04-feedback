import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
