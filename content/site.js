import LANG from './languages';

export const PAGES = {
    ABOUT_ME: 'ABOUT_ME',
    PROJECTS: 'PROJECTS',
    FLATBOT: 'FLATBOT',
    TOWERS: 'TOWERS',
    ASECO: 'ASECO',
    AMBILIGHT: 'AMBILIGHT',
    QUIZDUELL_BOT: 'QUIZDUELL_BOT',
    WIFI_CLOCK: 'WIFI_CLOCK',
    PHOTOGRAPHY: 'PHOTOGRAPHY'
};

export default {
    [LANG.DE]: {
        [PAGES.ABOUT_ME]: {},
        [PAGES.PROJECTS]: {
            [PAGES.TOWERS]: {},
            [PAGES.ASECO]: {},
            [PAGES.WIFI_CLOCK]: {}
        }
    },
    [LANG.EN]: {
        [PAGES.ABOUT_ME]: {}
    },
    [LANG.FR]: {
        [PAGES.ABOUT_ME]: {}
    }
};