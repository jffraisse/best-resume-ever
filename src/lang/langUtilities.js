import { PERSON_FR } from '../../resume/data_fr.yml';
import { PERSON_EN } from '../../resume/data_en.yml';

const LANG_ENV = process.env.LANG;
const languageList = {
    'FR': PERSON_FR,
    'EN': PERSON_EN
};

export class LangUtilities {


    translateProfilInfo() {
        for (const lang in languageList) {
            if (LANG_ENV == lang) {
                return languageList[lang];
            }
        }
    }

}