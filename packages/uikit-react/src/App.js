import React, {useState} from 'react';

import './core/style/base.css';
import './grid/style/grid.scss';

import AppBar from './core/AppBar';
import Group from './core/Group';
import Button from './form/button/Button';
import Loader from './core/Loader';
import Row from './grid/Row';
import Column from './grid/Column';
import Label from './core/Label';
import Table, {TableHead, TableFoot} from './core/Table';
import Panel from './core/Panel';
import TextInput from './form/input/Text';
import PasswordInput from './form/input/Password';
import Select from './form/input/Select';
import Icon from './core/Icon';
import Tab from './core/Tab';
import Date from './form/input/Date';

import './App.scss';


function App() {

  const [activeTab, setActiveTab] = useState(null);

  const [button1value, setButton1Value] = useState(null);
  const [button2value, setButton2Value] = useState(null);
  const [password1value, setPassword1Value] = useState(null);

  return <div id="example" className="column">
    <AppBar inline={true}>
      <Tab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}>Test Tab 1</Tab>
      <Group className="tab-group">
        <Tab active={activeTab === 'tab2'} onClick={() => setActiveTab('tab2')}>Test Tab 2</Tab>
        <Tab disabled={true} active={activeTab === 'tab3'} onClick={() => setActiveTab('tab3')}>Disabled Test Tab 3</Tab>
        <Tab active={activeTab === 'tab4'} onClick={() => setActiveTab('tab4')}>Test Tab 4</Tab>
      </Group>
      <Group>
        <Button>Test Button 4</Button>
      </Group>
      <Group>
        <Button>Test Button 5</Button>
        <Button>Test Button 6</Button>
      </Group>
    </AppBar>

    <Column>
      <h2>Buttons</h2>
      <h3>Contained</h3>
      <Row className="example-button-group">
        <Button type="contained">Contained Button</Button>
        <Button type="contained" disabled>Contained Button Disabled</Button>
        <Button type="contained" className="button-contained-red">Contained Button</Button>
        <Button type="contained"><Icon name="account_circle" />Contained Button With Icon</Button>
      </Row>

      <h3>Outlined</h3>
      <Row className="example-button-group">
        <Button type="outlined">Outlined Button</Button>
        <Button type="outlined" disabled>Outlined Button Disabled</Button>
        <Button type="outlined" className="button-outlined-red">Outlined Button Red</Button>
        <Button type="outlined"><Icon name="account_circle" />Outlined Button</Button>
      </Row>

      <h3>Text</h3>
      <Row className="example-button-group">
        <Button type="text">Text Button</Button>
        <Button type="text" disabled>Text Button Disabled</Button>
      </Row>

      <h2>Labels</h2>

      <h3>Simple Label</h3>
      <Label>Simple Label</Label>

      <h3>Label Group</h3>

      <Group>
        <Label className="label__red">Group Label 1</Label>
        <Label className="label__blue">Group Label 2</Label>
        <Label>Group Label 3</Label>
        <Label>Group Label 4</Label>
      </Group>

      <h2>Table</h2>

      <Table>
        <TableHead>
          <Column>Title 1</Column>
          <Column>Title 2</Column>
          <Column>Title 3</Column>
        </TableHead>
        <Row>
          <Column>Value 1</Column>
          <Column>Value 2</Column>
          <Column>Value 3</Column>
        </Row>
        <Row>
          <Column>Value 1</Column>
          <Column>Value 2</Column>
          <Column>Value 3</Column>
        </Row>
        <TableFoot>
          <Column>Foot Value 1</Column>
          <Column>Foot Value 2</Column>
          <Column>Foot Value 3</Column>
        </TableFoot>
      </Table>

      <h2>Panel</h2>
      <Panel>
        <Button>Test Button</Button>
      </Panel>

      <h2>Spinners</h2>
      <div style={{width: '100px'}}><Loader>UI</Loader></div>

      <h2>Inputs</h2>
      <h3>Text</h3>
      <TextInput value={button1value} onChange={setButton1Value}/>

      <h3>Text with label</h3>
      <Group>
        <TextInput value={button2value} onChange={setButton2Value}/>
        <Label>Label</Label>
      </Group>

      <h3>Text with prefix</h3>
      <Group>
        <TextInput prefix=<Icon name="face" /> value={button2value} onChange={setButton2Value}/>
      </Group>

      <h3>Text with suffix</h3>
      <Group>
        <TextInput suffix="Suffix text" value={button2value} onChange={setButton2Value}/>
      </Group>

      <h3>Select</h3>
      <Group>
        <Select multiple={true}
                options={[
                  {'name': 'Option 1', 'value': 'Value 1'},
                  {'name': 'Option 2', 'value': 'Value 2'},
                  {'name': 'Option 3', 'value': 'Value 3'},
                  {'name': 'Option 4', 'value': 'Value 4'},
                  {'name': 'Option 5', 'value': 'Value 5'}
                ]}
                onChange={(values) => { console.log('Select values', values) }} />
        <Label>Label</Label>
      </Group>

      <h3>Password</h3>
      <Group>
        <PasswordInput value={password1value} onChange={setPassword1Value}/>
        <Label>Password</Label>
      </Group>

      <h3>Date Picker</h3>
      <Date onChange={(dateBegin, dateEnd) => console.log(dateBegin, dateEnd)} />
    </Column>
  </div>;
}

export default App;
