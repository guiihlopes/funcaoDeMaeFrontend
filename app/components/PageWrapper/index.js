import { Component } from 'react';
import propTypes from 'prop-types';
import intl from 'react-intl-universal';
import withRedux from 'next-redux-wrapper';
import getStore from '~/redux-config';
import { actions as localeActionCreators } from '~/ducks/LanguageLocale';

export default (Page, mapSateToProps = null, mapDispatchToProps = null) => {
  const IntlPage = Page;

  class PageWithReduxAndIntl extends Component {
    static async getInitialProps(context) {
      let props;
      if (typeof Page.getInitialProps === 'function') {
        props = await Page.getInitialProps(context);
      }

      // Get the `locale` and `messages` from the request object on the server.
      // In the browser, use the same values that the server serialized.
      // NOTE: Because the use of `withRedux` initial properties are stores
      // whtin `__NEXT_DATA__.props.initialProps`.
      const { req } = context;
      const { locale, messages } = req || window.__NEXT_DATA__.props.initialProps;

      return { ...props, locale, messages };
    }

    constructor(props) {
      super(props);
      intl.init({
        currentLocale: props.locale,
        locales: {
          [props.locale]: props.messages,
        },
      });
    }

    componentDidMount() {
      const { locale, dispatch } = this.props;
      dispatch(localeActionCreators.updateLocale(locale));
    }

    render() {
      const { ...props } = this.props;
      return <IntlPage {...props} />;
    }
  }

  PageWithReduxAndIntl.propTypes = {
    locale: propTypes.string.isRequired,
    messages: propTypes.object.isRequired,
    dispatch: propTypes.func.isRequired,
  };

  return withRedux(getStore, mapSateToProps, mapDispatchToProps)(PageWithReduxAndIntl);
};

