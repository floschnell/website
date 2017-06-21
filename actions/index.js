export const LANGUAGES = {
    ENGLISH: 'en',
    GERMAN: 'de'
};

export const PAGES = {
    ABOUT_ME: 'about_me',
    PROJECTS: 'projects'
};

export const ACTIONS = {
    GO_TO_PAGE: 'GO_TO_PAGE',
    SET_LANGUAGE: 'SET_LANGUAGE'
};

export const goToPage = page => ({
    type: ACTIONS.GO_TO_PAGE,
    page
});

export const setLanguage = language => ({
    type: ACTIONS.SET_LANGUAGE,
    language
});
