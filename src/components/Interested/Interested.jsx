import React, { useState } from 'react'
import css from './Interested.module.css'
import { useTheme } from '../../hooks'

export const Interested = () => {
  const { theme } = useTheme(); 
  const [ position, setPosition ] = useState({ 
    info1: { x: 190, y: 185 },
    info2: { x: 190, y: 185 }, 
    info3: { x: 190, y: 185 }, 
    info4: { x: 190, y: 185 }, 
    info5: { x: 190, y: 185 }, 
    info6: { x: 190, y: 185 } 
  });

  const { info1, info2, info3, info4, info5, info6 } = position;

  return (
    <div className={css.Interested}>
      <div className={theme === 'dark' ? css.CardSmallDark : css.CardSmallLight } 
      onClick={() => setPosition({ ...position, info1: { x: 0, y: 0 }}) } >
        <img src="src/images/Interested_Images/red.png" 
        id={theme === 'dark' ? css.AllImges : css.One } />
        <div className={css.CardInfo} style={{ left: info1.x, top: info1.y }} onMouseLeave={() => setPosition({ ...position, info1: { x: 190, y: 185 }})}>
          <h2><strong>Cyber Security</strong></h2>
          <p>La ciberseguridad es esencial para garantizar la protección de 
            nuestra información y mantener la confianza en la tecnología digital.</p>
        </div>
      </div>
      <div className={theme === 'dark' ? css.CardSmallDark : css.CardSmallLight } 
      onClick={() => setPosition({ ...position, info2: { x: 0, y: 0 }})} >
        <img src="src/images/Interested_Images/ai.png" 
        id={theme === 'dark' ? css.AllImges : css.Two } />
        <div className={css.CardInfo} style={{ left: info2.x, top: info2.y }} onMouseLeave={() => setPosition({ ...position, info2: { x: 190, y: 185 }})}>
          <h2><strong>AI</strong></h2>
          <p>La IA tiene el potencial de mejorar significativamente nuestra
           calidad de vida y resolver muchos problemas actuales y futuros.</p>

        </div>
      </div>
      <div className={theme === 'dark' ? css.CardSmallDark : css.CardSmallLight } 
      onClick={() => setPosition({ ...position, info3: { x: 0, y: 0 }})} >
        <img src="src/images/Interested_Images/user-experience.png" 
        id={theme === 'dark' ? css.AllImges : css.Three } />
        <div className={css.CardInfo} style={{ left: info3.x, top: info3.y }} onMouseLeave={() => setPosition({ ...position, info3: { x: 190, y: 185 }})}>
          <h2><strong>UX | UI</strong></h2>
          <p>Un buen diseño UX/UI puede mejorar la usabilidad, la eficiencia y la
            satisfacción del usuario, lo que a su vez puede aumentar el compromiso del usuario,
            la fidelidad y la retención del cliente.</p>
          
        </div>
      </div>
      <div className={theme === 'dark' ? css.CardSmallDark : css.CardSmallLight } 
      onClick={() => setPosition({ ...position, info4: { x: 0, y: 0 }})} >
        <img src="src/images/Interested_Images/Optimization.png" 
        id={theme === 'dark' ? css.AllImges : css.Four } />
        <div className={css.CardInfo} style={{ left: info4.x, top: info4.y }} onMouseLeave={() => setPosition({ ...position, info4: { x: 190, y: 185 }})}>
          <h2><strong>Maintenance</strong></h2>
          <p>El mantenimiento de código es fundamental para garantizar que el software se 
            mantenga seguro, funcional y actualizado.</p>
        
        </div>
      </div>
      <div className={theme === 'dark' ? css.CardSmallDark : css.CardSmallLight } 
      onClick={() => setPosition({ ...position, info5: { x: 0, y: 0 }})} >
        <img src="src/images/Interested_Images/experiencia.png" 
        id={theme === 'dark' ? css.AllImges : css.Five } />
        <div className={css.CardInfo} style={{ left: info5.x, top: info5.y }} onMouseLeave={() => setPosition({ ...position, info5: { x: 190, y: 185 }})}>
          <h2><strong>Certificates</strong></h2>
          <p>seguir certificándome y aprendiendo me ayuda a mantenerme 
            competitivo y actualizado en un mundo en constante cambio.</p>

        </div>
      </div>
      <div className={theme === 'dark' ? css.CardSmallDark : css.CardSmallLight } 
      onClick={() => setPosition({ ...position, info6: { x: 0, y: 0 }})} >
        <img src="src/images/Interested_Images/tecnologia.png" 
        id={theme === 'dark' ? css.AllImges : css.Six } />
        <div className={css.CardInfo} style={{ left: info6.x, top: info6.y }} onMouseLeave={() => setPosition({ ...position, info6: { x: 190, y: 185 }})}>
          <h2><strong>Cloud Service</strong></h2>
          <p>El servicio en la nube es importante porque puede mejorar 
            la eficiencia, reducir los costos y aumentar la seguridad y la 
            accesibilidad de los datos y aplicaciones.</p>

        </div>
      </div>
    </div>
  )
}
