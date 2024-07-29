import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/loginPage/login');
    }, [router]);

    return null; // Tidak perlu menampilkan apa pun di halaman ini
};

export default HomePage;
