import useRoute from '../../src/hooks/useRoute';

import Presenter from './Presenter';

export default function Container () {
    const pathname = useRoute();
    return(
        <>
            <Presenter label={pathname} semantic="warning" size="sm"/>
        </>
    )
}