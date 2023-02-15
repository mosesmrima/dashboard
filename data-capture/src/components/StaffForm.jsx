import {Form, Row, DatePicker, Col, Input, Upload, Checkbox, Button} from 'antd'
import {CloseOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';
import "./staffForm.css"
const {Item} = Form

export default function StaffForm() {

    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 12}, md: { span: 0}, lg: { span: 10} },
        wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 24 }, lg: { span: 16 } },
        row: { gutter: [4, 0] },
        col: { span: { xs: 24, sm: 24, md: 8, lg: 6} }
    }
    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div

            >
                Upload
            </div>
        </div>
    );
    return (
       <Form>
           <Row>
               <Col offset={21}>
                   <Item>
                       <Upload
                           name="avatar"
                           listType="picture-circle"
                           showUploadList={false}
                           style={{width: 0}}
                       >
                           {uploadButton}
                       </Upload>
                   </Item>
               </Col>
           </Row>
           <Row gutter={layout.row.gutter}>

               <Col {...layout.col.span}>
                   <Item label={"Surname"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"Surname"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"First Name"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"first name"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Other name"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"other names"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Payroll No."}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"payroll no"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"ID Number"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"ID Number"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"DOB"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <DatePicker style={{width: "100%"}}/>
                   </Item>
               </Col>
               <Col offset={0} {...layout.col.span}>
                   <Checkbox>Person with Disability?</Checkbox>
               </Col>
           </Row>
           <h4>Appointments</h4>
           <Row gutter={layout.row.gutter}>
               <Col {...layout.col.span}>
                   <Item label={"1st Appointment"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <DatePicker style={{width: "100%"}}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Designation"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"designation"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Current"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <DatePicker style={{width: "100%"}}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Designation"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"designation"}/>
                   </Item>
               </Col>
           </Row>
           <h4>Contact Info</h4>
           <Row>
               <Col {...layout.col.span}>
                   <Item label={"Postal Add."}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"POBox"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Code"}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"code"}/>
                   </Item>
               </Col>
               <Col {...layout.col.span}>
                   <Item label={"Postal Add."}  colon={false} wrapperCol={layout.wrapperCol} labelCol={layout.labelCol} style={{ display: "flex", flexDirection: "column" }}>
                       <Input  placeholder={"POBox"}/>
                   </Item>
               </Col>
           </Row>
           <>
               <h4>Attachments</h4>
               <Form.List name={"skills"}>
                   {(fields, {add, remove}) => {
                       return (
                           <>

                                   {fields.map((field, index) => {
                                       return (
                                           <div key={field.key}>
                                               <Row>
                                               <Col span={12} offset={6}>
                                                   <Item
                                                       name={field.name}
                                                       label={`Attachment - ${index + 1}`}
                                                   >
                                                       <Upload>
                                                           <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                       </Upload>
                                                   </Item>
                                               </Col>
                                                   <Col>
                                                       <CloseOutlined onClick={()=>remove(field.name)} style={{marginLeft: 4, color: "red", cursor: "pointer"}} />
                                                   </Col>
                                               </Row>
                                           </div>
                                       );
                                   })}

                               <Row>
                                  <Col offset={10}>
                                      <Item>
                                          <Button block
                                                   style={{ maxWidth: "600px" }}
                                                   onClick={() => add()}>
                                              Add Attachments
                                          </Button>
                                      </Item>
                                  </Col>
                               </Row>
                           </>
                       );
                   }}
               </Form.List>
           </>
       </Form>
    );
}