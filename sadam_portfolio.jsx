import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <motion.h1 className="text-4xl font-bold mb-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Sadam Hussain S
        </motion.h1>
        <p className="text-lg">Cisco Certified Network Associate (CCNA) | Network & IT Support Engineer</p>
        <div className="mt-4 space-x-4">
          <Button variant="secondary" asChild>
            <a href="/resume.pdf" download>View Resume</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/sadam-hussain-s-12b35b234" target="_blank">LinkedIn</a>
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">About Me</h2>
        <p>
          I am a dedicated IT and networking professional with a Bachelor’s Degree in Computer Science Engineering and a Diploma in Computer Engineering. My focus lies in network infrastructure, troubleshooting, and IT support. I have hands-on experience through the Datacom Service Desk Job Simulation (Forage), where I developed technical and communication skills for real-world IT environments.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Core Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card><CardContent className="p-4"><h3 className="font-semibold">Networking</h3><p>VLANs, Subnetting, Routing Protocols, ACLs, VPN Configuration</p></CardContent></Card>
            <Card><CardContent className="p-4"><h3 className="font-semibold">Tools & Platforms</h3><p>Cisco Packet Tracer, GNS3, Wireshark, Putty</p></CardContent></Card>
            <Card><CardContent className="p-4"><h3 className="font-semibold">Operating Systems</h3><p>Cisco IOS, Windows Server, Linux (basic)</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Project Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">End-to-End Enterprise Network Design & Configuration</h3>
            <p>
              Designed and implemented a multi-router topology connecting multiple subnets using RIP, OSPF, and EIGRP routing protocols for redundancy. Integrated ACLs, NAT, and VLANs to enhance network security and segmentation. Validated performance using Wireshark and Cisco CLI commands.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Certifications */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Certifications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cisco Certified Network Associate (CCNA) — Suren Network Technologies (2025)</li>
            <li>Service Desk Job Simulation — Datacom (Forage, 2025)</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:sadamhussain200116@gmail.com" className="flex items-center gap-2"><Mail size={18}/> sadamhussain200116@gmail.com</a>
            <a href="tel:+971564716571" className="flex items-center gap-2"><Phone size={18}/> +971564716571</a>
            <a href="https://www.linkedin.com/in/sadam-hussain-s-12b35b234" target="_blank" className="flex items-center gap-2"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://theforage.com/" target="_blank" className="flex items-center gap-2"><Globe size={18}/> Forage Profile</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
