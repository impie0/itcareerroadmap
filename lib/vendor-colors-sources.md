# Vendor brand-colour sources & audit log

Each hex in `lib/vendor-colors.ts` is verified against the vendor's brand guide / press kit / design system or, failing that, community brand databases (BrandColors, BrandColorCode, encycolorpedia, SimpleIcons) cross-checked against the live logo SVG. Where multiple "official" hexes exist, the value picked matches the wordmark; alternates noted.

## Cloud (hyperscale + IaaS)

- **aws / amazon → #FF9900** — AWS Orange, PMS 1375 C. <https://brandpalettes.com/amazon-web-services-logo-colors/>
- **microsoft / azure → #0078D4** — Microsoft "interaction blue" (Azure, M365, Microsoft Learn cert badges). The four-square corporate logo splits #00A4EF/#F25022/#7FBA00/#FFB900; #0078D4 dominates digital. <https://www.brandcolorcode.com/microsoft-azure>
- **google / google cloud / gcp → #4285F4** — Google Blue, Material. <https://usbrandcolors.com/google-colors/>
- **oracle / oci / oracle health / cerner → #C74634** — Oracle Red. Oracle Health (ex-Cerner) folds into parent. <https://usbrandcolors.com/oracle-colors/>
- **ibm / ibm cloud / qradar → #0530AD** — Big Blue, IBM iX Brand Guidelines (2018). <https://www.ibm.com/design/event/files/IBM_iX_Brand_Guidelines_101218.pdf>

## Linux / OS / open source foundations

- **red hat / redhat / ansible → #EE0000** — Red Hat Red. Ansible inherits parent palette. <https://www.redhat.com/en/about/brand/standards/color>
- **suse → #30BA78** — Jungle Green. <https://brand.suse.com/>
- **linux foundation → #FF00AA** — Hollywood Cerise (LF rebrand). <https://www.linuxfoundation.org/brand-guidelines>
- **lpi → #003A70** — LPI navy (legacy retained — matches lpi.org).
- **cncf → #326CE5** — Aligns with Kubernetes blue. <https://www.cncf.io/brand-guidelines/>

## Networking / hardware

- **cisco / cisco devnet → #049FD9** — Cisco Blue, PMS 299 C. <https://encycolorpedia.com/049fd9>
- **cisco meraki / meraki → #67B346** — Miles Green, PMS 368 U. <https://relayto.com/explore/cisco-meraki-partner-brand-book-xgr48yo5m0ok2/oLSv9Jxj9>
- **juniper / mist → #84B135** — Juniper Brand Green. Mist is Juniper-branded. <https://www.juniper.net/content/dam/www/assets/additional-resources/us/en/juniper-brand-palette.pdf>
- **aruba / hpe aruba → #FF8300** — Aruba Orange, Brand Guide v2.1. <https://brandcentral.hpe.com/uploads/media/2021/1/aruba-brand-guide_v21_012021-1611807380370.pdf>
- **hpe → #01A982** — Legacy HPE green (design system also lists #00B388). <https://design-system.hpe.design/foundation/color>
- **arista → #16325B** — Arista Blue, PMS 648 C. (Updated.) <https://www.arista.com/assets/data/pdf/Arista-Brand-Guidelines.pdf>
- **mikrotik → #390879** — MikroTik Blue (deep purple-blue). (Updated.) <https://mikrotik.com/logo>
- **huawei → #CF0A2C** — Huawei Red, PMS 186 C. <https://encycolorpedia.com/companies/china/huawei>
- **extreme networks → #5C2EA3** — Extreme Purple (no public hex; matches site nav).
- **versa networks → #62BB46** — Apple green. <https://brandfetch.com/versa-networks.com>

## Firewall / network security

