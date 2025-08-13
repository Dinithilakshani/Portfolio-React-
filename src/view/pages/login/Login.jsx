import { LoginForm } from "@/components/login-form"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-800 mb-2">🌿 PlantParadise</h1>
                    <p className="text-green-600">Welcome back to your green sanctuary</p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}
