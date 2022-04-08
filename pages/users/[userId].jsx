// next provides hooks for using params

import {useRouter} from 'next/router'

function UserIdPage() {
    // open an instance of useRouter
    const router = useRouter()
    //pull the path param from the router object
    const {userId} = router.query
    return (
        <div>
            <h1>hello {userId}</h1>
        </div>
    )
}

export default UserIdPage;