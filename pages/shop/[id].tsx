import {useRouter} from 'next/router';

export default function Shop() {
  const router = useRouter();
  const {id: shopId} = router.query;

  return (
    <>
      <h1>
        viewing shop: {shopId}
      </h1>
    </>
  )
}
