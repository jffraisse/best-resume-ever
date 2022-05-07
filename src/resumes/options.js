import yaml from 'js-yaml';
import { PERSON_FR } from '../../resume/data_fr.yml';
import { PERSON_EN } from '../../resume/data_en.yml';
import {
    terms
} from '../terms';

const LANG_ENV = process.env.LANG;
// Called by templates to decrease redundancy
function getVueOptions (name) {
    let profil_info;
    
    if (LANG_ENV == 'fr') {
        profil_info = PERSON_FR;
    } else {
        profil_info = PERSON_EN;
    }

    
    const opt = {
        name: name,
        data () {
            return {
                person: yaml.load(profil_info),
                terms: terms,
            };
        },
        computed: {
            lang () {
                const defaultLang = this.terms.en;
                const useLang = this.terms[this.person.lang];

                // overwrite non-set fields with default lang
                Object.keys(defaultLang)
                    .filter(k => !useLang[k])
                    .forEach(k => {
                        console.log(k);
                        useLang[k] = defaultLang[k];
                    });

                return useLang;
            },

            contactLinks() {
                const links = {};

                if(this.person.contact.github) {
                    links.github = `https://github.com/${this.person.contact.github}`;
                }

                if(this.person.contact.codefights) {
                    links.codefights = `https://codefights.com/profile/${this.person.contact.codefights}`;
                }

                if(this.person.contact.medium) {
                    links.medium = `https://medium.com/@${this.person.contact.medium}`;
                }

                if(this.person.contact.email) {
                    links.email = `mailto:${this.person.contact.email}`;
                }

                if(this.person.contact.linkedin) {
                    links.linkedin = `https://linkedin.com/in/${this.person.contact.linkedin}`;
                }

                if(this.person.contact.phone) {
                    console.log(this.person.contact.phone);
                    links.phone = `tel:${this.person.contact.phone}`;
                }

                return links;
            },
        }
    };
    return opt;
}

export {
    getVueOptions
};
