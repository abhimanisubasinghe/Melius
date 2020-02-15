import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

const tableTypes = ['hover'];

const POTablePage = () => {
  return (
    <Page
      title="Purchase Orders"
      breadcrumbs={[{ name: 'purchase orders', active: true }]}
      className="TablePage"
    >
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{tableType || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Order Id</th>
                            <th>Supplier</th>
                            <th>Purchase Requisition Id</th>
                            <th>Deliver To</th>
                            <th>Issued Date</th>
                            <th>Est. Delivery Date</th>
                            <th>Total</th>
                            <th>Delivery Terms</th>
                            <th>Payment Terms</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}

     
     
    </Page>
  );
};

export default POTablePage;
