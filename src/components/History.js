import React from 'react';
import './History.css';

export default function History(){
  return   <div className="History">
              <div className="About">'HINGLISH' helps you learn Hindi. Hindi as of now,is the third highest spoken language in the world after Mandarin and English.
              </div>
              <div className="languageFamily">
                <span>LANGUAGE FAMILY</span>
                    <ul>                       
                      <li>Indo-Iranian</li>
                      <li>Indo-Aryan</li>
                      <li>Central Zone</li>
                      <li>Western Hindi</li>
                      <li>Hindustani</li>
                      <li>Khariboli</li>
                      <li>Hindi</li>
                    </ul>
              </div>
              <div  className="earlyForms">
                <span>EARLY FORMS</span>
                    <ul>                       
                      <li>Vedic Sanskrit</li>
                      <li>Classical Sanskrit</li>
                      <li>Sauraseni Prakrit</li>
                      <li>Sauraseni Arabhramsa</li>                    
                      <li>Old Hindi</li>
                      <li>Modern Hindi</li>
                    </ul>
              </div>
          </div>;
}
