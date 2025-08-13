"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Mail, Lock, Eye, EyeOff } from "lucide-react"

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login attempt:", { email, password })
    }

    return (
        <Card className="w-full shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                        <Leaf className="h-8 w-8 text-green-600" />
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold text-green-800">Sign In</CardTitle>
                <CardDescription className="text-green-600">
                    Enter your credentials to access your plant collection
                </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-green-700 font-medium">
                            Email Address
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-green-700 font-medium">
                            Password
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 pr-10 border-green-200 focus:border-green-400 focus:ring-green-400"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-green-500 hover:text-green-700"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 text-green-700">
                            <input type="checkbox" className="rounded border-green-300 text-green-600 focus:ring-green-500" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-green-600 hover:text-green-800 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5">
                        Sign In to PlantParadise
                    </Button>

                    <div className="text-center text-sm text-green-600">
                        Don't have an account?{" "}
                        <a href="#" className="font-medium text-green-700 hover:text-green-800 hover:underline">
                            Create your garden
                        </a>
                    </div>
                </CardFooter>
            </form>
        </Card>
    )
}
