import React from "react"
import { useRouter, BlitzPage, Link } from "blitz"
import { LoginForm } from "app/auth/components/LoginForm"
import AuthLayout from "../layouts/AuthLayout"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <>
      <LoginForm onSuccess={() => router.push("/")} />
      <p className="mt-6 text-gray-600">
        Don't have an account? Sign up{" "}
        <Link href="/signup" passHref>
          <a className="text-purple-500 underline">here</a>
        </Link>
      </p>
    </>
  )
}

LoginPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default LoginPage
