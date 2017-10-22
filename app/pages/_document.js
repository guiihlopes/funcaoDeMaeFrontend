import Document, { Head, Main, NextScript } from 'next/document';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { localeDataScript } } = context;
    const { req } = context;
    const { locale } = req || window.__NEXT_DATA__.props.initialProps;
    return {
      ...props,
      locale,
      localeDataScript,
    };
  }

  render() {
    return (
      <html lang={this.props.locale}>
        <body>
          <Head />
          <Main />
          <script
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
