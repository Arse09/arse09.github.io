import React from "react";

interface FooterProps {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
    return (
        <footer className={
            "footer " +
            "text-(--primary-text) text-center text-[14px] font-regular " +
            "border-t-3 border-solid border-(--border-color) py-[20px] mt-auto" +
            ""
        }>
            <p className={"footer-link"}>
                All rights reserved
                <br/>
                © {new Date().getFullYear()} {name}
            </p>
        </footer>
    );
};

export default Footer;
