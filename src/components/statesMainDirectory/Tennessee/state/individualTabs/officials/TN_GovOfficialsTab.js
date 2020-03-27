import React from 'react'
import { Tab, Grid, Image, Card } from 'semantic-ui-react'







const panes = [
  { menuItem: 'Executive', render: () => <Tab.Pane>Executive</Tab.Pane> },
  { menuItem: 'Legislative', render: () => <Tab.Pane>Legislative</Tab.Pane> },
  { menuItem: 'Judicial', render: () => <Tab.Pane>Judicial</Tab.Pane> },
]

const GovOfficialsTab = () => (
  <>
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  </>
)

export default GovOfficialsTab