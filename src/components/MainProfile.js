import React from 'react';

import {
  Row,
  Tab,
  Col,
  Nav,
  Icon,
  Grid,
  Form,
  Table,
  Label,
  Panel,
  Button,
  NavItem,
  Checkbox,
  Progress,
  PanelBody,
  FormGroup,
  PanelLeft,
  isBrowser,
  InputGroup,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  PanelFooter,
  FormControl,
  PanelContainer,
  PanelTabContainer,
  Image,
  Well,
} from '@sketchpixy/rubix';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Row>
          <Col sm={4}>
            <PanelContainer>
              <Panel>
                <PanelBody style={{padding: 0}}>
                <Grid>
                  <Row>
                  <Col xs={12}>
                    <h3>Proceed by taking a Practice Test</h3>
                    <Image src="https://img.veritasprep.com/gmat-practice-test-splash.jpg" responsive />
                    <p>
                    <LoremIpsum query='1s' />
                    </p>
                  </Col>
                  </Row>
                </Grid>
                </PanelBody><PanelFooter className='bg-desaturateddarkblue75'>
                <Grid>
                  <Row>
                  <Col xs={12} className='fg-white'>
                     <Button bsStyle="blue" style={{margin: 30}} inverse outline>
                       Practice Test
                     </Button>
                  </Col>
                  </Row>
                </Grid>
                </PanelFooter>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4}>
            <PanelContainer>
              <Panel>
                <PanelBody style={{padding: 0}}>
                <Grid>
                  <Row>
                  <Col xs={12}>
                    <h3>Proceed by taking a Practice Test</h3>
                    <Image src="https://img.veritasprep.com/gmat-practice-test-splash.jpg" responsive />
                    <p>
                    <LoremIpsum query='1s' />
                    </p>
                  </Col>
                  </Row>
                </Grid>
                </PanelBody><PanelFooter className='bg-desaturateddarkblue75'>
                <Grid>
                  <Row>
                  <Col xs={12} className='fg-white'>
                     <Button bsStyle="blue" style={{margin: 30}} inverse outline>
                       Practice Test
                     </Button>
                  </Col>
                  </Row>
                </Grid>
                </PanelFooter>
              </Panel>
            </PanelContainer>
          </Col>
          <Col sm={4}>
            <PanelContainer>
              <Panel>
                <PanelBody style={{padding: 0}}>
                <Grid>
                  <Row>
                  <Col xs={12}>
                    <h3>Proceed by taking a Practice Test</h3>
                    <Image src="https://img.veritasprep.com/gmat-practice-test-splash.jpg" responsive />
                    <p>
                    <LoremIpsum query='1s' />
                    </p>
                  </Col>
                  </Row>
                </Grid>
                </PanelBody><PanelFooter className='bg-desaturateddarkblue75'>
                <Grid>
                  <Row>
                  <Col xs={12} className='fg-white'>
                     <Button bsStyle="blue" style={{margin: 30}} inverse outline>
                       Practice Test
                     </Button>
                  </Col>
                  </Row>
                </Grid>
                </PanelFooter>
              </Panel>
            </PanelContainer>
          </Col>

        </Row>
      </div>
    );
  }
}
