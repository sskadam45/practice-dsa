"use client"
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
const inter = Inter({ subsets: ["latin"] });

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>
      <body className={inter.className}>{children}</body>
      </RecoilRoot>;
  }