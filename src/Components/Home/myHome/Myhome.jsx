import React from 'react'
import { DailySummary } from './DailySummary'
import { Invite } from './Invite'
import { NewsFeed } from './NewsFeed'

export const Myhome = () => {
  return (
    <div>
        <DailySummary/>
        <NewsFeed/>
        <Invite/>
    </div>
  )
}
