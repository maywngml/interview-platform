'use client'
import { useState } from 'react'
import Link from 'next/link'
import cn from 'clsx'
import { menu } from 'src/data/hr/menu'
import type { menuType } from 'src/types/utils/menu'
import s from './Sidebar.module.css'

export default function Sidebar() {
    const [selectedMenuId, setSelectedMenuId] = useState<string>('home');

    const handleClick = (id: string) => {
        setSelectedMenuId(id);
    }

    return (
        <div className={s.sidebar}>
            <div className={s.company}>
                <div className={s.logo} />
                <p className={s.name}>회사명</p>
            </div>
            <ul className={s.menuWrapper}>
                {
                    menu.map(({ id, href, name, Icon }: menuType) =>
                        <li key={`menu-${id}`}>
                            <Link className={cn(s.menu, selectedMenuId === id && s.selected)} href={href} onClick={() => handleClick(id)}>
                                <Icon className={s.icon} />
                                <p>{name}</p>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
} 