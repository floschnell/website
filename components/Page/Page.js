import React, { PropTypes } from 'react';
import PageStyles from './Page.styl';
import MainPage from '../../content/DE/ABOUT_ME.md';

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
        );
    }

    render() {
        return <div className={PageStyles.body}>
            <div className={`${PageStyles.loadingBanner} ${this.state.content === '' ? '' : PageStyles.hidden}`}>
                <div className={PageStyles.spinner}></div>
                <div className={PageStyles.message}>Wird geladen ...</div>
            </div>
            <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        </div>;
    }
}

export default Page;