- **palo alto networks → #F04D1E** — PAN Orange, PMS 1665 C. (Updated.) <https://www.paloaltonetworks.com/company/brand>
- **fortinet → #DA291C** — Fortinet Red, PMS 485 C. (Updated.) <https://informaticaempresarial.mx/wp-content/uploads/2021/02/Fortinet-Brand-Guidelines-Partnerv2.3.pdf>
- **check point → #E8333D** — Check Point red (PDF gated; SVG matches). <https://www.checkpoint.com/downloads/company/check-point-brand-guidelines-2025.pdf>
- **f5 → #E4002B** — F5 Red, PMS 185 C. (Updated.) <https://brand.f5.com/presskit>
- **sonicwall → #FF7E2B** — Orange family per Brandfolder. <https://brandfolder.com/sonicwall>
- **sophos → #0A3A82** — Sophos Navy. (Updated — previous red was secondary.) <https://brand.sophos.com/>
- **cloudflare → #F38020** — Cloudflare Tango. <https://www.brandcolorcode.com/cloudflare>
- **zscaler → #009CDA** — Zscaler rich electric blue. <https://www.zscaler.com/sites/default/files/images/page/media-kit/resources/zscaler-brandguidelines30-r3-30jul19.pdf>

## Storage / backup / data protection

- **netapp → #0067C5** — NetApp Blue, LUCI Design System. <https://luci.netapp.com/visual-language/color.html>
- **pure storage → #FE5000** — Pure Orange. (Updated.) <https://www.purestorage.com/content/dam/pdf/en/legal/trademark-usage-guidelines.pdf>
- **dell / dell technologies → #0076CE** — Dell Blue, PMS 2174 C. <https://delldesignsystem.com/foundations/color>
- **veeam → #00D15F** — Veeam Viridis. (Updated.) <https://www.veeam.com/company/brand-resource-center.html>
- **commvault → #0E2240** — Commvault Navy (2024 rebrand).
- **rubrik → #00B388** — Rubrik green, Brand Identity v1.1. <https://www.rubrik.com/content/dam/rubrik/brand/rubrik_style_guide_v1.1.pdf>
- **cohesity → #67BF1B** — Cohesity Green, Logo Guidelines (July 2025). <https://www.cohesity.com/content/dam/cohesity/media-kit/cohesity-logo-guidelines.pdf>

## Hypervisor / virtualisation

- **vmware → #717074** — Cool Gray 11. <https://datasheet.datasheetarchive.com/originals/crawler/vmware.com/4dce22f6c68cc46e3ea4fba9519443a5.pdf>
- **vmware/broadcom / broadcom → #CC092F** — Broadcom Red, PMS 186 C. <https://docs.broadcom.com/doc/1232742686>
- **omnissa → #0091DA** — Cyan from omnissa.com (no public guide).
- **nutanix → #0091DA** — Nutanix Blue, PMS 2191 C. <https://www.nutanix.com/newsroom/media-resources>
- **citrix → #0045DB** — Science Blue. (Updated.) <https://brand.citrix.com/brand-system/color/>
- **proxmox → #E57000** — Sampled from press SVG.

## SIEM / EDR / SOC tooling

- **splunk → #FF6600** — Splunk Orange. <https://coloropedia.com/splunk-colors-logo-codes/>
- **crowdstrike → #FC0000** — Brand ID 2025. <https://www.crowdstrike.com/content/dam/crowdstrike/marketing/en-us/documents/pdfs/brand/CrowdStrike-Brand-ID-2025.pdf>
- **sentinelone → #6100FF** — Brand purple gradient (#4500B6→#6100FF). <https://www.sentinelone.com/brand-guidelines/>
- **elastic → #00BFB3** — Elastic Teal, EUI tokens. <https://eui.elastic.co/docs/getting-started/theming/tokens/colors/>
- **tenable → #00674B** — Forest green from tenable.com nav.
- **rapid7 → #F15A22** — Rapid7 Orange. <https://brand.rapid7.com/>
- **wiz → #1A3AFF** — Vibrant blue per identity case study. <https://www.wiz.io/blog/the-magic-of-branding>
- **snyk → #4C4A73** — Navy/purple wordmark. <https://brandfetch.com/snyk.io>

