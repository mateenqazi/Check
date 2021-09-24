import React from 'react'
import PropTypes from 'prop-types'

export default function ProgressBar(props) {
    const { value, max } = props
    return (
        <>
            <progress value={value} max={max} />
            <span>{(value / max) * 100} kg</span>
        </>
    )
}
ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}

ProgressBar.defaultProps = {
    max: 100
}