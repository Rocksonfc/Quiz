import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#bce596', '#f7b801', '#ed827a']}
                colorsTime={[10, 3, 0]}>     
                {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
        </div >
    )
}