import Image from "next/image";
import BackButton from "../../components/BackButton";

export default function CodeOfConductPage() {
    const incidentReportOnsite = process.env.COC_INCIDENT_REPORT_ONSITE ?? "Locate a HuskyHack organizer.";
    const incidentReportEmail = process.env.COC_INCIDENT_REPORT_EMAIL ?? "info.huskyhack@gmail.com";
    const incidentReportPhone = process.env.COC_INCIDENT_REPORT_PHONE ?? "647 785 7388";

    return (
        <div className="relative min-h-[100dvh] w-full overflow-hidden bg-[linear-gradient(to_bottom,#213248,#090F18,#030609)] text-white">
            <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
                <div className="absolute top-0 left-0 h-full w-auto">
                    <Image
                        src="/expectations/left_cave.svg"
                        alt="Cave Left"
                        className="h-full w-auto object-cover md:max-w-none"
                        width={500}
                        height={1000}
                    />
                </div>
                <div className="absolute top-0 right-0 h-full w-auto">
                    <Image
                        src="/expectations/right_cave.svg"
                        alt="Cave Right"
                        className="h-full w-auto object-cover md:max-w-none"
                        width={500}
                        height={1000}
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-4xl items-center px-6 py-16 md:px-10">
                <div className="absolute top-4 left-4 z-20">
                    <BackButton />
                </div>

                <div className="w-full rounded-xl border border-white/15 bg-black/20 p-6 backdrop-blur-sm md:p-10">
                    <h1 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">Code of Conduct</h1>

                    <div className="space-y-5 text-sm leading-7 text-white/90 md:text-base">
                        <p>
                            HuskyHack is dedicated to providing a safe, inclusive, and harassment-free experience for
                            everyone, regardless of gender, gender identity and expression, age, sexual orientation,
                            disability, physical appearance, body size, race, ethnicity, religion, or computing
                            experience. We do not tolerate harassment of event participants in any form.
                        </p>

                        <p>
                            Harassment includes offensive verbal comments related to the aforementioned
                            characteristics, sexual images in public spaces, deliberate intimidation, stalking,
                            following, harassing photography or recording, sustained disruption of talks or other
                            events, inappropriate physical contact, and unwelcome sexual attention.
                        </p>

                        <p>
                            All attendees, sponsors, partners, volunteers, judges, and staff at HuskyHack are
                            required to agree to and strictly adhere to this Code of Conduct.
                        </p>

                        <div className="pt-2">
                            <h2 className="mb-2 text-xl font-semibold text-white">Reporting an Incident</h2>
                            <p>
                                If you experience or witness a violation of this Code of Conduct, or have any other
                                concerns, please report it immediately:
                            </p>
                            <ul className="mt-3 space-y-1">
                                <li>On-site: {incidentReportOnsite}</li>
                                <li>Email: {incidentReportEmail}</li>
                                <li>Phone: {incidentReportPhone}</li>
                            </ul>
                        </div>

                        <p>
                            Participants violating these rules may be sanctioned or expelled from the event without a
                            refund at the discretion of the HuskyHack organizers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}