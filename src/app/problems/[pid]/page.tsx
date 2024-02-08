import Topbar from '@/components/topbar/Topbar'
import Workspace from '@/components/workspace/Workspace'
import React from 'react'

type ProblemPageProps = {}

const ProblemPage = (props: ProblemPageProps) => {
  return (
    <div>
      <Topbar problemPage/>
      <Workspace/>
    </div>
  )
}

export default ProblemPage