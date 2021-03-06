import React from "react"
import { useRouter, BlitzPage, Link } from "blitz"
import { SignupForm } from "app/auth/components/SignupForm"
import AuthLayout from "../layouts/AuthLayout"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <SignupForm onSuccess={() => router.push("/")} />
      <p className="mt-6 text-gray-600">
        Already have an account? Log in{" "}
        <Link href="/login" passHref>
          <a className="text-purple-500 underline">here</a>
        </Link>
      </p>
    </div>
  )
}

SignupPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default SignupPage
