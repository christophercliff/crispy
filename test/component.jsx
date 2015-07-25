var React = require('react')

module.exports = React.createClass({

    displayName: 'Component',
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
            </div>
        )
    },

})
