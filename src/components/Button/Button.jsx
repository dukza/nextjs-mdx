import React from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.module.css';

export default function Button ({label, semantic, size, outline, round, state, transparent}){
    const _className = classNames('btn',outline? `btn-outline-${semantic}`:`btn-${semantic}`,transparent?`bg-transparent`:'',`btn-${size}`,round? `rounded-pill`:'',state);
    return(
        <>
            <button type="button" className={_className}>{label}</button>
        </>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    state: PropTypes.oneOf(['rest', 'disabled', 'active']),
    semantic: PropTypes.oneOf(['primary', 'secondary', 'success','danger','warning','info','light','dark']),
    outline: PropTypes.bool,
    round: PropTypes.bool,
    label: PropTypes.string.isRequired,
};
  
Button.defaultProps = {
    size: 'md',
    state:'rest',
    label: 'Typo',
    outline:false,
    round:false,
    semantic:'primary'
};