## Identity / PAM / endpoint management

- **okta → #007DC1** — Okta Blue. <https://www.okta.com/press-room/media-assets/logos/blue/>
- **cyberark → #016A95** — Bahama Blue. <https://www.brandcolorcode.com/cyberark>
- **ping identity → #B8232F** — Ping Red. <https://logotyp.us/logo/ping/>
- **sailpoint → #0071CE** — Science Blue. <https://brandfetch.com/sailpoint.com>
- **saviynt → #0A3AFF** — Sampled from saviynt.com (no published guide).
- **beyondtrust → #FF5500** — International Orange. <https://www.beyondtrust.com/brand>
- **delinea → #1F3864** — Navy from delinea.com.
- **jamf → #3E97FC** — Dodger Blue, Jamf Brand Style Guide for Partners. <https://resources.jamf.com/documents/services/jamf-brand-style-guide-for-partners.pdf>

## SaaS ecosystems

- **salesforce → #00A1E0** — Salesforce Blue, PMS 2925 C. <https://www.brandcolorcode.com/salesforce>
- **mulesoft → #00A1DF** — MuleSoft Blue, PMS 299 C. <https://www.brandcolorcode.com/mulesoft>
- **tableau → #E8762D** — Tableau Orange (logo).
- **sap → #1C64BE** — SAP Blue. <https://www.sap.com/design-system/digital/foundations/identity/color/>
- **servicenow → #62D84E** — ServiceNow signature green. (Updated — previous #293E40 was their secondary palette.) <https://hi.service-now.com/styles/heisenberg/styleguide/docs/guidelines_-_colors.html>
- **workday → #F4990B** — Workday Orange. (Updated.) <https://coloropedia.com/workday-colors-logo-codes/>
- **adobe → #ED2224** — Adobe Funky Red (corporate; Acrobat uses #FA0F00). <https://www.brandcolorcode.com/adobe>
- **atlassian → #0052CC** — Pacific Bridge B400. <https://atlassian.design/foundations/color>

## DevOps / IaC / containers / CI

- **hashicorp → #000000** — Corporate brand is monochrome black/white. <https://brand.hashicorp.com/>
- **terraform → #844FBA** — Terraform purple (Helios design tokens).
- **docker / docker/mirantis → #2496ED** — Docker Blue. <https://www.docker.com/company/newsroom/media-resources/>
- **kubernetes → #326CE5** — Kubernetes Blue, PMS 285 C. <https://github.com/kubernetes/kubernetes/blob/master/logo/colors.md>
- **github → #24292F** — GitHub dark. (Updated from #181717.) <https://brand.github.com/foundations/color>
- **gitlab → #FC6D26** — Sporty Orange. <https://design.gitlab.com/brand-design/color/>
- **circleci → #049B4A** — Green Haze. <https://logotyp.us/logo/circleci/>
- **jenkins → #D33833** — Persian Red. <https://www.jenkins.io/artwork/>

## Observability / SRE

- **datadog → #632CA6** — PMS Violet C. (Updated.) <https://www.datadoghq.com/about/resources/>
- **new relic → #1CE783** — New Relic green (2022 refresh). <https://newrelic.com/blog/news/new-brand-announcement>
- **dynatrace → #1496FF** — Dodger Blue. <https://live.standards.site/dynatrace/color>
- **honeycomb → #F5A623** — Yellow-orange wordmark from honeycomb.io.
- **grafana → #F05A28** — Grafana Orange. <https://www.brandcolorcode.com/grafana>
- **prometheus → #E6522C** — From prometheus.io brand assets.
- **pagerduty → #048A24** — Fun Green. <https://brandguides.brandfolder.com/pagerduty/color>
- **opentelemetry → #F5A800** — OTel yellow-orange.

## Data / ML / analytics

