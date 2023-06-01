import React from 'react'

export const Header = () => {
    return (
        <div>
            <header className="header">
                {[
                    ['Home', '/home'],
                    ['Profile', '/profile'],
                    // ['Projects', '/projects'],
                    // ['Reports', '/reports'],
                ].map(([title, url]) => (
                    <a href={url} key={title} className="header-link">{title}</a>
                ))}
            </header>
        </div>
    )
}
