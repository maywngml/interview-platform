import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PersonIcon from '@mui/icons-material/Person';
import type { menuType } from 'src/types/utils/menu'

export const menu: menuType[] = [
    {
        id: 'home',
        href: '/',
        name: '전체 면접 일정',
        Icon: EventNoteIcon
    }, {
        id: 'recruitment',
        href: '/recruitment',
        name: '모집 일정 관리',
        Icon: AssignmentIndIcon
    }, {
        id: 'interviewer',
        href: '/interviewer',
        name: '면접관 관리',
        Icon: PersonIcon
    }
]