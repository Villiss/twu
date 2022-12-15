import React from 'react'
import "./styles.css";

export const Footer = () => {
    return (
        <section className="footer">
            <h3>TWU, s.r.o.</h3>
            <p><strong>Sídlo: </strong>Ľudovíta Fullu 62, 84107 Bratislava</p>
            <p><strong>Kancelária: </strong>Devätinová ulica 54, 821 06 Bratislava</p>
            <p><a className="infotwu" href="mailto:info@twu.sk">info@twu.sk</a></p>
        </section>
    )
}