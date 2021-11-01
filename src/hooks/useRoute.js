import {useRouter} from 'next/router';
const useRoute = () => {
    const router = useRouter();
    const pathname = router.pathname.slice(1); 
    return pathname;
}

export default useRoute;

