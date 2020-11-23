import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import stopAllIcon from './icon--stop-all.svg';
import styles from './stop-all.css';
/* ADD BY GL 20201029 START */
import Button from '../button/button.jsx';
/* ADD BY GL 20201029 END */

const StopAllComponent = function (props) {
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
                className={styles.stopAllButton}
                onClick={onClick}
            >
                <img
                    className={classNames(
                        className,
                        styles.stopAll,
                        {
                            [styles.isActive]: active
                        }
                    )}
                    draggable={false}
                    src={stopAllIcon}
                    title={title}
                    onClick={onClick}
                    {...componentProps}
                />
                <span
                    className={styles.stopAllLabel}
                >{title}</span>
            </Button>
        </div>
    );
    /* MOD BY GL 20201029 END */
};

StopAllComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};

StopAllComponent.defaultProps = {
    active: false,
    title: 'Stop'
};

export default StopAllComponent;
