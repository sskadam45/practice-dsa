"use client"
import React from 'react'
import PreferenceNav from './preference-nav/PreferenceNav'
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror'
import { basicDark, basicLight, copilot, eclipse, githubDark, githubLight, vscodeDark } from '@uiw/codemirror-themes-all'
import { javascript } from '@codemirror/lang-javascript'
import { java } from '@codemirror/lang-java'
import { cpp } from '@codemirror/lang-cpp'
type PlaygroundProps = {}

const Playground = (props: PlaygroundProps) => {
  return (
    <>
    <div className='flex flex-col bg-dark-layer-1 relative'>
        <PreferenceNav/>
        <Split className='h-[calc(100vh-94px)]'    direction='vertical' sizes={[60,40]} minSize={60}>
            <div className='w-full overflow-auto'>
                <CodeMirror value='const a=1'
                    theme={[vscodeDark,eclipse,basicDark,basicLight,githubDark,githubLight,copilot]}
                    extensions={[javascript(),java(),cpp()]}
                    style={{fontSize:16}}/>
            </div>
            <div> Test cases </div>
        <Playground/>
  </Split>
    </div>
       
    </>
  )
}

export default Playground