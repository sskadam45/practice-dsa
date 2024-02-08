"use client"
import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './playground/Playground';

type WorkspaceProps = {}

const Workspace = (props: WorkspaceProps) => {
  return (
    <Split
      className="split"
      minSize={0}
    >
        <ProblemDescription/>
        <Playground/>
  </Split>
  )
}

export default Workspace