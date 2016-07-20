var React = require('react');
var listItem = React.createClass({
    render:function(){
        return (
            <li>
                    <h3>{this.props.ingrediant}</h3>
              </li>
            );
        }   
});

module.exports = listItem;