import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as localeActionCreators } from '~/ducks/LanguageLocale';
import DropDownListLanguage from './components/dropDownListLanguage';

const FooterComponent = ({ locale, updateLocale }) => (
  <footer>
    <div className="container">
      <DropDownListLanguage
        locale={locale}
        updateLocale={updateLocale}
      />
    </div>
  </footer>
);

FooterComponent.propTypes = {
  locale: propTypes.string,
  updateLocale: propTypes.func.isRequired,
};

FooterComponent.defaultProps = {
  locale: 'pt-BR',
};

const mapStateToProps = state => ({
  locale: state.curriculumLanguageLocale,
});

const mapDispatchToProps = dispatch => ({
  updateLocale: bindActionCreators(localeActionCreators.updateLocale, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);
