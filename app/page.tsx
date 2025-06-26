import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Youtube, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BioAnimation } from "@/components/bio-animation"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <BioAnimation />

      <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/80 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-teal-700">
              <span className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-29%20162256-IY7YPb0hoMvRgRUhjc9ocPazrNZy8X.png"
                  alt="Research Lab"
                  width={30}
                  height={30}
                  className="rounded object-cover"
                />
                Chitrangana Singha
              </span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-slate-700 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="#research" className="text-slate-700 hover:text-teal-600 transition-colors">
                Research
              </Link>
              <Link href="#blog" className="text-slate-700 hover:text-teal-600 transition-colors">
                Blog
              </Link>
              <Link href="#projects" className="text-slate-700 hover:text-teal-600 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-teal-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="outline" className="md:hidden border-slate-300 text-slate-700">
              <Menu className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 via-purple-300 to-indigo-300 opacity-70 blur"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-29%20162256-IY7YPb0hoMvRgRUhjc9ocPazrNZy8X.png"
                alt="Research Laboratory - Chitrangana Singha"
                width={300}
                height={300}
                className="rounded-lg relative border-4 border-white object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Hello, I'm <span className="text-teal-600">Chitrangana Singha</span>
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Biotech Researcher | Protein Biophysics | Human Anatomy Specialist
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Exploring the frontiers of biotechnology with a focus on protein structures and innovative disease
              treatments. Currently pursuing post-graduate studies in Japan at the Laboratory of Protein Biophysics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-teal-600 hover:bg-teal-700">View My Research</Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                Read My Blog
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-indigo-300 rounded-lg transform -rotate-1"></div>
                <h2 className="relative text-3xl font-bold text-white bg-slate-800 px-6 py-2 rounded-lg">About Me</h2>
              </div>
            </div>

            <div className="prose prose-slate lg:prose-lg max-w-none">
              <p>
                I am a passionate biotech researcher with a deep interest in human anatomy and developing innovative
                treatments for diseases. My research journey has led me to Japan, where I am currently pursuing
                post-graduate studies at the prestigious Laboratory of Protein Biophysics.
              </p>
              <p>
                My work focuses on understanding protein structures and their role in disease mechanisms, with the goal
                of developing targeted therapies that can improve human health and longevity. I combine traditional
                biochemical approaches with cutting-edge computational methods to explore the complex world of cellular
                biology.
              </p>
              <p>
                Beyond the laboratory, I maintain a balanced lifestyle through yoga, resistance training, and running.
                I'm an avid reader who enjoys exploring scientific literature as well as philosophy and fiction. This
                holistic approach to life informs my research, helping me see connections across disciplines and
                inspiring innovative solutions to complex problems.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Research Focus</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-teal-100 border border-teal-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Protein Structure Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-teal-100 border border-teal-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Neurodegenerative Diseases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-teal-100 border border-teal-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Drug Target Identification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">Technical Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-100 border border-purple-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>X-ray Crystallography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-100 border border-purple-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Molecular Dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-purple-100 border border-purple-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>CRISPR-Cas9 Gene Editing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Personal Interests</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-100 border border-blue-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Yoga & Resistance Training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-100 border border-blue-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Muscle Hypertrophy Research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-100 border border-blue-300 flex-shrink-0 mt-1 mr-2"></span>
                    <span>Scientific Literature</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-300 rounded-lg transform -rotate-1"></div>
                <h2 className="relative text-3xl font-bold text-white bg-slate-800 px-6 py-2 rounded-lg">
                  Research Publications
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-indigo-100 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-indigo-600 mb-2">2023</div>
                      <div className="text-sm text-slate-600">Journal of Molecular Biology</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Structural Insights into Protein-Protein Interactions in Cellular Signaling Pathways
                    </h3>
                    <p className="text-slate-600 mb-4">
                      This paper presents novel findings on the structural basis of key protein-protein interactions
                      involved in cellular signaling, with implications for drug discovery and therapeutic intervention
                      in various diseases.
                    </p>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Read Publication
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-teal-100 to-blue-100 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-teal-600 mb-2">2022</div>
                      <div className="text-sm text-slate-600">Nature Neuroscience</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Novel Approaches to Targeting Protein Aggregation in Neurodegenerative Disorders
                    </h3>
                    <p className="text-slate-600 mb-4">
                      This review article discusses emerging strategies for preventing and reversing protein aggregation
                      in conditions such as Alzheimer's and Parkinson's disease, highlighting recent advances in the
                      field.
                    </p>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Read Publication
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-indigo-100 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-blue-600 mb-2">2021</div>
                      <div className="text-sm text-slate-600">Journal of Computational Chemistry</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Computational Prediction of Protein-Ligand Binding Affinities: A Machine Learning Approach
                    </h3>
                    <p className="text-slate-600 mb-4">
                      This research paper presents a novel machine learning algorithm for predicting the binding
                      affinities of small molecules to protein targets, with applications in virtual screening and drug
                      discovery.
                    </p>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      Read Publication
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-300 rounded-lg transform -rotate-1"></div>
                <h2 className="relative text-3xl font-bold text-white bg-slate-800 px-6 py-2 rounded-lg">Blog</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      The Intersection of Exercise Science and Molecular Biology
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-600 mb-4">
                    This article explores the molecular mechanisms behind muscle hypertrophy and how understanding these
                    pathways can inform both exercise regimens and therapeutic interventions for muscle-wasting
                    conditions.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">April 15, 2023</span>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      Mindfulness in Scientific Research: A Personal Journey
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-600 mb-4">
                    This reflective piece discusses how mindfulness practices like yoga can enhance scientific thinking,
                    problem-solving, and creativity in the laboratory, drawing from personal experiences and scientific
                    literature.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">March 2, 2023</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      Navigating Academic Research in Japan
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-600 mb-4">
                    This article shares personal experiences and practical advice for researchers considering
                    international academic opportunities, with a focus on adapting to Japanese research culture and
                    environment.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">February 18, 2023</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      The Future of Personalized Medicine
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-slate-600 mb-4">
                    This forward-looking article examines how advances in biotechnology, genomics, and computational
                    biology are paving the way for truly personalized medical treatments tailored to individual genetic
                    profiles.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">January 5, 2023</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-slate-300 text-slate-700">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-300 rounded-lg transform -rotate-1"></div>
                <h2 className="relative text-3xl font-bold text-white bg-slate-800 px-6 py-2 rounded-lg">
                  Research Projects
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="h-full relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Protein Misfolding Project"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">Ongoing</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Protein Misfolding in Neurodegenerative Diseases
                    </h3>
                    <p className="text-slate-600 mb-4">
                      This project explores the molecular mechanisms behind protein misfolding and aggregation in
                      neurodegenerative disorders, with a focus on developing novel therapeutic approaches to prevent or
                      reverse these processes.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">Alzheimer's</span>
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                        Protein Aggregation
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">Drug Discovery</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      View Project Details
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="h-full relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Drug Delivery Project"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Collaboration</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Targeted Drug Delivery Systems</h3>
                    <p className="text-slate-600 mb-4">
                      This research focuses on designing smart drug delivery systems that can specifically target cancer
                      cells while minimizing side effects on healthy tissues, improving the efficacy and safety of
                      cancer treatments.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">Nanoparticles</span>
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">Cancer Therapy</span>
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                        Targeted Delivery
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      View Project Details
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-slate-200 transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <div className="h-full relative">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="CRISPR Project"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">New</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">CRISPR-Based Therapeutic Approaches</h3>
                    <p className="text-slate-600 mb-4">
                      This research explores the application of CRISPR-Cas9 technology for correcting genetic mutations
                      associated with inherited diseases, with a focus on delivery methods and minimizing off-target
                      effects.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">CRISPR</span>
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">Gene Therapy</span>
                      <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                        Genetic Disorders
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-300 text-slate-700">
                      View Project Details
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="h-12 w-12 text-white mb-4" />
                <span className="text-white font-medium">GitHub</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-12 w-12 text-white mb-4" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Youtube className="h-12 w-12 text-white mb-4" />
                <span className="text-white font-medium">YouTube</span>
              </a>

              <a
                href="mailto:chitrangana.singha@gmail.com"
                className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="h-12 w-12 text-white mb-4" />
                <span className="text-white font-medium">Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-300 rounded-lg transform -rotate-1"></div>
                <h2 className="relative text-3xl font-bold text-white bg-slate-800 px-6 py-2 rounded-lg">
                  Get In Touch
                </h2>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                Chitrangana Singha
              </Link>
              <p className="mt-2 text-slate-400">Biotech Researcher | Protein Biophysics | Human Anatomy Specialist</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
              <p className="text-slate-400">Laboratory of Protein Biophysics, Japan</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6">
            <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#research" className="text-slate-400 hover:text-white transition-colors">
              Research
            </Link>
            <Link href="#blog" className="text-slate-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#projects" className="text-slate-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
