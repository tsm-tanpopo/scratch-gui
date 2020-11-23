import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import greenFlagIcon from './icon--green-flag.svg';
import styles from './green-flag.css';
/* ADD BY GL 20201029 START */
import Button from '../button/button.jsx';
/* ADD BY GL 20201029 END */

const GreenFlagComponent = function (props) {
    const {
        active,
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    /* MOD BY GL 20201029 START */
    return (
        <div>
            <Button
                className={classNames(
                    className,
                    styles.greenFlagButton,
                    {
                        [styles.isActive]: active
                    }
                )}
                onClick={onClick}
            >
                <img
                    className={classNames(
                        className,
                        styles.greenFlag,
                        {
                            [styles.isActive]: active
                        }
                    )}
                    draggable={false}
                    src={greenFlagIcon}
                    title={title}
                    onClick={onClick}
                    {...componentProps}
                />
                <span
                    className={styles.greenFlagLabel}
                >{title}</span>
            </Button>
        </div>
    );
    /* MOD BY GL 20201029 END */
};
GreenFlagComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
GreenFlagComponent.defaultProps = {
    active: false,
    title: 'Go'
};
export default GreenFlagComponent;
