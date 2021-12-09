import React, { Component } from 'react';
import arrayMutators from 'final-form-arrays';
import { bool, string } from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Field, Form as FinalForm } from 'react-final-form';
import { Form as FormSpy } from 'react-final-form';
import { findOptionsForSelectFilter } from '../../util/search';
import config from '../../config';

import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { ensureCurrentUser } from '../../util/data';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import { isUploadImageOverLimitError } from '../../util/errors';
import {
  Form,
  Avatar,
  Button,
  ImageFromFile,
  IconSpinner,
  FieldTextInput,
  FieldCheckbox,
  FieldCheckboxGroup,
} from '../../components';

import css from './NotificationSettingsForm.module.css';
import { stringify } from 'query-string';
import { FieldInForm } from '../../components/FieldCurrencyInput/FieldCurrencyInput.example';

const ACCEPT_IMAGES = 'image/*';
const UPLOAD_CHANGE_DELAY = 2000; // Show spinner so that browser has time to load img srcset

class NotificationSettingsFormComponent extends Component {
  constructor(props) {
    super(props);

    this.uploadDelayTimeoutId = null;
    this.state = { uploadDelay: false };
    this.submittedValues = {};
  }

  componentDidUpdate(prevProps) {
    // Upload delay is additional time window where Avatar is added to the DOM,
    // but not yet visible (time to load image URL from srcset)
    if (prevProps.uploadInProgress && !this.props.uploadInProgress) {
      this.setState({ uploadDelay: true });
      this.uploadDelayTimeoutId = window.setTimeout(() => {
        this.setState({ uploadDelay: false });
      }, UPLOAD_CHANGE_DELAY);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.uploadDelayTimeoutId);
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        mutators={{ ...arrayMutators }}
        render={fieldRenderProps => {
          const {
            className,
            currentUser,
            handleSubmit,
            intl,
            invalid,
            onImageUpload,
            pristine,
            profileImage,
            rootClassName,
            updateInProgress,
            updateProfileError,
            uploadImageError,
            uploadInProgress,
            form,
            values,
            required,
            onChange,
            filterConfig,
            useSuccessColor,
          } = fieldRenderProps;

          const user = ensureCurrentUser(currentUser);

          const classes = classNames(rootClassName || css.root, className);
          const submitInProgress = updateInProgress;
          const submittedOnce = Object.keys(this.submittedValues).length > 0;
          const pristineSinceLastSubmit = submittedOnce && isEqual(values, this.submittedValues);
          const submitDisabled =
            invalid || pristine || pristineSinceLastSubmit || uploadInProgress || submitInProgress;

          const categoryOptions = findOptionsForSelectFilter('category', filterConfig);

          const notificationOptions = [
            { key: 'email', label: 'E-post' },
            { key: 'sms', label: 'Sms' },
          ];
          const amenitiesOptions = findOptionsForSelectFilter('amenities', filterConfig);

          return (
            <Form
              className={classes}
              onSubmit={e => {
                this.submittedValues = values;
                handleSubmit(e);
              }}
            >
              <div className={classNames(css.sectionContainer, css.lastSection)}>
                <p className={css.bioInfo}>
                    <FormattedMessage id="NotificationSettingsForm.notificationSettingsInfo" />
                  </p>
                  <FieldCheckboxGroup
                    className={css.features}
                    id="notifications"
                    name="notifications"
                    label="Notifiera mig via"
                    options={notificationOptions}
                    values="notifications"
                    twoColumns={true}
                  />
                <p className={css.bioInfo}>
                  <FormattedMessage id="NotificationSettingsForm.notificationOptionsInfo" />
                </p>
                <div>
                  <FieldCheckboxGroup
                    className={css.features}
                    id="amenities"
                    name="amenities"
                    label="Projekt"
                    options={amenitiesOptions}
                    values="amenities"
                    twoColumns={true}
                  />
                     <div className={css.newProjects}>
                      <legend className={css.newProjectsHeadline}><FormattedMessage id="NotificationSettingsForm.newProjectsHeadline" /></legend> 
                    <FieldCheckbox
                    className={css.features}
                    id="notifyNewProjects"
                    name="notifyNewProjects"
                    label="Notifiera mig när nya projekt blir synliga på medla"
                    defaultValue='true'
                    twoColumns={true}
                
                      />
                    </div>

                  <FieldCheckboxGroup
                    className={css.features}
                    id="category"
                    name="category"
                    label="Branscher"
                    options={categoryOptions}
                    values="category"
                    twoColumns={true}
                  />

                   
            


             
                <div className={css.fileInfo}>
                  <FormattedMessage id="NotificationSettingsForm.businessAreasTip" />
                </div>
                </div>
              </div>
              <Button
                className={css.submitButton}
                type="submit"
                inProgress={submitInProgress}
                disabled={submitDisabled}
                ready={pristineSinceLastSubmit}
              >
                <FormattedMessage id="NotificationSettingsForm.saveChanges" />
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}

NotificationSettingsFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  uploadImageError: null,
  updateProfileError: null,
  updateProfileReady: false,
  filterConfig: config.custom.filters,
};

NotificationSettingsFormComponent.propTypes = {
  rootClassName: string,
  className: string,

  uploadImageError: propTypes.error,
  uploadInProgress: bool.isRequired,
  updateInProgress: bool.isRequired,
  updateProfileError: propTypes.error,
  updateProfileReady: bool,
  filterConfig: propTypes.filterConfig,

  // from injectIntl
  intl: intlShape.isRequired,
};

const NotificationSettingsForm = compose(injectIntl)(NotificationSettingsFormComponent);

NotificationSettingsForm.displayName = 'NotificationSettingsForm';

export default NotificationSettingsForm;
