import propTypes from 'prop-types';
import { map } from 'lodash';
import Cookie from 'js-cookie';

const DropDownListLanguage = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openLanguageBlock: false,
    };
    this.languages = {
      'pt-BR': 'Português',
      es: 'Español',
      en: 'English',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.closeLanguageBlock = this.closeLanguageBlock.bind(this);
    this.changeLocale = this.changeLocale.bind(this);
  }
  setEventListeners() {
    const { openLanguageBlock } = this.state;
    if (openLanguageBlock) {
      document.addEventListener('keydown', this.handleKeyDown, false);
      document.addEventListener('click', this.handleClick, false);
    }
  }
  closeLanguageBlock() {
    const { openLanguageBlock } = this.state;
    if (openLanguageBlock) {
      document.removeEventListener('click', this.handleClick, false);
      document.removeEventListener('keydown', this.handleKeyDown, false);
      this.setState({
        openLanguageBlock: false,
      });
    }
  }
  handleClick(e) {
    if (this.dropDownList !== null && !this.dropDownList.contains(e.target)) {
      // the click was outside your component, so handle closing here
      this.closeLanguageBlock();
    }
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.closeLanguageBlock();
    }
  }
  toggleLanguageBlock() {
    this.setState({
      openLanguageBlock: !this.state.openLanguageBlock,
    }, this.setEventListeners);
  }
  changeLocale(ev, locale) {
    const { updateLocale } = this.props;
    ev.preventDefault();
    Cookie.set('funcao_de_mae_locale', locale);
    updateLocale(locale);
    document.location.reload();
  }
  render() {
    const { locale } = this.props;
    const { openLanguageBlock } = this.state;
    const language = this.languages[locale];

    return (
      <div
        aria-haspopup="true"
        aria-expanded={openLanguageBlock}
        className={`selectLanguage${openLanguageBlock ? ' active' : ''}`}
        ref={(node) => { this.dropDownList = node; }}
      >
        <button
          className={`vg-icon-arrow-bottom-invert vg-lang-${locale.toLowerCase()}`}
          onClick={() => this.toggleLanguageBlock()}
          type="button"
        >
          {language}
        </button>
        {openLanguageBlock &&
          <ul className="selectLanguage__list">
            <li>
              <a
                href="#"
                onClick={ev => ev.preventDefault()}
                className={`vg-lang-${locale.toLowerCase()} vg-icon-check-invert`}
              >
                {language}
              </a>
            </li>
            {
              map(Object.keys(this.languages), (localeInitials, index) => {
                if (localeInitials === locale) return false;
                return (<li key={index}>
                  <a
                    href="#"
                    onClick={ev => this.changeLocale(ev, localeInitials)}
                    className={`vg-lang-${localeInitials.toLowerCase()}`}
                  >
                    {this.languages[localeInitials]}
                  </a>
                </li>);
              })
            }
          </ul>
        }
      </div>
    );
  }
};

DropDownListLanguage.propTypes = {
  locale: propTypes.string.isRequired,
  updateLocale: propTypes.func.isRequired,
};


export default DropDownListLanguage;
