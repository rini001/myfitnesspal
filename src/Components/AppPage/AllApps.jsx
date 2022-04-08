import React from 'react'
import {FeaturedApps} from './FeaturedApps'
import { MarketPlace } from './MarketPlace'
import {Slides} from './Slides'
import {Sidebar} from './Sidebar'
export const AllApps = () => {
  return (
    <div>
        <Slides/>
        <Sidebar/>
        <FeaturedApps/>
        <MarketPlace/>
    </div>
  )
}