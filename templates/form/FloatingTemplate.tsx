import React from "react";
import WmFormField from "@wavemaker/app-rn-runtime/components/data/form/form-field/form-field.component";
import WmFormBody from "@wavemaker/app-rn-runtime/components/data/form/form-body/form-body.component";
import WmFormFooter from "@wavemaker/app-rn-runtime/components/data/form/form-footer/form-footer.component";
import WmFormAction from "@wavemaker/app-rn-runtime/components/data/form/form-action/form-action.component";
import WmLayoutgrid from "@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component";
import WmGridrow from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component";
import WmGridcolumn from "@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component";
import WmLabel from "@wavemaker/app-rn-runtime/components/basic/label/label.component";
import WmText from "@wavemaker/app-rn-runtime/components/input/text/text.component";
import WmTextarea from "@wavemaker/app-rn-runtime/components/input/textarea/textarea.component";
import WmNumber from "@wavemaker/app-rn-runtime/components/input/number/number.component";
import WmSelect from "@wavemaker/app-rn-runtime/components/input/select/select.component";
import { Users } from "../../constants/constant";
import { action } from "@storybook/addon-actions";
const PC_Name = ({fragment={}}) => {
    return (
      <WmFormField
        name="name"
        displayname="Name"
        show={true}
        type="string"
        widget="text"
        inputtype="text"
        readonly={false}
        formRef="staticVariable3Form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="name"
        
        renderFormFields={$formField => (
          <>
            <WmText
              type="text"
              name="name"
              formfieldname="name"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Enter text"
              updateon={$formField.updateon || 'blur'}
            //   maxchars={fragment.toNumber($formField.maxchars)}
              showskeleton="undefined"
              floatinglabel="Name"
              classname={
                'form-input form-text form-name-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmText>
          </>
        )}></WmFormField>
    );
  };
  
  const PC_Email = ({fragment={}}) => {
    return (
      <WmFormField
        name="email"
        displayname="Email"
        show={true}
        type="string"
        widget="text"
        inputtype="text"
        readonly={false}
        formRef="staticVariable3Form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="email"
        
        renderFormFields={$formField => (
          <>
            <WmText
              type="text"
              name="email"
              formfieldname="email"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Enter text"
              updateon={$formField.updateon || 'blur'}
            //   maxchars={fragment.toNumber($formField.maxchars)}
              showskeleton="undefined"
              floatinglabel="Email"
              classname={
                'form-input form-text form-email-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmText>
          </>
        )}></WmFormField>
    );
  };
  
  const PC_Description = ({fragment={}}) => {
    return (
      <WmFormField
        name="description"
        displayname="Description"
        show={true}
        type="string"
        widget="textarea"
        readonly={false}
        formRef="staticVariable3Form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="description"
        
        renderFormFields={$formField => (
          <>
            <WmTextarea
              name="description"
              formfieldname="description"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Place your text"
              updateon={$formField.updateon || 'blur'}
            //   maxchars={fragment.toNumber($formField.maxchars)}
              floatinglabel="Description"
              classname={
                'form-input form-textarea form-description-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmTextarea>
          </>
        )}></WmFormField>
    );
  };
  
  const PC_Image = ({fragment={}}) => {
    return (
      <WmFormField
        name="image"
        displayname="Image"
        show={true}
        type="string"
        widget="text"
        inputtype="text"
        readonly={false}
        formRef="staticVariable3Form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="image"
        
        renderFormFields={$formField => (
          <>
            <WmText
              type="text"
              name="image"
              formfieldname="image"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Enter text"
              updateon={$formField.updateon || 'blur'}
            //   maxchars={fragment.toNumber($formField.maxchars)}
              showskeleton="undefined"
              floatinglabel="Image"
              classname={
                'form-input form-text form-image-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmText>
          </>
        )}></WmFormField>
    );
  };
  
  const PC_Address = ({fragment={}}) => {
    return (
      <WmFormField
        name="address"
        displayname="Address"
        show={true}
        type="string"
        widget="textarea"
        readonly={false}
        formRef="staticVariable3Form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="address"
        
        renderFormFields={$formField => (
          <>
            <WmTextarea
              name="address"
              formfieldname="address"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Place your text"
              updateon={$formField.updateon || 'blur'}
            //   maxchars={fragment.toNumber($formField.maxchars)}
              floatinglabel="Address"
              classname={
                'form-input form-textarea form-address-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmTextarea>
          </>
        )}></WmFormField>
    );
  };
  
  const PC_Phone = ({fragment={}}) => {
    return (
      <WmFormField
        name="phone"
        displayname="Phone"
        show={true}
        type="string"
        widget="number"
        inputtype="number"
        readonly={false}
        formRef="staticVariable3Form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="phone"
        styles={{ root: { textAlign: 'right' }, text: { textAlign: 'right' } }}
        
        renderFormFields={$formField => (
          <>
            <WmNumber
              name="phone"
              formfieldname="phone"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
            //   datavalue={fragment.toNumber($formField.defaultvalue)}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Enter Number"
              updateon={$formField.updateon || 'blur'}
            //   minvalue={fragment.toNumber($formField.minvalue)}
            //   maxvalue={fragment.toNumber($formField.maxvalue)}
              displayValue={$formField.displayValue}
              floatinglabel="Phone"
              classname={
                'form-input form-number form-phone-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmNumber>
          </>
        )}></WmFormField>
    );
  };
  
  const PC_Gender = ({fragment={}}) => {
    return (
      <WmFormField
        name="gender"
        displayname="Gender"
        show={true}
        placeholder=""
        type="string"
        widget="select"
        readonly={false}
        dataset="Male,Female"
        formRef="staticVariable3Form1"
        isRelated="undefined"
        isDataSetBound={true}
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.staticVariable3Form1 &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange &&
        //     fragment.Widgets.staticVariable3Form1.props.onChange(
        //       $event,
        //       widget,
        //       newVal,
        //       oldVal
        //     );
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="gender"
        
        renderFormFields={$formField => (
          <>
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="gender_formLabel"
              classname={
                'form-label gender_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
            <WmSelect
              name="gender"
              formfieldname="gender"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              dataset={$formField.dataset}
              displayfield={$formField.displayfield}
              datafield={$formField.datafield}
              classname={
                'form-widget-select ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              ></WmSelect>
          </>
        )}></WmFormField>
    );
  };

  export const FloatingTemplate = (fragment={}) => {
      return(
        <>
        <WmFormBody name="wm_form_body_bi14d2eihi" listener={fragment}>
          <WmLayoutgrid columns="1" name="layoutgrid2" listener={fragment}>
            <WmGridrow name="gridrow5" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn5"
                listener={fragment}>
                <PC_Name fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow6" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn6"
                listener={fragment}>
                <PC_Email fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow7" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn7"
                listener={fragment}>
                <PC_Description fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow8" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn8"
                listener={fragment}>
                <PC_Image fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow9" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn9"
                listener={fragment}>
                <PC_Address fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow10" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn10"
                listener={fragment}>
                <PC_Phone fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow11" listener={fragment}>
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn11"
                listener={fragment}>
                <PC_Gender fragment={fragment} />
              </WmGridcolumn>
            </WmGridrow>
          </WmLayoutgrid>
        </WmFormBody>
        <WmFormFooter name="wm_form_footer_2fh9dihb70" listener={fragment}>
          <WmFormAction
            name="staticVariable3Form1_reset_formAction"
            show={true}
            iconclass="wi wi-refresh"
            title="Reset"
            disabled={false}
            widget-type="button"
            formKey="staticVariable3Form1"
            displayName="Reset"
            updateMode={true}
            action="()=&gt; fragment.Widgets.staticVariable3Form1.formreset()"
            btnClass="btn-default"
            classname="form-reset btn-default"
            listener={fragment}
            formAction={$event => {
            //   fragment.Widgets.staticVariable3Form1.formreset();
            }}></WmFormAction>
          <WmFormAction
            name="staticVariable3Form1_submit_formAction"
            show={true}
            iconclass="wi wi-save"
            title="Save"
            disabled={false}
            widget-type="button"
            formKey="staticVariable3Form1"
            displayName="Save"
            updateMode={true}
            action="()=&gt; fragment.Widgets.staticVariable3Form1.submit()"
            btnClass="btn-primary"
            classname="form-save btn-success"
            listener={fragment}
            formAction={$event => {
            //   fragment.Widgets.staticVariable3Form1.submit();
            }}></WmFormAction>
        </WmFormFooter></>
      )
  }