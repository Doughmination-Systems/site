import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LicensePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-2">The Estrogen Source-Available Licence</h1>
          <p className="text-muted-foreground mb-8"><strong>Version 1.3</strong></p>
          
          <p className="text-sm text-muted-foreground mb-8">
            This Licence may be referred to as the <strong>Estrogen Source-Available Licence (ESAL)</strong>. This specific version may be referred to as <strong>ESAL‑1.3</strong>.
          </p>
          
          <p className="mb-8">Copyright © 2026 Clove Nytrix Doughmination Twilight.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">Permission Grant (Non-Commercial Use)</h2>
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, and distribute the Software <strong>for non-commercial purposes only</strong>, subject to the conditions set out below.
          </p>
          <p>
            Non-commercial use includes, but is not limited to, personal use, academic use, research, experimentation, and use within non-profit or hobbyist projects, <strong>provided that no direct or indirect commercial advantage, monetary compensation, or revenue generation results from use of the Software</strong>.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Attribution</h2>
          <p>All copies or substantial portions of the Software must include the above copyright notice and this Licence.</p>
          <p>Attribution to <strong>"Clove Nytrix Doughmination Twilight"</strong> must be maintained in a reasonable and visible manner in source code distributions and in accompanying documentation.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. No Misrepresentation</h2>
          <p>You may not misrepresent the origin of the Software.</p>
          <p>Modified versions must be clearly identified as modified and must not be presented as being authored, endorsed, or distributed by Clove Nytrix Doughmination Twilight without prior written permission.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Commercial Use Restriction</h2>
          <p>The Software may not be used, in whole or in part, for any commercial purpose without a separate, written commercial licence granted by Clove Nytrix Doughmination Twilight.</p>
          <p>For the purposes of this Licence, <em>commercial use</em> includes, but is not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>selling, licensing, sublicensing, or otherwise monetising the Software or derivative works;</li>
            <li>using the Software as part of any product, service, or platform that generates revenue;</li>
            <li>use by a for-profit entity where the Software contributes to business operations, service delivery, or profit generation;</li>
            <li>providing paid services, hosting, consultancy, or support that relies upon or incorporates the Software.</li>
          </ul>
          <p>Commercial licensing terms (including fees and/or revenue-sharing arrangements) shall be determined on a case-by-case basis.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Commercial Licensing</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">4.1 Obtaining a Commercial Licence</h3>
          <p>Any individual or organisation wishing to use the Software for a commercial purpose must obtain a separate, written commercial licence.</p>
          <p>Requests for commercial licensing must be made via email to:</p>
          <p><a href="mailto:admin@doughmination.win" className="text-primary hover:underline"><strong>admin@doughmination.win</strong></a></p>
          <p>Commercial licence terms may include fees, revenue-sharing arrangements, usage limitations, or other conditions, and are granted solely at the discretion of Clove Nytrix Doughmination Twilight.</p>

          <h3 className="text-xl font-medium mt-6 mb-3">4.2 Pre-Authorised Commercial Licensees</h3>
          <p>Clove Nytrix Doughmination Twilight may maintain a file named <strong>allowed_people.md</strong> listing individuals or organisations that have been granted permission to use the Software commercially.</p>
          <p>If <strong>allowed_people.md</strong> is present and lists a party, that listing constitutes evidence of an active commercial licence, subject to any terms specified therein.</p>
          <p>If <strong>allowed_people.md</strong> does <strong>not</strong> exist, or if a party is not listed within it, <strong>no commercial licence is granted</strong>, and commercial use remains prohibited.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Trademarked Components</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">5.1 Definition</h3>
          <p>For the purposes of this Licence, <strong>"Trademarked Components"</strong> means any names, systems, frameworks, identifiers, branding, terminology, logos, marks, or distinctive elements that are protected by trademark or otherwise designated as trademarked by Clove Nytrix Doughmination Twilight, whether registered or unregistered, now existing or created in the future.</p>
          <p>Trademarked Components include, but are not limited to, any elements that are:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>explicitly identified as trademarks;</li>
            <li>referenced as part of a branded system, methodology, or product line;</li>
            <li>required for compatibility with, recognition of, or association with a trademarked offering;</li>
            <li>reasonably understood to indicate origin, endorsement, or branding by Clove Nytrix Doughmination Twilight.</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">5.2 Ownership and Listed Trademarks</h3>
          <p>This Licence does not grant permission to use any trademarks, trade names, service marks, or logos associated with Clove Nytrix Doughmination Twilight.</p>
          <p>The following trademarks are currently claimed or owned by Clove Nytrix Doughmination Twilight:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Doughmination System®</strong> (United Kingdom, UK00004263144)</li>
          </ul>
          <p>This list is <strong>non-exhaustive</strong>. Any future trademarks, trademark applications, or unregistered marks designated by Clove Nytrix Doughmination Twilight are automatically considered Trademarked Components under this Licence.</p>

          <h3 className="text-xl font-medium mt-6 mb-3">5.3 Restriction on Modification and Reuse</h3>
          <p>Any Trademarked Components, and any Software components that are connected to, rely upon, implement, enable, or are designed to operate in conjunction with such Trademarked Components, <strong>may not be modified, adapted, reworked, extracted, repurposed, or redistributed</strong>, in whole or in part, without prior written permission from Clove Nytrix Doughmination Twilight.</p>
          <p>This includes both direct modification and indirect modification through derivative works, abstractions, renaming, or functional equivalents that preserve the trademarked identity or system.</p>

          <h3 className="text-xl font-medium mt-6 mb-3">5.4 Separation from Non-Trademarked Use</h3>
          <p>Projects, forks, or derivative works that do <strong>not</strong> reference, include, depend upon, or associate with any Trademarked Components remain fully subject to the permissions and restrictions set out elsewhere in this Licence and may be modified in accordance with its terms.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Warranty Disclaimer and Limitation of Liability</h2>
          <p className="uppercase text-sm">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="uppercase text-sm">
            IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OR OTHER DEALINGS IN THE SOFTWARE.
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. No Endorsement or Affiliation</h2>
          <p>Use of the Software does not imply endorsement, sponsorship, affiliation, or approval by Clove Nytrix Doughmination Twilight.</p>
          <p>You may not state or suggest that Clove Nytrix Doughmination Twilight endorses, certifies, supports, or is affiliated with any project, product, service, or derivative work without prior written permission.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. No Compatibility or Certification Claims</h2>
          <p>You may not claim or imply that the Software, or any modified or derivative version thereof, is compatible with, certified by, approved by, or officially associated with any trademarked system or offering of Clove Nytrix Doughmination Twilight, including any Trademarked Components, without express written authorisation.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. No Implied Rights</h2>
          <p>No rights or permissions are granted under this Licence except those expressly stated.</p>
          <p>Any use of the Software beyond the scope of this Licence requires prior written permission from Clove Nytrix Doughmination Twilight.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Source-Available, Not Open Source</h2>
          <p>This Licence makes the source code available for inspection, modification, and non-commercial use under defined conditions.</p>
          <p>It is <strong>not</strong> an open-source licence as defined by the Open Source Initiative, and no rights should be inferred or assumed beyond those explicitly granted herein.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Revocation of Commercial Licences</h2>
          <p>Clove Nytrix Doughmination Twilight reserves the right to revoke any granted commercial licence at any time, with or without cause, subject to any written terms agreed with the commercial licensee.</p>
          <p>Upon revocation, all commercial use of the Software must cease immediately unless otherwise agreed in writing.</p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law (Trademark Matters)</h2>
          <p>All matters relating to trademarks, Trademarked Components, and trademark enforcement under this Licence shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>, without regard to conflict-of-law principles.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LicensePage;
