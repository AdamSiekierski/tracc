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
        <Link href="/login">
          <a className="text-green-500 underline">here</a>
        </Link>
      </p>
    </div>
  )
}

SignupPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default SignupPage
