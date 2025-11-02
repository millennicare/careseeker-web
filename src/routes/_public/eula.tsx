import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_public/eula")({
	component: EulaPage,
});

export default function EulaPage() {
	return (
		<div className="text-black">
			<div className="container mx-auto px-4 py-16">
				<div className="space-y-6">
					<h2 className="mb-4 font-semibold text-3xl">
						End-User License Agreement (&quot;Agreement&quot;)
					</h2>

					<p className="text-gray-500 text-sm dark:text-gray-400">
						Last updated: January 20, 2023
					</p>
					<p>
						Please read this End-User License Agreement carefully before
						clicking the &quot;I Agree&quot; button, downloading or using
						MillenniCare.
					</p>
				</div>

				{/* INTERPRETATION AND DEFINITIONS SECTION */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">
						Interpretation and Definitions
					</h2>
					<h3 className="mb-2 font-semibold text-xl">Interpretation</h3>
					<p>
						The words of which the initial letter is capitalized have meanings
						defined under the following conditions. The following definitions
						shall have the same meaning regardless of whether they appear in
						singular or in plural.
					</p>
					<h3 className="mt-8 mb-2 font-semibold text-xl">Definitions</h3>
					<p>For the purposes of this End-User License Agreement:</p>

					<ul className="mt-4 ml-6 list-disc space-y-2">
						<li>
							<b>Agreement</b> means this End-User License Agreement that forms
							the entire agreement between You and the Company regarding the use
							of the Application.
						</li>
						<li>
							<b>Application</b> means the software program provided by the
							Company downloaded by You to a Device, named MillenniCare
						</li>
						<li>
							<b>Company</b> (referred to as either &quot;the Company&quot;,
							&quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
							Agreement) refers to MillenniCare, 800 4th street sw, Washington
							D.C., 20024 N812.
						</li>
						<li>
							<b>Content</b> refers to content such as text, images, or other
							information that can be posted, uploaded, linked to or otherwise
							made available by You, regardless of the form of that content.
						</li>
						<li>
							<b>Country</b> refers to: District Of Columbia, United States
						</li>
						<li>
							<b>Device</b> means any device that can access the Application
							such as a computer, a cellphone or a digital tablet.
						</li>
						<li>
							<b>Third-Party Services</b> means any services or content
							(including data, information, applications and other products
							services) provided by a third-party that may be displayed,
							included or made available by the Application.
						</li>
						<li>
							<b>You</b> means the individual accessing or using the Application
							or the company, or other legal entity on behalf of which such
							individual is accessing or using the Application, as applicable.
						</li>
					</ul>
				</div>

				{/* ACKNOWLEDGMENT */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Acknowledgment</h2>
					<p>
						By clicking the &quot;I Agree&quot; button, downloading or using the
						Application, You are agreeing to be bound by the terms and
						conditions of this Agreement. If You do not agree to the terms of
						this Agreement, do not click on the &quot;I Agree&quot; button, do
						not download or do not use the Application.
					</p>
					<p>
						This Agreement is a legal document between You and the Company and
						it governs your use of the Application made available to You by the
						Company.
					</p>
					<p>
						The Application is licensed, not sold, to You by the Company for use
						strictly in accordance with the terms of this Agreement.
					</p>
				</div>

				{/* LICENSE */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">License</h2>
					<b>Scope of License</b>
					<p>
						The Company grants You a revocable, non-exclusive, non-transferable,
						limited license to download, install and use the Application
						strictly in accordance with the terms of this Agreement.
					</p>
					<br />
					<p>
						The license that is granted to You by the Company is solely for your
						personal, non-commercial purposes strictly in accordance with the
						terms of this Agreement.
					</p>
				</div>

				{/* INTELLECTUAL PROPERTY */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Intellectual Property</h2>
					<p>
						The Application, including without limitation all copyrights,
						patents, trademarks, trade secrets and other intellectual property
						rights are, and shall remain, the sole and exclusive property of the
						Company.
					</p>
					<p>
						The Company shall not be obligated to indemnify or defend You with
						respect to any third party claim arising out of or relating to the
						Application. To the extent the Company is required to provide
						indemnification by applicable law, the Company shall be solely
						responsible for the investigation, defense, settlement and discharge
						of any claim that the Application or your use of it infringes any
						third party intellectual property rights.
					</p>
				</div>

				{/* MODIFICATIONS TO THE APPLICATION */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">
						Modifications to the Application
					</h2>
					<p>
						The Company reserves the right to modify, suspend or discontinue,
						temporarily or permanently, the Application or any service to which
						it connects, with or without notice and without liability to You.
					</p>
					<b>Updates to the Application</b>
					<p>
						The Company may from time to time provide enhancements or
						improvements to the features/functionality of the Application, which
						may include patches, bug fixes, updates, upgrades and other
						modifications.
					</p>
					<p>
						Updates may modify or delete certain features and/or functionalities
						of the Application. You agree that the Company has no obligation to
						(i) provide any Updates, or (ii) continue to provide or enable any
						particular features and/or functionalities of the Application to
						You.
					</p>
					<p>
						You further agree that all updates or any other modifications will
						be (i) deemed to constitute an integral part of the Application, and
						(ii) subject to the terms and conditions of this Agreement.
					</p>
					<b className="mt-12">Maintenance and Support</b>
					<p>
						The Company does not provide any maintenance or support for the
						download and use of the Application. To the extent that any
						maintenance or support is required by applicable law, the Company
						shall be obligated to furnish any such maintenance or support.
					</p>
				</div>

				{/* THIRD-PARTY SERVICES */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Third-Party Services</h2>
					<p>
						The Application may display, include or make available third-party
						content (including data, information, applications and other
						products services) or provide links to third-party websites or
						services.
					</p>

					<p>
						You acknowledge and agree that the Company shall not be responsible
						for any Third-party Services, including their accuracy,
						completeness, timeliness, validity, copyright compliance, legality,
						decency, quality or any other aspect thereof. The Company does not
						assume and shall not have any liability or responsibility to You or
						any other person or entity for any Third-party Services.
					</p>

					<p>
						You must comply with applicable Third parties&apos; Terms of
						agreement when using the Application. Third-party Services and links
						thereto are provided solely as a convenience to You and You access
						and use them entirely at your own risk and subject to such third
						parties&apos; Terms and conditions.
					</p>
				</div>

				{/* PRIVARY POLICY */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Privacy Policy</h2>
					<p>
						The Company collects, stores, maintains, and shares information
						about You in accordance with Our Privacy Policy:
						https://www.termsfeed.com/live/e6ac490e-252c-4050-acad-0cebee220780
					</p>

					<p>
						By accepting this Agreement, You acknowledge that You hereby agree
						and consent to the terms and conditions of Our Privacy Policy.
					</p>
				</div>

				{/* TERM AND TERMINATION */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Term and Termination</h2>
					<p>
						This Agreement shall remain in effect until terminated by You or the
						Company. The Company may, in its sole discretion, at any time and
						for any or no reason, suspend or terminate this Agreement with or
						without prior notice.
					</p>

					<p>
						This Agreement will terminate immediately, without prior notice from
						the Company, in the event that you fail to comply with any provision
						of this Agreement. You may also terminate this Agreement by deleting
						the Application and all copies thereof from your Device or from your
						computer.
					</p>

					<p>
						Upon termination of this Agreement, You shall cease all use of the
						Application and delete all copies of the Application from your
						Device.
					</p>

					<p>
						Termination of this Agreement will not limit any of the
						Company&apos;s rights or remedies at law or in equity in case of
						breach by You (during the term of this Agreement) of any of your
						obligations under the present Agreement.
					</p>
				</div>

				{/* INDEMNIFICATION */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Indemnification</h2>
					<p>
						You agree to indemnify and hold the Company and its parents,
						subsidiaries, affiliates, officers, employees, agents, partners and
						licensors (if any) harmless from any claim or demand, including
						reasonable attorneys&apos; fees, due to or arising out of your: (a)
						use of the Application; (b) violation of this Agreement or any law
						or regulation; or (c) violation of any right of a third party.
					</p>
				</div>

				{/* NO WARRANTIES */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">No Warranties</h2>
					<p>
						The Application is provided to You &quot;AS IS&quot; and &quot;AS
						AVAILABLE&quot; and with all faults and defects without warranty of
						any kind. To the maximum extent permitted under applicable law, the
						Company, on its own behalf and on behalf of its affiliates and its
						and their respective licensors and service providers, expressly
						disclaims all warranties, whether express, implied, statutory or
						otherwise, with respect to the Application, including all implied
						warranties of merchantability, fitness for a particular purpose,
						title and non-infringement, and warranties that may arise out of
						course of dealing, course of performance, usage or trade practice.
						Without limitation to the foregoing, the Company provides no
						warranty or undertaking, and makes no representation of any kind
						that the Application will meet your requirements, achieve any
						intended results, be compatible or work with any other software,
						applications, systems or services, operate without interruption,
						meet any performance or reliability standards or be error free or
						that any errors or defects can or will be corrected.
					</p>

					<p>
						Without limiting the foregoing, neither the Company nor any of the
						company&apos;s provider makes any representation or warranty of any
						kind, express or implied: (i) as to the operation or availability of
						the Application, or the information, content, and materials or
						products included thereon; (ii) that the Application will be
						uninterrupted or error-free; (iii) as to the accuracy, reliability,
						or currency of any information or content provided through the
						Application; or (iv) that the Application, its servers, the content,
						or e-mails sent from or on behalf of the Company are free of
						viruses, scripts, trojan horses, worms, malware, timebombs or other
						harmful components.
					</p>

					<p>
						Some jurisdictions do not allow the exclusion of certain types of
						warranties or limitations on applicable statutory rights of a
						consumer, so some or all of the above exclusions and limitations may
						not apply to You. But in such a case the exclusions and limitations
						set forth in this section shall be applied to the greatest extent
						enforceable under applicable law. To the extent any warranty exists
						under law that cannot be disclaimed, the Company shall be solely
						responsible for such warranty.
					</p>
				</div>

				{/* LIMITATION OF LIABILITY */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">
						Limitation of Liability
					</h2>
					<p>
						Notwithstanding any damages that You might incur, the entire
						liability of the Company and any of its suppliers under any
						provision of this Agreement and your exclusive remedy for all of the
						foregoing shall be limited to the amount actually paid by You for
						the Application or through the Application or 100 USD if You
						haven&apos;t purchased anything through the Application.
					</p>
					<br />
					<p>
						To the maximum extent permitted by applicable law, in no event shall
						the Company or its suppliers be liable for any special, incidental,
						indirect, or consequential damages whatsoever (including, but not
						limited to, damages for loss of profits, loss of data or other
						information, for business interruption, for personal injury, loss of
						privacy arising out of or in any way related to the use of or
						inability to use the Application, third-party software and/or
						third-party hardware used with the Application, or otherwise in
						connection with any provision of this Agreement), even if the
						Company or any supplier has been advised of the possibility of such
						damages and even if the remedy fails of its essential purpose.
					</p>

					<p>
						Some states/jurisdictions do not allow the exclusion or limitation
						of incidental or consequential damages, so the above limitation or
						exclusion may not apply to You.
					</p>
				</div>

				{/* SEVERABILITY AND WAIVER */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">
						Severability and Waiver
					</h2>

					<b>Severability</b>
					<p>
						If any provision of this Agreement is held to be unenforceable or
						invalid, such provision will be changed and interpreted to
						accomplish the objectives of such provision to the greatest extent
						possible under applicable law and the remaining provisions will
						continue in full force and effect.
					</p>
					<b>Waiver</b>
					<p>
						Except as provided herein, the failure to exercise a right or to
						require performance of an obligation under this Agreement shall not
						effect a party&apos;s ability to exercise such right or require such
						performance at any time thereafter nor shall the waiver of a breach
						constitute a waiver of any subsequent breach.
					</p>
				</div>

				{/* PRODUCT CLAIMS */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Product Claims</h2>
					<p>
						The Company does not make any warranties concerning the Application.
					</p>
				</div>

				{/* UNITED STATES LEGAL COMPLIANCE */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">
						United States Legal Compliance
					</h2>
					<p>
						You represent and warrant that (i) You are not located in a country
						that is subject to the United States government embargo, or that has
						been designated by the United States government as a &quot;terrorist
						supporting&quot; country, and (ii) You are not listed on any United
						States government list of prohibited or restricted parties.
					</p>
				</div>

				{/* CHANGES TO THIS AGREEMENT */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">
						Changes to this Agreement
					</h2>
					<p>
						The Company reserves the right, at its sole discretion, to modify or
						replace this Agreement at any time. If a revision is material we
						will provide at least 30 days&apos; notice prior to any new terms
						taking effect. What constitutes a material change will be determined
						at the sole discretion of the Company.
					</p>
					<p>
						By continuing to access or use the Application after any revisions
						become effective, You agree to be bound by the revised terms. If You
						do not agree to the new terms, You are no longer authorized to use
						the Application.
					</p>
				</div>

				{/* GOVERNING LAW */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Governing Law</h2>
					<p>
						The laws of the Country, excluding its conflicts of law rules, shall
						govern this Agreement and your use of the Application. Your use of
						the Application may also be subject to other local, state, national,
						or international laws.
					</p>
				</div>

				{/* ENTIRE AGREEMENT */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Entire Agreement</h2>
					<p>
						The Agreement constitutes the entire agreement between You and the
						Company regarding your use of the Application and supersedes all
						prior and contemporaneous written or oral agreements between You and
						the Company.
					</p>

					<p>
						You may be subject to additional terms and conditions that apply
						when You use or purchase other Company&apos;s services, which the
						Company will provide to You at the time of such use or purchase.
					</p>
				</div>

				{/* CONTACT US */}
				<div className="mt-12">
					<h2 className="mb-4 font-semibold text-2xl">Contact Us</h2>
					<p>
						If you have any questions about this agreement, you can contact us:
						by visiting this page on our website:{" "}
						<Button asChild variant="link" className="p-0">
							<Link to="/contact-us">https://millennicare.com/contact-us</Link>
						</Button>
					</p>
				</div>
			</div>
		</div>
	);
}
