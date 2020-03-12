import React, {useState} from 'react';

import AppBar from './core/AppBar';
import Group from './core/Group';
import Button from './form/Button';
import Loader from './core/Loader';
import Row from './grid/Row';
import Column from './grid/Column';
import Label from './core/Label';
import Table, {TableHead, TableFoot, TableCell, TableRow, TableBody} from './core/Table';
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

      <div className="table-example">
        <Table>
          <TableHead>
            <TableCell>Title 1</TableCell>
            <TableCell>Title 2</TableCell>
            <TableCell>Title 3</TableCell>
            <TableCell>Title 4</TableCell>
            <TableCell>Title 5</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Value 1</TableCell>
              <TableCell>Value 2</TableCell>
              <TableCell>Value 3</TableCell>
              <TableCell>Value 4</TableCell>
              <TableCell>Value 5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Value 1</TableCell>
              <TableCell>Value 2</TableCell>
              <TableCell>Value 3</TableCell>
              <TableCell>Value 4</TableCell>
              <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Value 1</TableCell>
              <TableCell>Value 2</TableCell>
              <TableCell>Value 3</TableCell>
              <TableCell>Value 4</TableCell>
              <TableCell>Value 5</TableCell>
            </TableRow>
          </TableBody>
          <TableFoot>
            <TableCell>Foot Value 1</TableCell>
            <TableCell>Foot Value 2</TableCell>
            <TableCell>Foot Value 3</TableCell>
            <TableCell>Foot Value 4</TableCell>
            <TableCell>Foot Value 5</TableCell>
          </TableFoot>
        </Table>
      </div>

      <h2>Panel</h2>
      <Panel>
        <Button>Test Button</Button>
        <TextInput value={button2value} onChange={setButton2Value}/>
        <Group>
          <Button type="contained">Grouped Button 1</Button>
          <Button type="contained">Grouped Button 2</Button>
        </Group>
      </Panel>

      <h2>Spinners</h2>
      <div style={{width: '100px'}}><Loader>UI</Loader></div>

      <h2>Inputs</h2>
      <h3>Text</h3>
      <TextInput value={button1value} onChange={setButton1Value}/>

      <h3>Text With Error</h3>
      <Panel style={{maxWidth: '400px'}}>
        <TextInput label="Wrong text" value={button1value} onChange={setButton1Value}
                   error="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </Panel>

      <h3>Text with label</h3>
      <TextInput label="Label" value={button2value} onChange={setButton2Value}/>

      <h3>Text with prefix</h3>
      <TextInput prefix=<Icon name="face" /> value={button2value} onChange={setButton2Value}/>

      <h3>Text with suffix</h3>
      <Group>
        <TextInput suffix="Suffix text" value={button2value} onChange={setButton2Value}/>
      </Group>

      <h3>Select</h3>
      <Group>
        <Select options={[{name: 'Option 1', value: 1}, {name: 'Option 2', value: 2}, {name: 'Option 3', value: 3}]}
                onChange={(selected) => console.log('Selected', selected)} />
        <Label>Select</Label>
      </Group>

      <h3>Select Multiple</h3>
      <Group>
        <Select multiple={true}
                options={[{name: 'Option 1', value: 1}, {name: 'Option 2', value: 2}, {name: 'Option 3', value: 3}]}
                onChange={(selected) => console.log('Selected', selected)} />
        <Label>Select Multiple</Label>
      </Group>

      <h3>Password</h3>
      <PasswordInput label="Password" value={password1value} onChange={setPassword1Value}/>

      <h3>Date Picker</h3>
      <Date onChange={(dateBegin, dateEnd) => console.log(dateBegin, dateEnd)} />
    </Column>
  </div>;
}

export default App;
