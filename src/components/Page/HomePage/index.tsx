import React from 'react'
import { Page } from '../TemplatePage'
import { PaginationTable, TableComposition } from '@/components/shared/Layout'
import { CurrencyList } from '@/types'

export default function HomePage({data}:{data:CurrencyList}) {
    
  return (
    <Page description="Price of the main cryptocurrencies by Market Capitalization.">
        <TableComposition data={data}/> 
    </Page>
  )
}
