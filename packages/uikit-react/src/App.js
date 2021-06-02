import React, { useState } from 'react';

import AppBar from './core/AppBar';
import Group from './core/Group';
import Button from './form/Button';
import Loader from './core/Loader';
import Row from './grid/Row';
import Column from './grid/Column';
import Label from './core/Label';
import Table, { TableHead, TableFoot, TableCell, TableRow, TableBody } from './core/Table';
import Panel from './core/Panel';
import TextInput from './form/input/Text';
import PasswordInput from './form/input/Password';
import Select from './form/input/Select';
import Icon from './core/Icon';
import Tab from './core/Tab';
import Date from './form/input/Date';
import Modal from './core/Modal';
import Form from './form/Form';

import './App.scss';
import Menu from './core/Menu';

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const [button1value, setButton1Value] = useState(null);
  const [button2value, setButton2Value] = useState(null);
  const [password1value, setPassword1Value] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const [formValue, setFormValue] = useState(null);
  const [menu, showMenu] = useState(false);

  const handleFormSubmit = (e) => {
    alert('Form submitted');
  }

  return <div id="example" className="column">
    <AppBar inline={true}>
      <Tab active={activeTab === 'tab1'} onClick={() => setActiveTab('tab1')}><Icon>info</Icon> Test Tab 1</Tab>
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
        <Button variant="contained">Contained Button</Button>
        <Button variant="contained" disabled>Contained Button Disabled</Button>
        <Button variant="contained" className="button-contained-red">Contained Button</Button>
        <Button variant="contained"><Icon>account_circle</Icon>Contained Button With Icon</Button>
      </Row>

      <h3>Outlined</h3>
      <Row className="example-button-group">
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="outlined" disabled>Outlined Button Disabled</Button>
        <Button variant="outlined" className="button-outlined-red">Outlined Button Red</Button>
        <Button variant="outlined"><Icon>account_circle</Icon>Outlined Button</Button>
      </Row>

      <h3>Text</h3>
      <Row className="example-button-group">
        <Button variant="text">Text Button</Button>
        <Button variant="text" disabled>Text Button Disabled</Button>
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
              <TableCell header={true}>Cell Header 1</TableCell>
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
        <Group wrappable={true}>
          <TextInput label="Input 1" value={button2value} onChange={(value) => console.log(value)} />
          <TextInput label="Input 2" value={button2value} onChange={(value) => console.log(value)} />
        </Group>
        <Group>
          <Button variant="contained">Grouped Button 1</Button>
          <Button variant="contained">Grouped Button 2</Button>
        </Group>
      </Panel>

      <h2>Spinners</h2>
      <div style={{width: '100px'}}><Loader>UI</Loader></div>

      <h2>Inputs</h2>
      <h3>Text</h3>
      <TextInput value={button1value} onChange={setButton1Value}
                 help="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      <TextInput readOnly={true} value="Read only text"
                 help="Read only input" />

      <h3>Text With Error</h3>
      <Panel style={{maxWidth: '400px'}}>
        <TextInput label="Wrong text" value={button1value} onChange={setButton1Value}
                   error="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
      </Panel>

      <h3>Text with label</h3>
      <TextInput label="Label" value={button2value} onChange={setButton2Value} />

      <h3>Text with prefix</h3>
      <TextInput prefix={<Icon>face</Icon>} value={button2value} onChange={setButton2Value}/>

      <h3>Text with suffix</h3>
      <Group>
        <TextInput suffix="Suffix text" value={button2value} onChange={setButton2Value}/>
      </Group>

      <h3>Menu</h3>
      <Group>
        <Button variant="outlined" onClick={() => showMenu(true)}>Open Menu</Button>
        <Menu visible={menu} onClickOutside={() => showMenu(false)}>
          {
            [
              {name: "Item 1", value: 1},
              {name: "Item 2", value: 2}
            ].map((item, index) => (
              <Menu.Item key={index} value={item.value}>{item.name}</Menu.Item>
            ))
          }
        </Menu>
      </Group>

      <h3>Select</h3>
      <Select
        style={{minWidth: "500px"}}
        label="Select"
        options={[
          {name: 'Option 1', value: 1},
          {name: 'Option 2', value: 2},
          {name: 'Option 3', value: 3},
          {name: 'Option 4', value: 4},
          {name: 'Option 5', value: 5},
          {name: 'Option 6', value: 6},
          {name: 'Option 7', value: 7},
          {name: 'Option 8', value: 8},
          {name: 'Option 9', value: 9},
          {name: 'Option 10', value: 10}
        ]}
        onChange={(selected) => console.log('Selected', selected)} />

      <h3>Select with prefix</h3>
      <Select
        label="Select with prefix"
        prefix={<Icon>list</Icon>}
        options={[
          {name: 'Option 1', value: 1},
          {name: 'Option 2', value: 2},
          {name: 'Option 3', value: 3},
          {name: 'Option 4', value: 4},
          {name: 'Option 5', value: 5},
          {name: 'Option 6', value: 6},
          {name: 'Option 7', value: 7},
          {name: 'Option 8', value: 8},
          {name: 'Option 9', value: 9},
          {name: 'Option 10', value: 10}
        ]}
        onChange={(selected) => console.log('Selected', selected)} />

      <h3>Read Only Select</h3>
      <Select
        prefix={<Icon>lock</Icon>}
        readOnly={true}
        label="Read only select"
        options={[
          {name: 'Option 1', value: 1},
          {name: 'Option 2', value: 2},
          {name: 'Option 3', value: 3},
          {name: 'Option 4', value: 4},
          {name: 'Option 5', value: 5},
          {name: 'Option 6', value: 6},
          {name: 'Option 7', value: 7},
          {name: 'Option 8', value: 8},
          {name: 'Option 9', value: 9},
          {name: 'Option 10', value: 10}
        ]}
        onChange={(selected) => console.log('Selected', selected)} />

      <h4>With Initial Value</h4>
      <Select
        prefix={<Icon>lock</Icon>}
        readOnly={true}
        label="Read only select"
        values={[4]}
        options={[
          {name: 'Option 1', value: 1},
          {name: 'Option 2', value: 2},
          {name: 'Option 3', value: 3},
          {name: 'Option 4', value: 4},
          {name: 'Option 5', value: 5},
          {name: 'Option 6', value: 6},
          {name: 'Option 7', value: 7},
          {name: 'Option 8', value: 8},
          {name: 'Option 9', value: 9},
          {name: 'Option 10', value: 10}
        ]}
        onChange={(selected) => console.log('Selected', selected)} />

      <h3>Select Multiple</h3>
      <Select
        label="Select multiple"
        multiple={true}
        options={[{name: 'Option 1', value: 1}, {name: 'Option 2', value: 2}, {name: 'Option 3', value: 3}]}
        onChange={(selected) => console.log('Selected', selected)} />

      <h3>Password</h3>
      <PasswordInput label="Password" value={password1value} onChange={setPassword1Value} />

      <h3>Date Picker</h3>
      <Date onChange={(dateBegin, dateEnd) => console.log(dateBegin, dateEnd)} />

      <h3>Form</h3>
      <Form onSubmit={handleFormSubmit}>
        <TextInput label="Input text" value={formValue} onChange={(value) => setFormValue(value)} />
        <Button type="submit" variant="submit">Submit</Button>
      </Form>

      <h3>Modal</h3>
      <Button onClick={() => setModalVisible(!modalVisible)}>Open modal</Button>
      <Modal visible={modalVisible} icon={<Icon>terrain</Icon>} title="Lorem ipsum" onClose={() => setModalVisible(false)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Modal>
    </Column>
  </div>;
}

export default App;
