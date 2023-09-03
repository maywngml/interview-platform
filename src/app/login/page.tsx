'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { TextInput, PasswordInput, Button } from 'src/components/ui';

export default function Login() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const role = useSearchParams().get('role');
    const label = role === 'interviewee' ? '이메일' : '사번';

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsLoading(prevLoading => !prevLoading)
    }

    useEffect(() => {
        if (!role) {
            router.push('/')
        }
    }, [])

    return (
        <main className='py-[122px]'>
            <div className='bg-white rounded-[30px] px-[50px] pt-[90px] pb-[150px] max-w-[430px] mx-auto'>
                {/* TODO: 추후 회사로고로 변경 */}
                <div className='rounded-full bg-gray-600 w-[100px] h-[100px] mb-[60px] mx-auto' />
                <form onSubmit={handleSubmit}>
                    <p className='font-bold text-[18px] leading-normal mb-[10px]'>{label}</p>
                    <TextInput className='mb-[10px] w-[330px] h-[45px]' value={id} changeValue={setId} />
                    <p className='font-bold text-[18px] leading-normal mb-[10px]'>비밀번호</p>
                    <PasswordInput className='mb-[30px] w-[330px] h-[45px]' value={password} changeValue={setPassword} />
                    <Button className='bg-green text-white w-full h-[50px]' type='submit' isLoading={isLoading}>
                        <span className='text-[20px] font-bold'>로그인</span>
                    </Button>
                </form>
            </div>
        </main>
    )
}