- **snowflake → #29B5E8** — Snowflake Blue. <https://select.dev/posts/snowflake-logo>
- **databricks → #FF3621** — Red Orange. <https://brandguides.brandfolder.com/databricks-extended-brand-guidelines/colors>
- **mongodb → #00ED64** — Spring Green, PMS 2270 C. <https://www.mongodb.design/foundations/palette>
- **datastax → #3A3A3A** — Charcoal wordmark.
- **confluent → #173361** — Navy from confluent.io.
- **dbt → #FF694A** — dbt Labs orange-coral.
- **nvidia → #76B900** — NVIDIA Green, PMS 376 C. <https://www.nvidia.com/content/dam/en-zz/Solutions/about-us/documents/NVIDIA-Trademark-and-Logo-Usage-Guidelines.pdf>

## Healthcare IT

- **epic / epic systems → #CC0000** — Deep red from epic.com headers.
- **cerner / oracle health → #C74634** — Oracle Red (parent).
- **meditech → #0072CE** — Meditech blue from ehr.meditech.com.

## Security / GRC / training

- **isc2 → #1C5D99** — ISC2 navy. <https://www.isc2.org/policies-procedures/member-policies>
- **isaca → #005EB8** — ISACA Blue. <https://brand.isaca.org/visual-style>
- **sans / giac → #005980** — SANS Orient navy + #FFBA30 sunglow secondary. <https://brandfetch.com/sans.org>
- **ec-council → #ED1C24** — EGS Brand Manual 2020. <https://egs.eccouncil.org/wp-content/uploads/2020/06/EGS-Brand-Guide.pdf>
- **iapp → #1E3A5F** — Navy from iapp.org.
- **offsec / offensive security → #5D8C2F** — Green from offsec.com.
- **tcm security → #0A8754** — Forest green from academy.tcm-sec.com.
- **pentester academy → #1D4E89** — Navy from pentesteracademy.com.
- **csa → #005689** — Navy from cloudsecurityalliance.org.
- **hackthebox → #9FEF00** — Neon green per hackthebox.com.
- **tryhackme → #88CC14** — Lime per tryhackme.com.
- **ine → #FC4503** — INE/eLearnSecurity orange.
- **istqb → #123962** — Chathams Blue. <https://brandfetch.com/istqb.org>

## PM / agile / architecture / facilities / MOOCs

- **pmi → #F1521B** — PMI Tangerine, 2019 Superunion rebrand. <https://www.underconsideration.com/brandnew/archives/new_logo_and_identity_for_project_management_institute_by_superunion.php>
- **scrum.org → #1C4271**, **scrum alliance → #0C2657** — Navys matching site headers.
- **scaled agile → #0072CE** — Blue from scaledagile.com.
- **itil / peoplecert / axelos → #6C3FA9** — ITIL purple.
- **togaf / open group → #00306E** — Open Group navy.
- **cwnp → #063A78**, **bicsi → #003876**, **uptime institute → #0066B3** — Navys retained from prior file; match site headers.
- **coursera → #0056D2**, **udacity → #02B3E4**, **pluralsight → #F15B2A**, **linkedin learning → #0A66C2** — Matched to site headers / logo SVGs.
- **freecodecamp → #006400** — Per their style guide. <https://design-style-guide.freecodecamp.org/>
- **test automation u → #EE2E24** — Red from testautomationu.applitools.com.

---

## Could NOT confidently source — flag for review

No published brand-colour reference; values are best-effort visual matches from logo SVG / site CSS:

- **Saviynt, Proxmox, Honeycomb, Confluent, DataStax, Mirantis, Delinea, IAPP, CSA, Pentester Academy, TCM, Scaled Agile, Versa, Omnissa, Extreme Networks, SonicWall, Epic, Meditech, Tableau, dbt, OpenTelemetry, Prometheus, Snyk** — sampled from headers / wordmark SVGs (colour family confirmed; exact hex inferred).

Treat as "brand-aligned" rather than "brand-verified".
