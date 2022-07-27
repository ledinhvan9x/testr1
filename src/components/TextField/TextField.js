import React, { memo } from 'react';
/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={`${styles.txt_field}`}>
      <input
        className={`${meta.touched && meta.error && styles.is_invalid}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <label
        htmlFor={field.name}
      >
        {' '}
        {label}
      </label>
      <ErrorMessage
        component="div"
        name={field.name}
        className={`${styles.error}`}
      />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default memo(TextField);
