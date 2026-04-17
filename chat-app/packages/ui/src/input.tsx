"use client"

import { ChangeEvent } from "react"

interface InputProps {
    placeholder?: string,
    type: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, type, onChange }: InputProps) {
    return <input type={type} placeholder={placeholder} onChange={onChange} style={{
        padding: "10px",
        borderColor: "black",
        border: 1,
        borderRadius: 2
    }} />
}