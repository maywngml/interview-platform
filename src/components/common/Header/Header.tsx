import s from './Header.module.css'

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.user}>
                <p className={s.company}>원티드랩</p>
                <p className={s.name}>박주영님</p>
            </div>
        </header>
    )
} 