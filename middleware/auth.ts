import { Auth } from 'aws-amplify'

export default async ({ redirect }: { redirect: any }) => {
  let signedIn = false
  await Auth.currentUserInfo().then(data => (signedIn = Boolean(data)))

  if (!signedIn) {
    redirect('/signin')
  }
}
