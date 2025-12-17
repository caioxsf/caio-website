
export default function PrivacyPolicy() {
    return (
        <main style={{ color: "#666", maxWidth: 800, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", lineHeight: 1.6 }}>
            <h1 style={{ fontSize: 32, marginBottom: 16, marginTop:35 }}>Privacy Policy</h1>
            <p style={{ color: "#666", marginBottom: 32 }}>
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
                <h2>1. Overview</h2>
                <p>
                    This Privacy Policy explains how we collect, use, and protect your
                    information when you use the auto-clipper web application and related
                    services (the &quot;Service&quot;). By using the Service, you agree to
                    the collection and use of information in accordance with this policy.
                </p>
            </section>

            <section>
                <h2>2. Information We Collect</h2>
                <h3>2.1 Information you provide directly</h3>
                <ul>
                    <li>
                        <strong>Account information:</strong> such as your name, email address,
                        and password when you create an account.
                    </li>
                    <li>
                        <strong>Video content:</strong> the videos and other media you upload
                        or import into the Service so that we can generate clips and subtitles.
                    </li>
                </ul>

                <h3>2.2 Information from third-party platforms</h3>
                <p>
                    If you choose to connect third-party platforms (such as TikTok), we may
                    receive certain information from those platforms, depending on the
                    permissions you grant, for example:
                </p>
                <ul>
                    <li>Basic profile information (e.g. display name, username, avatar).</li>
                    <li>Authorization tokens that allow us to perform actions on your behalf,
                        such as uploading videos you explicitly choose to publish.</li>
                </ul>

                <h3>2.3 Usage data</h3>
                <p>
                    We may collect information about how you access and use the Service,
                    such as IP address, browser type, device information, pages visited, and
                    timestamps. This helps us improve the Service and ensure security.
                </p>
            </section>

            <section>
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, operate, and maintain the Service.</li>
                    <li>Generate clips and subtitles from your video content.</li>
                    <li>
                        Allow you to connect and post content to third-party platforms (such
                        as TikTok) when you choose to do so.
                    </li>
                    <li>Communicate with you about updates, features, and support.</li>
                    <li>Monitor usage and improve the performance and security of the Service.</li>
                </ul>
            </section>

            <section>
                <h2>4. Sharing of Your Information</h2>
                <p>We may share your information in the following situations:</p>
                <ul>
                    <li>
                        <strong>With third-party platforms you connect:</strong> for example,
                        when you connect your TikTok account and choose to publish a clip,
                        we use your authorization to upload that video to your TikTok account.
                    </li>
                    <li>
                        <strong>With service providers:</strong> we may work with third-party
                        vendors (e.g. cloud hosting, analytics, AI services) that process data
                        on our behalf in order to provide and improve the Service.
                    </li>
                    <li>
                        <strong>For legal reasons:</strong> if required by law or in response
                        to valid legal requests, or to protect our rights, users, or the
                        public.
                    </li>
                </ul>
                <p>
                    We do not sell your personal information to third parties.
                </p>
            </section>

            <section>
                <h2>5. Data Retention</h2>
                <p>
                    We retain your information for as long as necessary to provide the
                    Service and for legitimate business purposes, such as complying with our
                    legal obligations, resolving disputes, and enforcing our agreements.
                    You may request deletion of your account and associated data as
                    described in the &quot;Your Rights&quot; section below.
                </p>
            </section>

            <section>
                <h2>6. Security</h2>
                <p>
                    We take reasonable technical and organizational measures to protect your
                    information from unauthorized access, loss, or misuse. However, no
                    method of transmission or storage is 100% secure, and we cannot
                    guarantee absolute security.
                </p>
            </section>

            <section>
                <h2>7. Your Rights</h2>
                <p>
                    Depending on your location, you may have certain rights regarding your
                    personal data, such as:
                </p>
                <ul>
                    <li>Accessing the information we hold about you.</li>
                    <li>Requesting correction or deletion of your data.</li>
                    <li>Objecting to or restricting certain types of processing.</li>
                </ul>
                <p>
                    To exercise these rights, please contact us using the information
                    provided on{" "}
                    <a href="https://caionobile.com" target="_blank" rel="noreferrer">
                        https://caionobile.com
                    </a>
                    .
                </p>
            </section>

            <section>
                <h2>8. Children&apos;s Privacy</h2>
                <p>
                    The Service is not intended for individuals under the age of 13, and we
                    do not knowingly collect personal information from children under 13. If
                    you believe that a child has provided us with personal information,
                    please contact us and we will take steps to delete such information.
                </p>
            </section>

            <section>
                <h2>9. Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. When we do, we
                    will update the &quot;Last updated&quot; date at the top of this page.
                    Your continued use of the Service after any changes means that you
                    accept the updated policy.
                </p>
            </section>

            <section>
                <h2>10. Contact</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy or our
                    data practices, please contact us via the contact information provided
                    on{" "}
                    <a href="https://caionobile.com" target="_blank" rel="noreferrer">
                        https://caionobile.com
                    </a>
                    .
                </p>
            </section>
        </main>
    );
};
