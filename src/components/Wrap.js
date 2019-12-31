import React from 'react';
import './Wrap.css'

/**
 * 包裹组件，用于同一处理相同的业务逻辑（给组件加红色的外边框）
*/
export default function WrapComponent(OldComponent) {
    return class extends React.Component {
        render() {
            return (
                <div className='wrap'>
                    <OldComponent {...this.props} />
                </div>
            )
        }
    }
}