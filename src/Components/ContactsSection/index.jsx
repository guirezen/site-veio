import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Buttons, ButtonsConteiner, ContactConteiner, ConteinerSection, TitleConteiner } from "./styles";

export default function ContactsSection() {

    return (
        <ConteinerSection id="ancoraContatos">
            <div>
                <TitleConteiner>
                    <h1>CONTATO</h1>
                </TitleConteiner>
                <ButtonsConteiner>
                    <Buttons>
                        <div>
                            <EmailIcon className='icon-button' fontSize='large'/>
                        </div>
                        <ContactConteiner>
                            <span className='label-contact'>Nos envie um email</span>
                            <span className='information-contacts'>veio@hotmail.com</span>
                        </ContactConteiner>
                    </Buttons>
                    <Buttons>
                        <div>
                            <LocalPhoneIcon className='icon-button' fontSize='large'/>
                        </div>
                        <ContactConteiner>
                            <span className='label-contact'>Ligue para a gente</span>
                            <span className='information-contacts'>+55 79 999447319</span>
                        </ContactConteiner>
                    </Buttons>
                </ButtonsConteiner>
            </div>
        </ConteinerSection>
    )
}