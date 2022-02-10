import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionWhatIsMedlaMunicipality.module.css';

const SectionWhatIsMedlaMunicipality = props => {

  const { rootClassName, className, currentUser } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionWhatIsMedlaMunicipality.titleLineOne" />

      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIsMedlaMunicipality.part1Title" />
          </div>

        
        </div>
      </div>


    </div>
  );
};


export default SectionWhatIsMedlaMunicipality;
