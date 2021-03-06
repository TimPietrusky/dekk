import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Styled version of the Fragment component
 * @see Fragment
 * @private
 * @type {StyledComponent}
 * @reactProps {Object} props
 *   The properties
 * @reactProps {(ReactNode|ReactNode[])} children
 * @reactProps {?Boolean} active
 * @reactProps {?string} animation
 */
const StyledFragment = styled.span`
  display: inline-block;
  white-space: pre-wrap;
  width: inherit;
  ${props =>
    props.animation ||
    `
      opacity: ${props.active ? 1 : 0}
  `};
`

/**
 * @private
 * @type {String}
 */
StyledFragment.displayName = 'StyledFragment'

/**
 * @private
 * @type {Object}
 * @prop {(ReactNode|ReactNode[])} children
 * @prop {?Boolean} active
 * @prop {?(String|Array)} animation
 */
StyledFragment.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  animation: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default StyledFragment
