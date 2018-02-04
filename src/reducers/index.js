import { PAGES, ACTIONS } from '../actions/index';
import SITE from '../content/site';
import LANGUAGES from '../content/languages';

const language = LANGUAGES.DE;
const currentPage = Object.keys(SITE[language])[0]

const initialState = {
    currentPage,
    language
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GO_TO_PAGE:
            return Object.assign({}, state, {
                currentPage: action.page
            });

        case ACTIONS.SET_LANGUAGE:
            if (SITE[action.language]) {
                return Object.assign({}, state, {
                    language: action.language
                });
            } else {
                return state;
            }

        default:
            return state
    }
}
