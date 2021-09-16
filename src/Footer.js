import React from 'react'
import "./styles.css";

export const Footer = () => {
    return (
        <section className="footer">
            <h3>TWU, s.r.o.</h3>
            <p><strong>Sídlo: </strong>Ľudovíta Fullu 62, 84107 Bratislava</p>
            <p><strong>Kancelária: </strong>Senecká cesta 24B, 93101 Šamorín</p>
            <p><a className="infotwu" href="mailto:info@twu.sk">info@twu.sk</a></p>
        </section>
    )
}