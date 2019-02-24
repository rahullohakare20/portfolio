import React  from 'react';

function MenuLogo(props) {
    const theme = {
        borderColor : props.color,
    }

    return (
        <div className="div-menu">
            <header className="cd-header">
                <a style={theme} className="cd-menu-trigger" onClick={props.toggleMenu}>
                    <span style={{backgroundColor: props.color}}></span>
                </a>
            </header>
        </div>
    )
}

export default MenuLogo;
