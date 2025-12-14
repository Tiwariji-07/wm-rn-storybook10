import React from "react";
import { View } from "react-native";
import WmForm from "@wavemaker/app-rn-runtime/components/data/form/form.component";
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

const PC_Name = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="name"
        displayname="Name"
        type="string"
        show={true}
        widget="text"
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
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="name_formLabel"
              classname={
                'form-label name_formLabel ' 
                // + fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
            <WmText
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
              updateon={$formField.updateon || 'blur'}
              // maxchars={fragment.toNumber($formField.maxchars)}
              showskeleton="undefined"
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
  
  const PC_Email = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="email"
        displayname="Email"
        type="string"
        show={true}
        widget="text"
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
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="email_formLabel"
              classname={
                'form-label email_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
            <WmText
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
              updateon={$formField.updateon || 'blur'}
              // maxchars={fragment.toNumber($formField.maxchars)}
              showskeleton="undefined"
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
  
  const PC_Description = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="description"
        displayname="Description"
        type="string"
        show={true}
        widget="textarea"
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
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="description_formLabel"
              classname={
                'form-label description_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
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
              updateon={$formField.updateon || 'blur'}
              // maxchars={fragment.toNumber($formField.maxchars)}
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
  
  const PC_Image = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="image"
        displayname="Image"
        type="string"
        show={true}
        widget="text"
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
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="image_formLabel"
              classname={
                'form-label image_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
            <WmText
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
              updateon={$formField.updateon || 'blur'}
              // maxchars={fragment.toNumber($formField.maxchars)}
              showskeleton="undefined"
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
  
  const PC_Address = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="address"
        displayname="Address"
        type="string"
        show={true}
        widget="textarea"
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
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="address_formLabel"
              classname={
                'form-label address_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
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
              updateon={$formField.updateon || 'blur'}
              // maxchars={fragment.toNumber($formField.maxchars)}
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
  
  const PC_Phone = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="phone"
        displayname="Phone"
        type="string"
        show={true}
        widget="number"
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
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="phone_formLabel"
              classname={
                'form-label phone_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              ></WmLabel>
            <WmNumber
              name="phone"
              formfieldname="phone"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              // datavalue={fragment.toNumber($formField.defaultvalue)}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              updateon={$formField.updateon || 'blur'}
              // minvalue={fragment.toNumber($formField.minvalue)}
              // maxvalue={fragment.toNumber($formField.maxvalue)}
              displayValue={$formField.displayValue}
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
  
  const PC_Gender = () => {
    return (
      <WmFormField
      listener={{}}
        readonly={false}
        name="gender"
        displayname="Gender"
        type="string"
        show={true}
        widget="select"
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

  export const Template1 = () => {
    return (
        <
        >
        <WmFormBody name="wm_form_body_hbjb859b8i" >
          <WmLayoutgrid columns="1" name="layoutgrid2" >
            <WmGridrow name="gridrow5" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn5"
                >
                <PC_Name  />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow6" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn6"
                >
                <PC_Email  />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow7" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn7"
                >
                <PC_Description  />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow8" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn8"
                >
                <PC_Image  />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow9" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn9"
                >
                <PC_Address  />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow10" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn10"
                >
                <PC_Phone  />
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow11" >
              <WmGridcolumn
                columnwidth={12}
                name="gridcolumn11"
                >
                <PC_Gender  />
              </WmGridcolumn>
            </WmGridrow>
          </WmLayoutgrid>
        </WmFormBody>
        <WmFormFooter name="wm_form_footer_ej3h0bcd65" >
          <WmFormAction
            iconclass="wi wi-refresh"
            formKey="staticVariable3Form1"
            name="staticVariable3Form1_reset_formAction"
            displayName="Reset"
            action="()=&gt; fragment.Widgets.staticVariable3Form1.formreset()"
            btnClass="btn-default"
            classname="form-reset btn-default"
            
            formAction={
              action("onReset")
              }
            ></WmFormAction>
          <WmFormAction
            iconclass="wi wi-save"
            formKey="staticVariable3Form1"
            name="staticVariable3Form1_submit_formAction"
            displayName="Save"
            action="()=&gt; fragment.Widgets.staticVariable3Form1.submit()"
            btnClass="btn-primary"
            classname="form-save btn-success"
            
            formAction={
              action("onSubmit")

             }
            ></WmFormAction>
        </WmFormFooter>
      </>
    )
  }

  const FormField = ({
    name,
    displayname,
    required = false,
    readonly = false,
    defaultvalue = "",
    listener = {},
  }) => (
    <WmFormField
      readonly={readonly}
      name={name}
      displayname={displayname}
      type="string"
      show={true}
      widget="text"
      formRef="userForm"
      isRelated="undefined"
      onChange={action("onChange")}
      onValidate={(widget) => {
        widget.validateFormField?.call(widget);
      }}
      formKey={name}
      listener={listener}
      renderFormFields={($formField) => (
        <>
          <WmLabel
            caption={$formField.displayname}
            memoize="false"
            required={$formField.required}
            name={`${name}_formLabel`}
            classname={`form-label ${name}_formLabel`}
            listener={listener}
          />
          <WmText
            name={name}
            formfieldname={name}
            formfield="true"
            memoize="false"
            required={$formField.required}
            datavalue={defaultvalue}
            disabled={$formField.disabled}
            readonly={$formField.readonly}
            updateon="blur"
            classname={`form-input form-text form-${name}-input`}
            listener={listener}
          />
        </>
      )}
    />
  );
export const Template2 = () => {
  return(
    <>
    <WmFormBody name="form_body" key="body">
        <WmLayoutgrid columns="1" name="layoutgrid1">
          <WmGridrow name="gridrow1">
            <WmGridcolumn columnwidth={12} name="gridcolumn1">
              <FormField
                name="firstName"
                displayname="First Name"
                required={true}
                defaultvalue={userDataset.firstName}
              />
            </WmGridcolumn>
          </WmGridrow>
          <WmGridrow name="gridrow2">
            <WmGridcolumn columnwidth={12} name="gridcolumn2">
              <FormField
                name="lastName"
                displayname="Last Name"
                required={true}
                defaultvalue={userDataset.lastName}
              />
            </WmGridcolumn>
          </WmGridrow>
          <WmGridrow name="gridrow3">
            <WmGridcolumn columnwidth={12} name="gridcolumn3">
              <FormField
                name="email"
                displayname="Email"
                required={true}
                defaultvalue={userDataset.email}
              />
            </WmGridcolumn>
          </WmGridrow>
          <WmGridrow name="gridrow4">
            <WmGridcolumn columnwidth={12} name="gridcolumn4">
              <FormField
                name="phone"
                displayname="Phone"
                defaultvalue={userDataset.phone}
              />
            </WmGridcolumn>
          </WmGridrow>
          <WmGridrow name="gridrow5">
            <WmGridcolumn columnwidth={12} name="gridcolumn5">
              <FormField
                name="address"
                displayname="Address"
                defaultvalue={userDataset.address}
              />
            </WmGridcolumn>
          </WmGridrow>
        </WmLayoutgrid>
      </WmFormBody>
      <WmFormFooter name="form_footer" key="footer">
        <WmFormAction
          iconclass="wi wi-refresh"
          formKey="userForm"
          name="userForm_reset"
          displayName="Reset"
          btnClass="btn-default"
          classname="form-reset btn-default"
          formAction={action("onReset")}
        />
        <WmFormAction
          iconclass="wi wi-save"
          formKey="userForm"
          name="userForm_submit"
          displayName="Save"
          btnClass="btn-primary"
          classname="form-save btn-success"
          formAction={action("onSubmit")}
        />
      </WmFormFooter>
    </>
  )
}

const userDataset = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1-234-567-8900",
  address: "123 Main St, City, Country",
};