import React from "react";
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

export const PC_J_username = ({ fragment }) => {
    return (
      <WmFormField
        readonly={false}
        name="j_username"
        displayname="Username"
        type="string"
        show={true}
        widget="text"
        formRef="form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.form1 &&
        //     fragment.Widgets.form1.props.onChange &&
        //     fragment.Widgets.form1.props.onChange($event, widget, newVal, oldVal);
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="j_username"
        styles={{ root: { width: '100%' }, text: {} }}
        classname="app-login-username"
        listener={fragment}
        renderFormFields={$formField => (
          <>
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="j_username_formLabel"
              classname={
                'form-label j_username_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              listener={fragment}></WmLabel>
            <WmText
              name="j_username"
              formfieldname="j_username"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Enter username"
              updateon={$formField.updateon || 'blur'}
              maxchars={$formField.maxchars}
              showskeleton="undefined"
              classname={
                'form-input form-text form-j_username-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              listener={fragment}></WmText>
          </>
        )}></WmFormField>
    );
  };
  
export  const PC_J_password = ({ fragment }) => {
    return (
      <WmFormField
        readonly={false}
        name="j_password"
        displayname="Password"
        type="string"
        show={true}
        widget="text"
        inputtype="password"
        formRef="form1"
        isRelated="undefined"
        // onChange={($event, widget, newVal, oldVal) => {
        //   fragment.Widgets.form1 &&
        //     fragment.Widgets.form1.props.onChange &&
        //     fragment.Widgets.form1.props.onChange($event, widget, newVal, oldVal);
        // }}
        onValidate={widget => {
          widget.validateFormField.call(widget);
        }}
        formKey="j_password"
        styles={{ root: { width: '100%' }, text: {} }}
        classname="app-login-password"
        listener={fragment}
        renderFormFields={$formField => (
          <>
            <WmLabel
              caption={$formField.displayname}
              memoize="false"
              required={$formField.required}
              name="j_password_formLabel"
              classname={
                'form-label j_password_formLabel ' 
                // +
                // fragment.getFormFieldStyles($formField, 'label')
              }
              listener={fragment}></WmLabel>
            <WmText
              type="password"
              name="j_password"
              formfieldname="j_password"
              formfield="true"
              memoize="false"
              required={$formField.required}
              regexp={$formField.regexp}
              validationmessage={$formField.validationmessage}
              datavalue={$formField.defaultvalue}
              disabled={$formField.disabled}
              readonly={$formField.readonly}
              placeholder="Enter password"
              updateon={$formField.updateon || 'blur'}
              maxchars={$formField.maxchars}
              showskeleton="undefined"
              classname={
                'form-input form-text form-j_password-input ' 
                // +
                // fragment.getFormFieldStyles($formField, 'commonField')
              }
              listener={fragment}></WmText>
          </>
        )}></WmFormField>
    );
  };

export const LoginTemplate = ({fragment={}}) => {
    return (
        <WmForm name="form1" isLogin="true" listener={fragment}>
          <WmFormBody name="wm_form_body_ad920e0854" listener={fragment}>
            <WmLayoutgrid name="layoutgrid1" listener={fragment}>
              <WmGridrow name="gridrow1" listener={fragment}>
                <WmGridcolumn
                  columnwidth={12}
                  xscolumnwidth={12}
                  name="gridcolumn1"
                  listener={fragment}>
                  <PC_J_username fragment={fragment} />
                </WmGridcolumn>
              </WmGridrow>
              <WmGridrow name="gridrow2" listener={fragment}>
                <WmGridcolumn
                  columnwidth={12}
                  xscolumnwidth={12}
                  name="gridcolumn2"
                  listener={fragment}>
                  <PC_J_password fragment={fragment} />
                </WmGridcolumn>
              </WmGridrow>
              <WmGridrow name="gridrow3" listener={fragment}>
                <WmGridcolumn
                  columnwidth={12}
                  xscolumnwidth={12}
                  name="gridcolumn3"
                  listener={fragment}></WmGridcolumn>
              </WmGridrow>
            </WmLayoutgrid>
          </WmFormBody>
          <WmFormFooter name="wm_form_footer_ai02b304c6" listener={fragment}>
            <WmFormAction
              iconclass="wi wi-save"
              action="()=&gt; fragment.Widgets.form1.submit();fragment.Widgets.loginForm.doLogin(fragment.Widgets.form1.dataoutput)"
              formKey="form1"
              name="form1_submit_formAction"
              displayName="Signin"
              btnClass="btn-primary"
              classname="form-save btn-success"
              listener={fragment}
              formAction={$event => {
                // fragment.Widgets.form1.submit();
                // fragment.Widgets.loginForm.doLogin(
                //   fragment.Widgets.form1.dataoutput
                // );
              }}
              ></WmFormAction>
          </WmFormFooter>
        </WmForm>
    )
}