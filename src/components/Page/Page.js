import React, {
    PropTypes
} from 'react';
import PageStyles from './Page.styl';
import MainPage from '../../content/DE/ABOUT_ME.md';
import Languages from '../../content/languages';
import TranslateContainer from "../TranslateContainer";

class Page extends React.Component {

    constructor() {
        super();
        this.state = {
            content: MainPage
        }
    }

    componentWillReceiveProps(nextProps) {
        this.state.content = '';
        System.import(`../../content/${nextProps.language}/${nextProps.currentPage}.md`).then(content =>
            this.setState({
                content
            })
        ).catch(err => {
            System.import(`../../content/${Languages.DE}/${nextProps.currentPage}.md`).then(content =>
                this.setState({
                    content: `<p class="${PageStyles.fallback}">${this.props.translate('LANGUAGE_NOT_AVAILABLE')}</p>${content}`
                })
            ).catch(err =>
                this.setState({
                    content: 'Content could not be found!',
                })
            );
        });
    }

    render() {
        return <div className={
                PageStyles.body
            }>
                <div className={
                    `${PageStyles.loadingBanner} ${this.state.content === '' ? '' : PageStyles.hidden}`
                }>
                    <div className={
                        PageStyles.spinner
                    }>
                    </div>
                    <div className={
                        PageStyles.message
                    }>
                    Wird geladen...
                    </div>
                </div>
                <div dangerouslySetInnerHTML = {
                    {
                        __html: this.state.content
                    }
                }>
                </div>
            </div>;
    }
}

export default TranslateContainer(Page);