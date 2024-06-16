const Footer = () => {
    return (
        <div className="bg-[#1a1919]">
            <footer className="footer container mx-auto p-10 text-base-content">
                <aside>

                    <p className="text-3xl font-bold text-white">CareerHub</p>

                    <p className="text-[#ffffffb3] w-2/3">
                        There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                    </p>
                </aside>
                <nav className="text-[#ffffffb3]">
                    <h6 className="footer-title text-white opacity-100">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-[#ffffffb3]">
                    <h6 className="footer-title text-white opacity-100">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-[#ffffffb3]">
                    <h6 className="footer-title text-white opacity-100">Legal</h6>
                    <a className="link link-hover" > Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;