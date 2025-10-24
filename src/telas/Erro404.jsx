import React from "react"
import { Link } from "react-router-dom";

const Erro404 = () => (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f8f8",
        color: "#333"
    }}>
        <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
        <h2 style={{ margin: "1rem 0" }}>Página não encontrada</h2>
        <p>
            Desculpe, a página que você está procurando não existe.
        </p>
        <Link
            to="/"
            style={{
                marginTop: "2rem",
                padding: "0.75rem 2rem",
                background: "#007bff",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold"
            }}
        >
            Voltar para a página inicial
        </Link>
    </div>
);

export default Erro404;