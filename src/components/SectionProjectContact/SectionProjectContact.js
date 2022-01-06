import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionProjectContact.module.css';

const SectionProjectContact = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionProjectContact.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionProjectContact.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionProjectContact.part1Text" />
          </p>
        </div>
      </div>


    </div>
  );
};


export default SectionProjectContact;
